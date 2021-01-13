import firebase from 'firebase'
export const SIGNUP ='SIGNUP'


export const signup = (email, password) => {
    return async dispatch => {

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
                console.log('All Signed up')
                dispatch({ type: SIGNUP })
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                console.error('Code: ' + errorCode)
                console.log(errorMessage)
            })


        // const response = await fetch (
        //     `https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyBOajK3CaSnq65w4MVObleTF4996F7ouBk`,
        //     { 
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify({
        //             email: email,
        //             password: password,
        //             returnSecureToken: true
        //         })
        //     }  
        // );

        // console.log(email)
        // console.log(password)
        
        // if(!response.ok){
        //     throw new Error('Something went wrong')
        // }

        // else {
        //     const resData = await response.json();
        //     console.log(resData)
        //     dispatch({ type: SIGNUP })
        // }
    }
}

