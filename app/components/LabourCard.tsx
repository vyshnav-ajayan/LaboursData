import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export const LabourCard = ({ item, onPress }: { item: any; onPress: any }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.boldText}>{item.name}</Text>
      <Text style={styles.normalText}>{`Quantity: ${item.quantity} hour`}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '94%',
    backgroundColor: '#34ebbd',
    padding: '4%',
    borderRadius: 5,
    marginVertical: '2%',
    alignSelf: 'center',
  },
  boldText: { fontWeight: 'bold', fontSize: 16, color: 'white' },
  normalText: {
    fontWeight: '500',
    fontSize: 13,
    color: 'white',
  },
});

export default styles;
