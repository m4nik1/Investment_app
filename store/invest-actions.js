import * as firebase from "firebase";
import { updateLocale } from "moment";

export const ADD_INVEST = "ADD_INVEST";
export const FETCH_INVEST = "FETCH_INVEST"
export const PRINT_INVEST = "PRINT_INVEST"
export const UPDATE_INVEST = "UPDATE_INVEST"

export const addInvestment = (symbol, shares, price) => {
  return { type: ADD_INVEST, investData: { symbol: symbol, shares: shares, price: price } };
};

export const fetchInvestments = (userID) => {
  let firebaseInvestments;
  console.log("UserID: " + userID);
  return (dispatch) => {
    firebase.database().ref("users/" + userID).once("value").then((snapshot) => {
      firebaseInvestments = snapshot.val().invest
      dispatch({ type: FETCH_INVEST, firebaseInvestment: firebaseInvestments })
    });
  }
}

export const deleteInvestment = (userID, symbol) => {
  let firebaseInvestments;
  return(dispatch) => {
    firebase.database().ref("users/" + userID + "/invest/" + symbol).remove();
    firebase.database().ref("users" + userID).once("value").then((snapshot) => {
      firebaseInvestments = snapshot.val().invest;
    })
    dispatch({ type: UPDATE_INVEST, firebaseInvestment: firebaseInvestments });
    console.log("Investment removed");
  }
}

export const printingInvestments = () => {
  return { type: PRINT_INVEST }
}
