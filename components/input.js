import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const Input = props => {
  return <TextInput {...props} style={{...styles.input, ...props.style}} />
};

const styles = StyleSheet.create({
  input: {
    width: 100,
    borderRadius: 5,
    borderColor: 'gray',
    borderWidth: .7
  },
});

export default Input;