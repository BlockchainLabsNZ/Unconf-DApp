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
        assert.strictEqual(result, "founder");
        return crt.addMember(accounts[1], "Isaac");
      })
      .then(function(result) {
        return crt.getMemberName(accounts[1]);
      })
      .then(function(result) {
        assert.strictEqual(result, "Isaac");
        done();
      })
      .catch(done);
  });
  it("should add topics, vote and get votes", function(done) {
    var crt;
    UnConf.new("UnConf", { from: accounts[0] })
      .then(function(result) {
        crt = result;
        return crt.newProposal("BlockChain", { from: accounts[0] });
      })
      .then(function(result) {
        return crt.newProposal("Ethereum", { from: accounts[0] });
      })
      .then(function(result) {
        return crt.vote(0, { from: accounts[0] });
      })
      .then(function(result) {
        return crt.getTopicNameAndVotesAt(0, { from: accounts[0] });
      })
      .then(function(result) {
        assert.strictEqual(result[0], "BlockChain");
        assert.strictEqual(result[1].toNumber(), 1);
        return crt.getTopicNameAndVotesAt(1, { from: accounts[0] });
      })
      .then(function(result) {
        assert.strictEqual(result[0], "Ethereum");
        assert.strictEqual(result[1].toNumber(), 0);
        done();
      })
      .catch(done);
  });
});
