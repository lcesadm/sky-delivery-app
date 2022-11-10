import React from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { faLocation, faCoins } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';

import { RoundedButton } from '../components/Buttons';
import Service from '../components/Service';
import Navbar from '../components/Navbar';

export default () => {
  const navigation = useNavigation();

  return (
    <View>
      <Navbar title='Sky Delivery App' />
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/logo.png')}
          resizeMode='cover'
          style={styles.image}>
          <ScrollView>
            <View style={styles.services}>
              <Service
                title='Eficiência'
                image={require('../assets/eficiencia.png')}
                text='Realizamos um tráfego limpo e prático para realizar entregas mais rápidas e seguras.'
              />
              <Service
                title='Econômico'
                image={require('../assets/economico.png')}
                text='Os unícos que cobram os melhores serviços mais barato possível.'
              />
              <Service
                title='Entrega'
                image={require('../assets/brasil.png')}
                text='Realizamos a melhor entrega para todo o canto do país, com maior segurança e qualidade.'
              />
            </View>
            <View style={styles.buttons}>
              <TouchableOpacity onPress={() => navigation.navigate('Rastrear')}>
                <RoundedButton title='Rastrear' icon={faLocation} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Planos')}>
                <RoundedButton title='Ver planos' icon={faCoins} />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e9f8ff',
    alignItems: 'center',
    display: 'flex',
  },
  image: {
    height: 460,
    width: 460,
  },
  services: {
    flexDirection: 'column',
    alignItems: 'center',
    display: 'flex',
    paddingBottom: 20,
    paddingTop: 20,
  },
  buttons: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    display: 'flex',
    paddingBottom: 20,
  },
});
