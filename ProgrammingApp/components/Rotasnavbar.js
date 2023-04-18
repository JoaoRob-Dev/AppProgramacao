import React from 'react';
import{ScrollView} from 'react-native';
import{createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AntDesign} from '@expo/vector-icons';
import { FontAwesome5} from '@expo/vector-icons'; 

import FrontEnd from './frontEnd';
import BackEnd from './backEnd';
import Database from './database';

const Tab = createBottomTabNavigator();

export default function Rotasnavbar(){
  return(
    <Tab.Navigator>
    <Tab.Screen name='Front End' component={FrontEnd}
    options={{
      tabBarIcon:({color, size}) =>(
<FontAwesome5 name="code" size={size} color={color}/>),
    }}/>


    <Tab.Screen name='Back-End' component={BackEnd}
    options={{
      tabBarIcon:({color, size}) =>(
<FontAwesome5 name="pen" size={size} color={color}/>),
    }}/>


    <Tab.Screen name='Banco de Dados' component={Database}
    options={{
      tabBarIcon:({color, size}) =>(
<FontAwesome5 name="database" size={size} color={color} />),
    }}/>
    </Tab.Navigator>
  )
}