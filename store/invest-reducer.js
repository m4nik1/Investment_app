import { ADD_INVEST, SET_INVEST } from './invest-actions';
import invest from '../model/invest';

const initialState = {
  investments: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_INVEST:
      console.log('working')
      return {
        investments: action.investments.map(in => new invest(in.symbol))
      }
    case ADD_INVEST:
      const newInvestment = new invest(new Date().toString(), action.investData.symbol, action.investData.shares, action.investData.price);
      return {
        investments: state.investments.concat(newInvestment)
      };
    default:
      return state;
  }
};
