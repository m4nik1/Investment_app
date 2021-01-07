import firebase from 'firebase'
export const SIGNUP ='SIGNUP'


export const signup = (email, password) => {

    const API_key = 'AIzaSyBOajK3CaSnq65w4MVObleTF4996F7ouBk'

    return async dispatch => {
        const response = await fetch (
            `https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=${API_key}`,
            { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    returnSecureToken: true
                })
            }  
        );
        
        if(!response.ok){
            throw new Error('Something went wrong')
        }

        else {
            const resData = await response.json();
            console.log(resData)
            dispatch({ type: SIGNUP })
        }
    }
}

