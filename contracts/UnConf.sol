pragma solidity ^0.4.11;

import "./owned.sol";
import "./tokenRecipient.sol";

contract UnConf is owned, tokenRecipient {

  /* Contract Variables and events */
  string public name;
  Topic[] public topics;
  uint public numProposals;
  mapping (address => uint) public memberId;
  Member[] public members;

  event TopicAdded(uint topicID, address proposer, string description);
  event Voted(uint topicID, address voter);
  event MembershipChanged(address member, bool isMember);

  struct Topic {
    address proposer;
    uint amount;
    string description;
    uint numberOfVotes;
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
  function UnConf(string _name) payable {
    name = _name;
    // It’s necessary to add an empty first member
    addMember(0, '');
    // and let's add the founder, to save a step later
    addMember(owner, 'founder');
  }

  /*make member*/
  function addMember(address targetMember, string memberName) returns (bool success){
    if (memberId[targetMember] != 0) return false;
    uint id;
    memberId[targetMember] = members.length;
    id = members.length++;
    members[id] = Member({
      member: targetMember,
      memberSince: now,
      name: memberName
    });
    MembershipChanged(targetMember, true);
    return true;
  }

  function getVoteCount() constant onlyOwner returns (uint[] votes) {
    for(uint i = 0; i < topics.length; i++) {
      votes[i] = topics[i].numberOfVotes;
    }
    return votes;
  }

  function getMembersCount() constant onlyOwner returns (uint count) {
    return members.length;
  }

  function getMemberName(address targetMember) constant returns (string name) {
    uint member_id = memberId[targetMember];
    if (member_id == 0) throw;
    return members[member_id].name;
  }

  function getMemberSince(address targetMember) constant returns (uint since) {
    uint member_id = memberId[targetMember];
    if (member_id == 0) throw;
    return members[member_id].memberSince;
  }

  function removeMember(address targetMember) onlyOwner {
    if (memberId[targetMember] == 0) throw;

    for (uint i = memberId[targetMember]; i < members.length - 1; i++) {
      members[i] = members[i + 1];
    }

    memberId[targetMember] = 0;
    delete members[members.length - 1];
    members.length--;
  }

  /* Function to create a new proposal */
  function newProposal(string topicDescription)
    onlyMembers
    returns (uint topicID)
  {
    topicID = topics.length++;
    Topic p = topics[topicID];
    p.proposer = msg.sender;
    p.description = topicDescription;
    p.numberOfVotes = 0;
    TopicAdded(topicID, msg.sender, topicDescription);
    numProposals = topicID + 1;

    return topicID;
  }

  function vote(uint topicID) onlyMembers returns (uint voteID) {
    Topic p = topics[topicID];               // Get the proposal
    if (p.voted[msg.sender] == true) throw;  // If has already voted, cancel
    p.voted[msg.sender] = true;              // Set this voter as having voted
    p.numberOfVotes++;                       // Increase score
    // Create a log of this event
    Voted(topicID, msg.sender);
    return p.numberOfVotes;
  }
}
