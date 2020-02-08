import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
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
        <FlatList
          data={savings}
          renderItem={({ item }) => (
            <Text style={styles.listText}>{item.amount}</Text>
            )}
          />
      </View>
      <View style={styles.buttonStyle}>
      <Button 
        title='Reset'
        onPress={clickHandler}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fullPageContainer:{
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer:{
    flex:1,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 36,
    marginTop: 30,
    color: '#fff'
  },
  amountTrackerString:{
    marginTop: 30,
    color: '#fff',
    fontSize: 28,
  },
  input: {
    borderWidth: 5,
    borderColor: 'grey',
    padding: 15,
    margin: 30,
  },
  bottomText:{
    color: '#fff',
    fontSize: 20,
  },
  listText:{
    color:'black',
    fontSize: 24,
    padding: 5,
    marginLeft:25
  },
  buttonStyle:{
    marginBottom:40,
    padding:30,
  }
});