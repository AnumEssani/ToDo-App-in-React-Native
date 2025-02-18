import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList ,StatusBar, ScrollView} from 'react-native';
import Header from './Components/Header';
import TodoItem from './Components/TodoItem';
import AddTodo from './Components/AddTodo';


export default function App() {

  const [todos, setTodos] = useState([
    { text: "buy coffee", key: " 1" },
    { text: "create an app", key: " 2" },
    { text: "play on the switch ", key: " 3" }

  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);

    });
  }

  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [ 
        {text: text, key: Math.random().toString()},
        ...prevTodos
      ]

    })
  }

  return (
    <>
    <StatusBar/>
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={ submitHandler}/> 
        <View style={styles.list}>
          <ScrollView>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              // <Text>{item.text}</Text>
              <TodoItem item = {item} pressHandler = {pressHandler}/>
            )}
          />
          </ScrollView>
        </View>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  content: {
    padding: 40,
  },

  list: {
    marginTop: 20,
  }
});
