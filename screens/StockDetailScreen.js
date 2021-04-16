import React, {useEffect, useState} from 'react'
import moment, { utc } from 'moment'
import { View, Text, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux';
import invest from '../model/invest';


const StockDetailScreen = props => {
    
    // Parameters fetched from navi
    const shares = props.navigation.getParam('shares')
    const symbol = props.navigation.getParam('symbol')

    // price state
    const [Price, setPrice] = useState()
    const [numSharePrice, setNumPrice] = useState();

    // LOOK at this for fetch info https://reactnative.dev/docs/network#known-issues-with-fetch-and-cookie-based-authentication

    // Date Info
    const month = new moment(new Date()).format('MM')
    const day = (new moment(new Date()).format('DD')) - 1
    const year = new moment(new Date()).format('YYYY')
    const date = (year + '-' + month + '-' + day)

    // API Info
    const timeInterval = 1
    const APIKey = 'PL7DXUPGDYWKO1QD'

    const investments = useSelector(state => {
        const investmentItems = [];
        for (const key in state.invest.investments) {
          investmentItems.push({
            id: state.invest.investments[key].id,
            symbol: key,
            shares: state.invest.investments[key].shares,
            price: state.invest.investments.price
          })
        }
        return investmentItems
      })

    const price = investments["price"]

    function findInvestment() {
        for(const i in investments) {
            if(i.symbol == symbol) {
                console.log(i)
            }
        }
    }

    async function StockInfo() {
        try {
            let response = await fetch(
                // `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=${timeInterval}min&apikey=${APIKey}`
                `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${APIKey}`
            );
            let responseJson = await response.json()
            // console.log(responseJson)
            const data = responseJson['Global Quote']['05. price']
            console.log(data);
            setPrice(data);
            setNumPrice(Number(data)/shares);
            // console.log(numSharePrice);
        } catch(error) {
            console.error('This is the error: ', error)
        }
    }

    useEffect(() => {
        StockInfo()
    }, [])


    return (
        <View>
            <View>
                <Text style={styles.symbol}>{symbol}</Text>
            </View>
            <View style={styles.detailContainer}>
                <Text>You own {shares} shares</Text>
                <Text>You bought it at {price}</Text>
                <Text>shares were bought at {investments.id}</Text>
                <Text>The price yesterday was ${Math.round(Price).toFixed(2)}</Text>
                <Text>The price of each share is ${Math.round(numSharePrice).toFixed(2)}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create ({
    detailContainer: {
        alignItems: 'center',
        marginTop: 40,
    },
    symbol: {
        fontSize: 40,
        padding: 20,
        textAlign: 'left'
    },
})

export default StockDetailScreen;