import { Inter_500Medium, useFonts } from "@expo-google-fonts/inter";
import { useContext, useState, useEffect } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import Animated, { LinearTransition } from "react-native-reanimated"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { StatusBar } from "expo-status-bar"

import Feather from '@expo/vector-icons/Feather';
import { data } from "@/data/todos"

export default function Index() {
  const { colorScheme, setColorScheme, theme } = useContext(ThemeContext)
  const [loaded, error] = useFonts({
    Inter_500Medium,
  })
  const styles = getStyles(theme, colorScheme);

  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("TodoApp");
        const storageTodos = jsonValue != null ? JSON.parse(jsonValue) : null;


        if (storageTodos && storageTodos.length) {
          setTodos(storageTodos.sort((a, b) => b.id - a.id));
        } else {
          setTodos(data.sort((a, b) => b.id - a.id));
        }

      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);


  useEffect(() => {
    const storeData = async () => {
      try {
        const jsonValue = JSON.stringify(todos)
        await AsyncStorage.setItem("TodoApp", jsonValue)
      } catch (e) {
        console.log(e)
      }
    }
    storeData()
  }, [todos])



  if (!loaded && !error) {
    return null
  }

  const addTodo = () => {
    if (text.trim()) {
      const newId = todos.length > 0 ? todos[0].id + 1 : 1;
      setTodos([{ id: newId, title: text, completed: false }, ...todos])
      setText('')
    }
  }
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }
  const removeTodo = (id) => {
    setTodos(todos.filter(todo =>
      todo.id !== id
    ))
  }

  const renderItem = ({ item }) => (
    <View style={styles.todoRow}>
      <Pressable onPress={() => toggleTodo(item.id)} style={styles.todoTextWrapper}>
        <Text style={[styles.todoText, item.completed && styles.completedText]}>
          {item.title}
        </Text>
      </Pressable>
      <Pressable onPress={() => removeTodo(item.id)} style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>Delete</Text>
      </Pressable>
    </View>
  )

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TextInput
          style={styles.input}
          placeholder="add a new Todo"
          placeholderTextColor="gray"
          value={text}
          onChangeText={setText}
        />
        <Pressable
          style={styles.button}
          onPress={addTodo}
        >
          <Text style={styles.buttonText}>ADD</Text>
        </Pressable>
        <Pressable
          onPress={() => setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')}
          style={{ marginLeft: 10 }}
          selectable={undefined}
        >
          {colorScheme === 'light'
            ? <Feather name="moon" size={24} color={theme.icon} />
            : <Feather name="sun" size={24} color={theme.icon} />
          }
        </Pressable>
      </View>
      <Animated.FlatList
        data={todos}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        style={styles.list}
        itemLayoutAnimation={LinearTransition}
        keyboardDismissMode="on-drag"
      />
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
    </SafeAreaView>
  );
}

function getStyles(theme, colorScheme) {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: 20,
      width: '100%',
      maxWidth: 600,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      maxWidth: 600,
      marginBottom: 20,
      backgroundColor: theme.headerBackground,
      padding: 10,
      borderRadius: 8,
      elevation: 2,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 4,
      shadowOffset: { width: 0, height: 2 },
    },
    input: {
      flex: 1,
      backgroundColor: theme.input,
      color: theme.text,
      padding: 10,
      borderRadius: 6,
      marginRight: 10,
      fontSize: 16,
      borderWidth: 1,
      borderColor: theme.border || '#ccc',
      fontFamily: 'Inter_500Medium',
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: theme.text,
    },
    button: {
      backgroundColor: theme.primary || '#007AFF',
      paddingVertical: 8,
      paddingHorizontal: 20,
      borderRadius: 6,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      color: theme.text,
      fontWeight: 'bold',
      fontSize: 16,
    },
    list: {
      width: '90%',
      maxWidth: 600,
      color: theme.text,
    },
    todoRow: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.card || '#fff',
      padding: 12,
      marginVertical: 6,
      borderRadius: 8,
      elevation: 1,
      shadowColor: '#000',
      shadowOpacity: 0.05,
      shadowRadius: 2,
      shadowOffset: { width: 0, height: 1 },
      justifyContent: 'space-between',
    },
    todoTextWrapper: {
      flex: 1,
      marginRight: 10,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    todoText: {
      fontSize: 18,
      color: theme.text,
      marginLeft: 8,
      fontFamily: 'Inter_500Medium',
    },
    completedText: {
      textDecorationLine: 'line-through',
      color: theme.muted || 'gray',
      opacity: 0.6,
    },
    deleteButton: {
      backgroundColor: theme.danger || '#ff3b30',
      paddingVertical: 4,
      paddingHorizontal: 12,
      borderRadius: 6,
    },
    deleteButtonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 14,
    },
  });
}
