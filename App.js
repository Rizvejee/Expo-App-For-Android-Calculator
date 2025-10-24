import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Pressable, } from 'react-native';
import styles from './Style';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [num, setNum] = useState(0);
  const btn = [['AC', '+/-', '%', '/'],
  ['7', '8', '9', '*'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '=']];
  const handleInput = (val) => {
    if (val === 'AC') {
      setInputValue('');
      setNum(0);
      return;
    }
    if (val === '=') {
      try {
        const result = eval(inputValue);
        setInputValue(result.toString());
        setNum(result);
      } catch (error) {
        setInputValue('Error');
      }
      return;
    }
    if (val === '+/-') {
      if (inputValue) {
        const toggledValue = (parseFloat(inputValue) * -1).toString();
        setInputValue(toggledValue);
        setNum(parseFloat(toggledValue));
      }
      return;
    }
    if (val === '%') {
      if (inputValue) {
        const percentValue = (parseFloat(inputValue) / 100).toString();
        setInputValue(percentValue);
        setNum(parseFloat(percentValue));
      }
      return;
    }
    if (['/', '', '-', '+', '.'].includes(val)) {
      const lastChar = inputValue.slice(-1);
      if (['/', '*', '-', '+', '.'].includes(lastChar)) {
        const updatedInput = inputValue.slice(0, -1) + val;
        setInputValue(updatedInput);
        return;
      }
    }
    setInputValue(inputValue + val);
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputBox}>
        <TextInput style={styles.input} editable={false} value={inputValue} onChangeText={setInputValue} />
      </View>
      <View style={styles.btnContainer}>
        {btn.map((item, index) => (
          item.map((val, idx) => (
            val === '0' ? (
              <Pressable key={idx} style={styles.btn0} onPress={() => handleInput(val)}>
                <Text style={styles.btnText}>{val}</Text>
              </Pressable>
            ) : (
              <Pressable key={idx} style={styles.btn} onPress={() => handleInput(val)}>
                <Text style={styles.btnText}>{val}</Text>
              </Pressable>

            )
          ))
        ))}
      </View>
      <StatusBar style="auto" backgroundColor="#fff" translucent={false} />
    </SafeAreaView>
  );
}

