export const ADD_INVEST = 'ADD_INVEST';
export const SET_INVEST = 'SET_INVEST';
import { insertInvestment, fetchInvestment } from '../helpers/db'

export const addInvestment = (symbol, shares, price) => {
  return async dispatch => {
    try {
      const dbResult = await insertInvestment(
        symbol,
        shares,
        price
      )
      console.log(dbResult)
      dispatch ({ type: ADD_INVEST, investData: { symbol: symbol, shares: shares, price: price } });
    }
    catch(err) {
      console.log(err)
      throw err
    }
  }
};

export const loadInvestments = () => {
  return async dispatch => {
      try {
          const dbResult = await fetchInvestment();
          console.log(dbResult)
          console.log('working...')
          // dispatch the all the places in the array to the reducer
          dispatch({ type: SET_INVEST, investments: dbResult.rows._array })
      } catch (err) {
          console.log(err)
          throw err;
      }
  }
}

