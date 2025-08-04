import React from 'react'
import { StyleSheet, View } from 'react-native'

export const Screen6 = () => {
    return (
        <View style={styles.container}>
            <View style={styles.boxBlue}></View>
            <View style={styles.boxYellow}></View>
            <View style={styles.boxGreen}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#63BBC7',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

    },
    boxBlue:{
        width: '100%',
        height: 200,
        backgroundColor: 'blue',
        borderWidth: 7,
        borderColor: 'white',
        alignSelf: 'stretch'

    },
    boxYellow:{
        width: '100%',
        height: 200,
        backgroundColor: '#F4A300',
        borderWidth: 7,
        borderColor: 'white',
        marginTop: 2,
        alignSelf: 'stretch'
    },

    boxGreen:{
        width: '100%',
        height: 450,
        backgroundColor: 'green',
        borderWidth: 7,
        borderColor: 'white',
        alignSelf: 'stretch'
    }
})