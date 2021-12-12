import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function CoinItem({ coin }) {
    return (
        <View style={styles.containerItem}>

            <View style={styles.coinNames}>
                <Image style={styles.image} source={{ uri: coin.image }} />
                <View style={styles.containerNames}>
                    <Text style={styles.text}>{coin.name}</Text>
                    <Text style={styles.symbolText}>{coin.symbol}</Text>
                </View>
            </View>
            
            <View>
                <View>
                    <Text style={styles.textPrice}>$ {coin.current_price}</Text>
                    <Text style={[styles.pricePercentage, coin.price_change_percentage_24h > 0 ? styles.priceUp : styles.priceDown ]}>{coin.price_change_percentage_24h}</Text>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    containerItem: {
        backgroundColor: '#141414',
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        color: '#ffffff',
    },
    image: {
        width: 30,
        height: 30,
    },
    coinNames: {
        flexDirection: 'row',
    },
    symbolText: {
        color: '#434343',
        textTransform: 'uppercase',
    },
    containerNames: {
        marginLeft: 10,
    },
    pricePercentage: {
        textAlign: 'right',
    },
    priceUp: {
        color: '#00ff00',
    },
    priceDown: {
        color: '#ff0000',
    },
    textPrice: {
        color: '#ffffff',
        textAlign: 'right',
    }
});