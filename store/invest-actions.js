export const ADD_INVEST = 'ADD_INVEST';

export const addInvestment = (symbol, shares) => {
  return { type: ADD_INVEST, investData: { symbol: symbol, shares: shares } };
};
