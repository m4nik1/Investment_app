import { ADD_INVEST } from './invest-actions';
import invest from '../model/invest';

const initialState = {
  investments: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_INVEST:
      console.log('testing')
      const newInvestment = new invest(new Date().toString(), action.investData.symbol, action.investData.shares);
      return {
        investments: state.investments.concat(newInvestment)
      };
    default:
      return state;
  }
};
