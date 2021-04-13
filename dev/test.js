const Blockchain = require("./blockchain");

const bitcoin = new Blockchain();

const bc1 = {
  chain: [
    {
      index: 1,
      timestamp: 1618278177733,
      transactions: [],
      nonce: 100,
      hash: "0",
      previousBlockHash: "0",
    },
    {
      index: 2,
      timestamp: 1618278265946,
      transactions: [],
      nonce: 18140,
      hash: "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
      previousBlockHash: "0",
    },
    {
      index: 3,
      timestamp: 1618278301286,
      transactions: [
        {
          amount: 12.5,
          sender: "00",
          recipient: "92d1d8409bf911eba8b1f95b272234dc",
          transactionId: "c76be0f09bf911eba8b1f95b272234dc",
        },
        {
          amount: 100,
          sender: "JNIOFWENFIOWE",
          recipient: "OIENACIOENF",
          transactionId: "d4bc14f09bf911eba8b1f95b272234dc",
        },
        {
          amount: 30,
          sender: "JNIOFWENFIOWE",
          recipient: "OIENACIOENF",
          transactionId: "d6989d209bf911eba8b1f95b272234dc",
        },
        {
          amount: 80,
          sender: "JNIOFWENFIOWE",
          recipient: "OIENACIOENF",
          transactionId: "d87525509bf911eba8b1f95b272234dc",
        },
      ],
      nonce: 9683,
      hash: "000067a50045e236114e9f538523f1c6a3f5b934099716b35cb748a42e55ace5",
      previousBlockHash:
        "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
    },
    {
      index: 4,
      timestamp: 1618278318304,
      transactions: [
        {
          amount: 12.5,
          sender: "00",
          recipient: "92d1d8409bf911eba8b1f95b272234dc",
          transactionId: "dc7725909bf911eba8b1f95b272234dc",
        },
        {
          amount: 1000,
          sender: "JNIOFWENFIOWE",
          recipient: "OIENACIOENF",
          transactionId: "e31e55309bf911eba8b1f95b272234dc",
        },
        {
          amount: 40,
          sender: "JNIOFWENFIOWE",
          recipient: "OIENACIOENF",
          transactionId: "e4e0ecc09bf911eba8b1f95b272234dc",
        },
      ],
      nonce: 26260,
      hash: "0000a5062b333507ee8cc41e4040a307fff2c517a3f21665f5b986f14f20db14",
      previousBlockHash:
        "000067a50045e236114e9f538523f1c6a3f5b934099716b35cb748a42e55ace5",
    },
  ],
  pendingTransactions: [
    {
      amount: 12.5,
      sender: "00",
      recipient: "92d1d8409bf911eba8b1f95b272234dc",
      transactionId: "e69be3309bf911eba8b1f95b272234dc",
    },
  ],
  currentNodeUrl: "http://localhost:3001",
  networkNodes: [],
};

console.log("VALID : " + bitcoin.chainIsValid(bc1.chain));
