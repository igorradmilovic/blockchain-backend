function Blockchain() {
  this.chain = [];
  this.newTransactions = [];
}

Blockchain.prototype.createNewBlock = function (
  nonce,
  previousBlockHash,
  hash
) {
  const newBlock = {
    index: this.chain.length + 1,
    timestamp: Date.now(),
    transactions: this.newTransactions,
    nonce: nonce, // nonce comes from proofOfWork, it is a number that is a proof that we created the block legitimately
    hash: hash,
    previousBlockHash: previousBlockHash,
  };

  this.newTransactions = [];
  this.chain.push(newBlock);

  return newBlock;
};

module.exports = Blockchain;
