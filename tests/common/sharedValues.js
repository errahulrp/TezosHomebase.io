let TokenAddress;

module.exports = {
  setTokenAddress: (address) => {
    TokenAddress = address;
  },
  getTokenAddress: () => {
    return TokenAddress;
  },
};