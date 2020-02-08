import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.title}>Savings Tracker</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        paddingTop:40,
        height:90,
        backgroundColor: '#5D1049'
    },
    title:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:26,
        textAlign:'center'
    }
});