pragma solidity ^0.4.11;

import "./UnConf.sol";
import "./strings.sol";

contract UnConfFactory {
  using strings for *;

  UnConference[] unconfs;
  uint numUnconfs;

  struct UnConference {
    string name;
    address unconf_address;
  }

  event NewUnConf(string name, address unconf_address);

  function findUnConference(string _name) constant public returns(address) {
    for(uint i = 0; i < unconfs.length; i++) {
      if (unconfs[i].name.toSlice().equals(_name.toSlice())) {
        return unconfs[i].unconf_address;
      }
    }

    return 0;
  }

  function getNumUnconfs() constant public returns(uint) {
    return numUnconfs;
  }

  function listUnconferences() constant public returns(string list) {
    for(uint i = 0; i < unconfs.length; i++) {
      if (i > 0) list = list.toSlice().concat("\n".toSlice());
      list = list.toSlice().concat(unconfs[i].name.toSlice());
    }
    return list;
  }

  function unconferenceAt(uint index) constant public returns(string, address) {
    if (index >= unconfs.length) throw;

    UnConference unconf = unconfs[index];
    return (unconf.name, unconf.unconf_address);
  }

  function create(string _name) public returns(address) {
    address unconf_address = findUnConference(_name);
    if (unconf_address != 0) return unconf_address;
    unconf_address = address(new UnConf(_name, msg.sender));
    uint unconfId = unconfs.length++;
    UnConference u = unconfs[unconfId];
    u.name = _name;
    u.unconf_address = unconf_address;
    numUnconfs = unconfId + 1;
    NewUnConf(_name, unconf_address);
    return unconf_address;
  }
}
