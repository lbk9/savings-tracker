import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import Header from './components/header';
import AddSaving from './components/addSaving';

export default function App() {
  const [total, setTotal] = useState(40.00);
  const [savings, setSaving] = useState([]);

  const submitHandler = (amount) => {
    if(amount.length >= 1)
    {
      setSaving((prevSavings) => {
        return [
          {amount: amount, key: Math.random().toString()},
          ...prevSavings
        ];
      });
    }
    else
    {
      Alert.alert('Hold on', 'You need to actually tell me an amount..', [
        {text:'Got it'}
      ])
    }
  }

  const clearScreen = () => {
    setSaving({savings:[]});
    setTotal(0);
  }

  return (
    <View style={styles.fullPageContainer}>
      <Header />
      <View>
        <AddSaving submitHandler={submitHandler}/>
        <Text style={styles.amountTrackerString}>{total}</Text>
        </View>
        <View style={styles.listContainer}>
        <FlatList
          data={savings}
          renderItem={({ item }) => (
            <Text style={styles.listText}>{item.amount}</Text>
            )}
          />
        </View>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => clearScreen()}>
        <Text style={styles.buttonText}>RESET</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  fullPageContainer:{
    flex: 1,
    backgroundColor: '#fff',
  },
  amountTrackerString:{
    top:120,
    left:10,
    color: 'black',
    fontSize: 28,
  },
  listContainer:{
    marginTop:130
  },
  listText:{
    color:'black',
    fontSize: 24,
    padding: 5,
    textAlign:'center',
    marginLeft:50,
    marginRight:50,
    marginTop:15,
    paddingTop:10,
    borderRadius:1,
    borderWidth:1,
    borderColor:'#9e1b7c',
    borderStyle:'dashed'
  },
  buttonStyle:{
    padding: 25,
    borderRadius:20,
    backgroundColor:'grey',
    bottom:0,
    position:'absolute',
    right:30,
    left:30,
    margin:20
  },
  buttonText:{
    textAlign:'center',
    color:'#fff',
    fontSize:14,
    fontWeight:'bold',
    fontFamily:'monospace'
  }
});