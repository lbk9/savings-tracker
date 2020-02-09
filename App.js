import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchabkeOpacity, FlatList } from 'react-native';
import Header from './components/header';

export default function App() {
  const [total, setTotal] = useState(0.00);
  const [savings, setSaving] = useState([
    { amount: '2.90', key: '1' },
    { amount: '4.40', key: '2'}
  ]);

  const clickHandler = () => {
    setTotal(0);
    setSaving.length = 0;
  };
  return (
    <View style={styles.fullPageContainer}>
      <Header />
      <View>
        <TextInput style={styles.input}
          placeholder='Savings...'
          keyboardType='number-pad'/>
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
      <View style={styles.buttonStyle}>
        <Text style={styles.buttonText}>RESET</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fullPageContainer:{
    flex: 1,
    backgroundColor: '#fff',
  },
  amountTrackerString:{
    top:40,
    width:'30%',
    textAlign:'center',
    position:'absolute',
    right:0,
    color: 'black',
    fontSize: 28,
  },
  input: {
    position:'absolute',
    width:'70%',
    top:30,
    left:10,
    borderWidth: 5,
    borderColor: 'grey',
    padding: 15,
  },
  listContainer:{
    marginTop:130
  },
  listText:{
    color:'black',
    fontSize: 24,
    padding: 5,
    marginLeft:25
  },
  buttonStyle:{
    padding: 25,
    borderRadius:20,
    backgroundColor:'#be0000',
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