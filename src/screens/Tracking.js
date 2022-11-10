import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground, Alert, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ClassicButton } from '../components/Buttons';
import Navbar from '../components/Navbar';

export default () => {
  const [status, setStatus] = useState('Solicite uma entrega');
  const [rastreio, setRastreio] = useState();
  const [map, setMap] = useState(false);
  const navigation = useNavigation();

  const rastrearEntrega = () => {
    rastreio ? setMap(true) : Alert.alert('Sem entrega!', 'Solicita uma entrega para poder rastrear.');
  };

  const solicitarEntrega = () => {
    if (rastreio) {
      Alert.alert(
        'Limite de entregas excedido!',
        'Infelizmente, você alcansou o limite de entregas da sua conta, se quiser fazer mais entregas, atualiza seu plano!',
        [
          {text: 'Depois'},
          {
            text: 'Atualizar agora',
            onPress: () => navigation.navigate('Planos'),
          },
        ],
      );
    } else {
      setStatus('A caminho!');
      setRastreio('AqnD$34djS');
      Alert.alert(
        'Solicitação realizada!',
        'Sua entrega foi realizada com sucesso!\nSeu código de rastreio: AqnD$34djS',
      );
    }
  };

  return (
    <View>
      <Navbar title='Rastrear' />
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/logo.png')}
          resizeMode='cover'
          style={styles.image}>
          <ScrollView>
            <View style={styles.components}>
              <View style={styles.statusHeader}>
                <Text style={styles.title}>Status da Entrega</Text>
              </View>
              <View style={styles.status}>
                {rastreio && <Text style={styles.info}>{rastreio}</Text>}
                <Text style={styles.info}>{status}</Text>
              </View>
              {map && (
                <Image
                  source={require('../assets/mapa.png')}
                  resizeMode='cover'
                  style={styles.mapImage}
                />
              )}
              <TouchableOpacity style={styles.button} onPress={rastrearEntrega}>
                <ClassicButton title='Rastrear entrega' />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={solicitarEntrega}>
                <ClassicButton title='Solicitar entrega' />
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
    height: '100%',
  },
  image: {
    height: 460,
    width: 460,
  },
  components: {
    alignItems: 'center',
    display: 'flex',
  },
  statusHeader: {
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
  status: {
    justifyContent: 'center',
    backgroundColor: '#FFF',
    alignItems: 'center',
    display: 'flex',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    marginBottom: 20,
    width: 250,
  },
  info: {
    color: '#0d6efd',
    paddingBottom: 10,
    paddingTop: 10,
    fontSize: 20,
  },
  mapImage: {
    marginBottom: 20,
    height: 300,
    width: 300,
  },
  button: {
    paddingBottom: 20,
  },
});
