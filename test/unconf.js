var UnConf = artifacts.require("./UnConf.sol");

contract("UnConf", function(accounts) {
  it("should add user", function(done) {
    var crt;
    UnConf.new("UnConf", { from: accounts[0] })
      .then(function(result) {
        crt = result;
        return crt.getMemberName(accounts[0]);
      })
      .then(function(result) {
        assert.equal(result, "founder");
        return crt.addMember(accounts[1], "Isaac");
      })
      .then(function(result) {
        return crt.getMemberName(accounts[1]);
      })
      .then(function(result) {
        assert.equal(result, "Isaac");
        done();
      })
      .catch(done);
  });
});
