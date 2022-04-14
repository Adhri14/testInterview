import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';

const BubbleShort = ({navigation}) => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const onSubmit = () => {
    if (text == '') {
      return;
    }
    const arr = text.split(',').map(t => parseFloat(t));

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // If the condition is true then swap them
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }

    dispatch({type: 'SET_ARRAY', value: arr});
    navigation.navigate('Output');
  };

  return (
    <View style={styles.page}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.formControl}>
          <Text style={styles.label}>Isi Angka</Text>
          <TextInput
            placeholder="isi angka cth : 2, 3, 5 dst.."
            style={styles.input}
            keyboardType="numbers-and-punctuation"
            value={text}
            onChangeText={val => setText(val)}
          />
          <Pressable style={styles.button} onPress={onSubmit}>
            <Text style={styles.textButton}>Kirim</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default BubbleShort;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  formControl: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#404040',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    height: 50,
    paddingHorizontal: 15,
    borderColor: '#404040',
    marginBottom: 20,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    height: 60,
    borderRadius: 5,
  },
  textButton: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
});
