export const ADD_INVEST = 'ADD_INVEST';

export const addInvestment = (symbol, shares, price) => {
  return { type: ADD_INVEST, investData: { id: symbol, shares: shares, price: price } };
};
