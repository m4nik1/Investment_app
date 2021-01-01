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
      const addedInvestment = action.investData

      if (state.investments) {
        // if the investment exists
        const newInvestment = new invest(
          dateTime, 
          state.investments[addedInvestment.id].shares + 1,
          state.investments[addedInvestment.id].price + addedInvestment.price
          )
      }

      else {
        const newInvestment = new invest(dateTime, addedInvestment.shares, addedInvestment.price);
      }


      return {
        ...state, 
        investments: {...state.investments, [addedInvestment.id]: newInvestment }
      };

    // default switch case
    default:
      return state;
  }
};
