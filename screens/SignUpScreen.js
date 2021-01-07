import React, { useState }  from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import { useDispatch } from 'react-redux'

import Card from '../components/Card'
import Input from '../components/Input'
import * as authActions from '../store/auth-actions'

const SignUpScreen = () => {
    
    const dispatch = useDispatch();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const emailChange = (em) => {
        setEmail(em)
    }

    const passwordChange = (pass) => {
        setPassword(pass)
    }

    const signUp = () => {
        console.log('All Signed Up!')
        dispatch(authActions.signup(email, password))
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
                    required
                    keyboardType="email-address"
                    onValueChange={emailChange}
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
                    errorText='Please enter a vaild password'
                    onValueChange={passwordChange}
                    initialValue=""
                    style={styles.passwordInput}
                />
            </View>
            <Button title='SignUp' onPress={signUp} />
        </Card>
    )
}

const styles = StyleSheet.create({
    card: {
        marginTop: 150,
        height: 150
    },
    emailView: {
        flexDirection: 'row',
    },
    emailText: {
        marginTop: 5,
    },
    passwordView: {
        padding: 10,
        marginLeft: 15,
        flexDirection: 'row'
    },
    passwordText: {
        fontSize: 15,
        marginTop: 5,
    },
    passwordInput: {
        marginLeft: 18
    },
})

export default SignUpScreen;