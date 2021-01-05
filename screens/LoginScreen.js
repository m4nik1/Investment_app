import React from 'react'
import { View, StyleSheet, TextInput, Text, Button } from 'react-native'

import Card from '../components/Card'

const AuthScreen = (props) => {

    const signUp = () => {
        props.navigation.goBack()
    }

    return (
        <Card style={styles.card}>
            <View style={styles.emailView}>
                <Text style={styles.emailText}>
                    Email address:
                </Text>
                <TextInput
                    id='Email'
                    label="Email"
                    keyboardType="email-address"
                    style={styles.emailInput}
                />
            </View>
            <View style={styles.passwordView}>
                <Text style={styles.passwordText}>Password:</Text> 
                <TextInput 
                    id="password"
                    label='Password'
                    keyboardType='default'
                    secureTextEntry
                    required
                    minLength={5}
                    autoCapitalize='none'
                    errorMessage='Please enter a vaild password'
                    onValueChange={() => {}}
                    style={styles.passwordInput}
                    initialValue=""
                />
            </View>
            <Button title='Login' onPress={() => {}} type='outline'  style={styles.signUpButton} />
            <Button title='SignUp' onPress={() => {}} />
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
