import { ADD_INVEST } from './invest-actions';
import invest from '../model/invest';
import moment from 'moment'

const initialState = {
  investments: []
};

export default (state = initialState, action) => {

  const dateTime = new moment(new Date()).format('YYYY-MM-DD hh:mm:ss')

  let newInvestment

  switch (action.type) {
    case ADD_INVEST:
      newInvestment = new invest(dateTime, action.investData.symbol, action.investData.shares, action.investData.price);
      

      return {
        investments: state.investments.concat(newInvestment)
      };


    default:
      return state;
};