import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Card from './Card'

const InvestmentItem = props => {
    return (
        <TouchableOpacity onPress={props.onSelect} style={styles.investItem}>
            <View style={styles.infoContainer}>
                <Text style={styles.symbol}>{props.symbol}</Text>
            </View>
            <View style={styles.shareContainer}>
                <Text style={styles.shares}>{props.shares}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    investItem: {
        paddingVertical: 15,
        paddingHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    infoContainer: {
        marginLeft: 25,
        width: 250,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    shareContainer: {
        justifyContent: 'center',
        marginRight: 25
    },  
    symbol: {
        fontSize: 30,
        marginBottom: 5,
        color: 'black',
    },
    shares: {
        color: '#666',
        fontSize: 16,
    },
})

export default InvestmentItem;