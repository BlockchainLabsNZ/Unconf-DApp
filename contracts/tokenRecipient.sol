pragma solidity ^0.4.11;

contract tokenRecipient {
  event receivedEther(address sender, uint amount);
  event receivedTokens(
    address _from,
    uint256 _value,
    address _token,
    bytes _extraData
  );

  function receiveApproval(
    address _from,
    uint256 _value,
    address _token,
    bytes _extraData
  ) {
    Token t = Token(_token);
    if (!t.transferFrom(_from, this, _value)) throw;
    receivedTokens(_from, _value, _token, _extraData);
  }

  function () payable {
    receivedEther(msg.sender, msg.value);
  }
}

contract Token {
  function transferFrom(
    address _from,
    address _to,
    uint256 _value
  ) returns (bool success);
}
