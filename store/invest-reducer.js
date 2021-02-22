import { ADD_INVEST, FETCH_INVEST, PRINT_INVEST } from './invest-actions';
import * as firebase from 'firebase'
import invest from '../model/invest';
import moment from 'moment'

const initialState = {
  investments: {}
};

export default (state = initialState, action) => {

  const dateTime = new moment(new Date()).format('YYYY-MM-DD hh:mm:ss')

  let newInvestment

  const addInvestment = i => {
    firebase.database().ref('users/' + firebase.auth().currentUser.uid).set({
      invest: i
    })
  }

  switch (action.type) {
    case FETCH_INVEST:
      if(action.firebaseInvestment) {
        console.log('Fetching Investments');
      }

      else {
        console.log("something is wrong")
      }

      // console.log(action.investments)
      return {
        investments: action.firebaseInvestment
      }


    case ADD_INVEST:
      const addedInvestment = action.investData;
      console.log('ADD INVEST is working')

      if(state.investments[addedInvestment.symbol]) {
        // already have the item in the cart
        const updatedInvestment = new invest (
          dateTime,
          addedInvestment.symbol,
          Number(state.investments[addedInvestment.symbol].shares) + Number(addedInvestment.shares),
          addedInvestment.price
        )

        addInvestment({ ...state.investments, [addedInvestment.symbol] : updatedInvestment })

        return {
          investments: { ...state.investments, [addedInvestment.symbol] : updatedInvestment },
        }
      }

      else {
        newInvestment = new invest(dateTime, addedInvestment.symbol, addedInvestment.shares, addedInvestment.price);
        addInvestment({ ...state.investments, [addedInvestment.symbol] : newInvestment })

        return {
          investments: { ...state.investments, [addedInvestment.symbol] : newInvestment }  //state.investments.concat(newInvestment)
        };
      }

    default:
      return state;
    }
};
