import { ADD_INVEST } from './invest-actions';
import invest from '../model/invest';
import moment from 'moment'

const initialState = {
  investments: {}
};

export default (state = initialState, action) => {

  const dateTime = new moment(new Date()).format('YYYY-MM-DD hh:mm:ss')

  let newInvestment

  switch (action.type) {
    case ADD_INVEST:
      const addedInvestment = action.investData

      if(state.investments[addedInvestment.symbol]) {
        // already have the item in the cart
        const updatedInvestment = new invest(
          dateTime,
          addedInvestment.symbol,
          state.investments[addedInvestment.symbol].shares + addedInvestment.shares,
          addedInvestment.price
        )
        return {
          ...state,
          investments: { ...state.investments, [addedInvestment.symbol] : updatedInvestment }
        };
      }
      else {
        newInvestment = new invest(dateTime, addedInvestment.symbol, addedInvestment.shares, addedInvestment.price);
      }

      return {
        ...state,
        investments: { ...state.investments, [addedInvestment.symbol] : newInvestment }  //state.investments.concat(newInvestment)
      };

    default:
      return state;
    }
};