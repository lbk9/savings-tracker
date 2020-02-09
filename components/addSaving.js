import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';

export default function AddSavings({submitHandler}){
    const [amount, setAmount] = useState('');
    const changeHandler = (val) => {
        setAmount(val);
    }

    return(
        <View>
        <TextInput style={styles.input}
          placeholder='Savings...'
          keyboardType='number-pad'
          onChangeText={changeHandler}/>
        <TouchableOpacity 
            style={styles.submit}
            onPress={() => submitHandler(amount)}>
            <Text style={styles.text}>Enter</Text>
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        position:'absolute',
        width:'60%',
        top:30,
        left:10,
        borderWidth: 5,
        borderColor: 'grey',
        padding: 15,
      },
    submit:{
        padding: 20,
        borderRadius:20,
        backgroundColor:'#ca229e',
        top:15,
        position:'absolute',
        right:0,
        width:'30%',
        margin:20
      },
    text:{
        textAlign:'center',
        color:'#fff',
        fontSize:14
    }
});