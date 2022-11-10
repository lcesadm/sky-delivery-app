import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default ({title, info, price}) => {
  return (
    <View style={styles.container}>
      <View style={styles.planHeader}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.plan}>
        <View style={styles.infos}>
          <FontAwesomeIcon icon={faCheck} size={25} color='#0d6efd' />
          <Text style={styles.info}> {info[0]}</Text>
        </View>
        <View style={styles.infos}>
          <FontAwesomeIcon icon={faCheck} size={25} color='#0d6efd' />
          <Text style={styles.info}> {info[1]}</Text>
        </View>
        <View style={styles.infos}>
          <FontAwesomeIcon icon={faCheck} size={25} color='#0d6efd' />
          <Text style={styles.info}> {info[2]}</Text>
        </View>
        <View style={styles.infos}>
          <FontAwesomeIcon icon={faCheck} size={25} color='#0d6efd' />
          <Text style={styles.info}> {info[3]}</Text>
        </View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() =>
            Linking.openURL(
              'https://lcesadm.github.io/sky-delivery/planos.html',
            )
          }>
          <View style={styles.button}>
            <Text style={styles.buttonText}>{price}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    display: 'flex',
  },
  planHeader: {
    backgroundColor: '#0d6efd',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    marginTop: 20,
    width: 250,
  },
  title: {
    fontWeight: 'bold',
    color: '#FFF',
    paddingBottom: 10,
    paddingTop: 10,
    fontSize: 25,
  },
  plan: {
    justifyContent: 'center',
    backgroundColor: '#FFF',
    alignItems: 'center',
    display: 'flex',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    width: 250,
  }, 
  infos: {
    justifyContent: 'center',
    flexDirection: 'row',
    display: 'flex',
  },
  info: {
    color: '#0d6efd',
    fontSize: 20,
  },
  buttonContainer: {
    paddingBottom: 10,
  },
  button: {
    backgroundColor: '#0d6efd',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    width: 200,
    height: 50,
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 25,
  },
});
