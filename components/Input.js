import React from 'react'
import { StyleSheet, View, TextInput, Text } from 'react-native'

const Input = props => {
    return(
        <View>
             <TextInput 
                {...props}
                style={{...styles.input, ...props.style}}
             />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        width: 200,
        fontSize: 15,
        height: 30,
        marginLeft: 20,
        borderRadius: 7,
        borderColor: 'gray',
        borderWidth: 2
    },

})

export default Input;