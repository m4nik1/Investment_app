import { ADD_INVEST } from './invest-actions';
import invest from '../model/invest';
import moment from 'moment'

const initialState = {
  investments: {}
};

export default (state = initialState, action) => {

  const dateTime = new moment(new Date()).format('YYYY-MM-DD hh:mm:00')

  switch (action.type) {
    case ADD_INVEST:
      
      if (state.investments) {
        // if the investment exists
      }

      else {
        const newInvestment = new invest(dateTime, action.investData.symbol, action.investData.shares, action.investData.price);
      }


      const newInvestment = new invest(dateTime, action.investData.symbol, action.investData.shares, action.investData.price);
      return {
        ...state, 
        investments: {...state.investments, }, //state.investments.concat(newInvestment),

      };
    default:
      return state;
  }
};
