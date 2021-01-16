import React, { useState } from 'react'
import * as firebase from 'firebase'
import { View, StyleSheet, TextInput, Text, Button } from 'react-native'

import Card from '../components/Card'
import Input from '../components/Input'

const AuthScreen = props => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const emailChange = (em) => {
        setEmail(em)
    }

    const passwordChange = (pass) => {
        setPassword(pass)
    }

    const signUp = () => {
        props.navigation.navigate('SignUp')
    }

    const login = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                if(user) {
                    props.navigation.navigate('Home')
                    console.log('Logged in')
                    console.log(user.uid)
                }
            })
            .catch((error) => {
                const errorcode = error.code
                const errorMessage = error.message
                console.error(errorcode)
                console.log(errorMessage)
            })
    }

    return (
        <Card style={styles.card}>
            <View style={styles.emailView}>
                <Text style={styles.emailText}>
                    Email address:
                </Text>
                <Input
                    id='Email'
                    label="Email"
                    keyboardType="email-address"
                    required
                    onChangeText={emailChange}
                    autoCapitalize='none'
                    value={email}
                    style={styles.emailInput}
                />
            </View>
            <View style={styles.passwordView}>
                <Text style={styles.passwordText}>Password:</Text> 
                <Input 
                    id="password"
                    label='Password'
                    keyboardType='default'
                    secureTextEntry
                    required
                    minLength={5}
                    autoCapitalize='none'
                    errorMessage='Please enter a vaild password'
                    onChangeText={passwordChange}
                    value={password}
                    style={styles.passwordInput}
                />
            </View>
            <Button title='Login' onPress={login} type='outline'  style={styles.signUpButton} />
            <Button title='SignUp' onPress={signUp} />
        </Card>
    )
}

const styles = StyleSheet.create({
    card: {
        marginTop: 150,
        height: 200
    },
    emailView: {
        flexDirection: 'row',
    },
    passwordView: {
        padding: 10,
        marginLeft: 20,
        flexDirection: 'row'
    },
    passwordText: {
        fontSize: 15,
        marginTop: 5
    },
    passwordInput: {
        width: 200,
        fontSize: 15,
        height: 30,
        marginLeft: 20,
        borderRadius: 7,
        borderColor: 'gray',
        borderWidth: 2
    },  
    emailInput: {
        width: 200,
        fontSize: 15,
        height: 30,
        marginLeft: 20,
        borderRadius: 7,
        borderColor: 'gray',
        borderWidth: 2
    },
    emailText: {
        fontSize: 15,
        marginTop: 5
    },
    signUpText: {
        fontSize: 15,
        marginTop: 10
    },
    signUpView: {
        flexDirection: 'row',
        marginLeft: 50
    },
})

export default AuthScreen
