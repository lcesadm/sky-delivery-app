import React from 'react';
import { View, StyleSheet, ScrollView, ImageBackground } from 'react-native';

import Navbar from '../components/Navbar';
import Plan from '../components/Plan';

export default () => {
  return (
    <View>
      <Navbar title='Planos' />
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/logo.png')}
          resizeMode='cover'
          style={styles.image}>
          <ScrollView>
            <View style={styles.plans}>
              <Plan
                title='Grátis'
                info={[
                  '1 perfil',
                  'Pague frete',
                  'Rastreio tempo real',
                  'Entrega capitais',
                ]}
                price='GRÁTIS'
              />
              <Plan
                title='Sky+'
                info={[
                  '3 perfis',
                  'Frete grátis',
                  'Rastreio tempo real',
                  'Entrega todo país',
                ]}
                price='R$200,00/mês'
              />
              <Plan
                title='Sky Enterprise'
                info={[
                  'perfis ilimitados',
                  'Frete prioritário',
                  'Rastreio tempo real',
                  'Entrega todo país',
                ]}
                price='R$2.500,00/mês'
              />
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
    height: '100%',
  },
  image: {
    height: 460,
    width: 460,
  },
  plans: {
    paddingBottom: 20,
  },
});
