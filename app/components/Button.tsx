import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import metrics from 'app/config/metrics';

export const Button = ({
  title,
  onPress,
}: {
  title: string;
  onPress?: any;
}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: metrics.screenWidth * 0.4,
    backgroundColor: '#34ebbd',
    padding: '4%',
    borderRadius: 5,
    marginVertical: '2%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: { fontWeight: '600', fontSize: 14, color: 'white' },
});

export default styles;
