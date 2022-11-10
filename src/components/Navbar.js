import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default ({title}) => {
  return (
    <View style={styles.nav}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  nav: {
    backgroundColor: '#0d6efd',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    height: 60,
  },
  title: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 30,
  },
});
