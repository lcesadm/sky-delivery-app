import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHouse, faLocation, faCoins } from '@fortawesome/free-solid-svg-icons';

import Tracking from './screens/Tracking';
import Plans from './screens/Plans';
import Menu from './screens/Menu';

export default () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {backgroundColor: '#0d6efd'},
          tabBarActiveTintColor: '#FFF',
        }}>
        <Tab.Screen
          name="Menu"
          component={Menu}
          options={{
            tabBarIcon: () => (
              <FontAwesomeIcon icon={faHouse} size={25} color="#FFF" />
            ),
          }}
        />
        <Tab.Screen
          name="Rastrear"
          component={Tracking}
          options={{
            tabBarIcon: () => (
              <FontAwesomeIcon icon={faLocation} size={25} color="#FFF" />
            ),
          }}
        />
        <Tab.Screen
          name="Planos"
          component={Plans}
          options={{
            tabBarIcon: () => (
              <FontAwesomeIcon icon={faCoins} size={25} color="#FFF" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
