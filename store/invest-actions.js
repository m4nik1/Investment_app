export const ADD_INVEST = 'ADD_INVEST';

export const addInvestment = (symbol, shares, price, userID) => {
  return { type: ADD_INVEST, investData: { symbol: symbol, shares: shares, price: price }, userID: userID};
};
