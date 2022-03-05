import React from 'react';
import {createDrawerNavigator} from "@react-navigation/drawer";
import Profile from '../Screens/ProfileScreen';
import BarterList from '../Screens/BarterList';
import AddBarter from '../Screens/AddBarter';
import Dashboard from '../Screens/DashboardScreen';
import Ionicons from "react-native-vector-icons/Ionicons";
import { StyleSheet } from "react-native";
import StackNavigator from './StackNavigator';



const Drawer= createDrawerNavigator();

const DrawerNavigator=()=>{
  return(
    <Drawer.Navigator>
    <Drawer.Screen name="Dashboard" component={Dashboard}
    options={{
           title: 'Dashboard',
           titleColor: '#4A6274',
           drawerIcon: ({focused, size}) => (
              <Ionicons
                 name="md-home"
                 size={size}
                 color={focused ? '#F9DDD2' : '#ccc'}
              />
           ),
        }}
        />
    <Drawer.Screen name="BarterList" component={BarterList}
    options={{
           title: 'Barter List ',
           drawerIcon: ({focused, size}) => (
              <Ionicons
                 name="person"
                 size={size}
                 color={focused ? '#F9DDD2' : '#ccc'}
              />
           ),
        }}
    />
    <Drawer.Screen name="AddBarter" component={AddBarter}
    options={{
           title: 'Add Barter',
           drawerIcon: ({focused, size}) => (
              <Ionicons
                 name="document"
                 size={size}
                 color={focused ? '#F9DDD2' : '#ccc'}
              />
           ),
        }}
    />
    <Drawer.Screen name="Profile" component={Profile}
    options={{
           title: 'Profile',
           drawerIcon: ({focused, size}) => (
              <Ionicons
                 name="document"
                 size={size}
                 color={focused ? '#F9DDD2' : '#ccc'}
              />
           ),
        }}
    />

    
    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({
 
});

export default DrawerNavigator;