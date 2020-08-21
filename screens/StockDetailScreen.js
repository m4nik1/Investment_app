import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


const StockDetailScreen = props => {
    return (
        <View style={styles.container}>
            <Text>This is Stock Detail Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create ({
    container: {
        alignItems: 'center'
    }
})

export default StockDetailScreen;
