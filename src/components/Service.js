import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default ({title, image, text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image source={image} resizeMode='cover' style={styles.image} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0d6efd',
    borderBottomColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    borderBottomWidth: 2,
    borderRadius: 10,
    width: 250,
  },
  title: {
    fontWeight: 'bold',
    color: '#FFF',
    paddingTop: 10,
    fontSize: 30,
  },
  image: {
    height: 100,
    width: 100,
  },
  text: {
    textAlign: 'justify',
    color: '#FFF',
    paddingBottom: 10,
    fontSize: 15,
  },
});
