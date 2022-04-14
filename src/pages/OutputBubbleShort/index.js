import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const OutputBubbleShort = () => {
  const {setStateBubble} = useSelector(state => state);
  return (
    <View style={styles.page}>
      {setStateBubble.arr?.map((value, index) => (
        <View key={index.toString()} style={{flexDirection: 'row'}}>
          <Text style={{marginRight: 4}}>{value}</Text>
        </View>
      ))}
    </View>
  );
};

export default OutputBubbleShort;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
