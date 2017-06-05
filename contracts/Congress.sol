pragma solidity ^0.4.11;

import "./owned.sol";
import "./tokenRecipient.sol";

contract Congress is owned, tokenRecipient {

  /* Contract Variables and events */
  string name;
  Proposal[] public proposals;
  uint public numProposals;
  mapping (address => uint) public memberId;
  Member[] public members;

  event ProposalAdded(
    uint proposalID,
    address recipient,
    string description
  );

  event Voted(
    uint proposalID,
    address voter
  );

  event MembershipChanged(address member, bool isMember);

  struct Proposal {
    address recipient;
    uint amount;
    string description;
    uint numberOfVotes;
    bytes32 proposalHash;
    Vote[] votes;
    mapping (address => bool) voted;
  }

  struct Member {
    address member;
    string name;
    uint memberSince;
  }

  struct Vote {
    bool inSupport;
    address voter;
  }

  /* modifier that allows only shareholders to vote and create new proposals */
  modifier onlyMembers {
    if (memberId[msg.sender] == 0) throw;
    _;
  }

  /* First time setup */
  function Congress(
    string _name,
    address congressLeader
  ) payable {
    if (congressLeader != 0) owner = congressLeader;
    name = _name;
    // It’s necessary to add an empty first member
    addMember(0, '');
    // and let's add the founder, to save a step later
    addMember(owner, 'founder');
  }

  /*make member*/
  function addMember(address targetMember, string memberName) onlyOwner {
    if (memberId[targetMember] != 0) return;
    uint id;
    memberId[targetMember] = members.length;
    id = members.length++;
    members[id] = Member({
      member: targetMember,
      memberSince: now,
      name: memberName
    });
    MembershipChanged(targetMember, true);
  }

  function removeMember(address targetMember) onlyOwner {
    if (memberId[targetMember] == 0) throw;

    for (uint i = memberId[targetMember]; i < members.length - 1; i++) {
      members[i] = members[i + 1];
    }

    delete members[members.length - 1];
    members.length--;
  }

  /* Function to create a new proposal */
  function newProposal(
    address beneficiary,
    uint etherAmount,
    string JobDescription,
    bytes transactionBytecode
  )
    onlyMembers
    returns (uint proposalID)
  {
    proposalID = proposals.length++;
    Proposal p = proposals[proposalID];
    p.recipient = beneficiary;
    p.amount = etherAmount;
    p.description = JobDescription;
    p.proposalHash = sha3(beneficiary, etherAmount, transactionBytecode);
    p.numberOfVotes = 0;
    ProposalAdded(proposalID, beneficiary, JobDescription);
    numProposals = proposalID + 1;

    return proposalID;
  }

  /* function to check if a proposal code matches */
  function checkProposalCode(
    uint proposalNumber,
    address beneficiary,
    uint etherAmount,
    bytes transactionBytecode
  )
    constant
    returns (bool codeChecksOut)
  {
    Proposal p = proposals[proposalNumber];
    return p.proposalHash == sha3(
      beneficiary,
      etherAmount,
      transactionBytecode
    );
  }

  function vote(uint proposalNumber) onlyMembers returns (uint voteID) {
    Proposal p = proposals[proposalNumber];  // Get the proposal
    if (p.voted[msg.sender] == true) throw;  // If has already voted, cancel
    p.voted[msg.sender] = true;              // Set this voter as having voted
    p.numberOfVotes++;                       // Increase score
    // Create a log of this event
    Voted(proposalNumber, msg.sender);
    return p.numberOfVotes;
  }
}
