import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export const RoundedButton = ({title, icon}) => {
  return (
    <View style={styles.roundedButton}>
      <FontAwesomeIcon icon={icon} size={40} color='#e9f8ff' />
      <Text style={styles.roundedText}>{title}</Text>
    </View>
  );
};

export const ClassicButton = ({title}) => {
  return (
    <View style={styles.classicButton}>
      <Text style={styles.classicText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  roundedButton: {
    backgroundColor: '#0d6efd',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    height: 100,
    width: 100,
  },
  roundedText: {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 15,
  },
  classicButton: {
    backgroundColor: '#0d6efd',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    width: 200,
    height: 60,
  },
  classicText: {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 25,
  },
});
