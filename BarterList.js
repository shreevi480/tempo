import React from "react";
import {View, Text, StyleSheet, TextInput, Image, TouchableOpacity, Platform, StatusBar, SafeAreaView, Alert} from "react-native";
import AppHeader from '../components/AppHeader';

export default class BarterScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidsafearea}/>
                <AppHeader text="Barters Screen"/>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#DDFFE7",
        justifyContent:"center"
    },
    droidsafearea:{
        marginTop: Platform.OS === "android"? StatusBar.currentHeight : 0
    },
    
})