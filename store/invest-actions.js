import * as firebase from "firebase";

export const ADD_INVEST = 'ADD_INVEST';
export const FETCH_INVEST = 'FETCH_INVEST'
export const PRINT_INVEST = 'PRINT_INVEST'

export const addInvestment = (symbol, shares, price) => {
  return { type: ADD_INVEST, investData: { symbol: symbol, shares: shares, price: price } };
};

export const fetchInvestments = (userID) => {
  let firebaseInvestments;
  return (dispatch) => {
    firebase.database().ref('users/' + userID).on('value', (snapshot) => {
      firebaseInvestments = snapshot.val().invest
      // console.log(firebaseInvestments)
    })
    dispatch({ type: FETCH_INVEST, firebaseInvestment: firebaseInvestments })
  }
} 

export const printingInvestments = () => {
  return { type: PRINT_INVEST }
}