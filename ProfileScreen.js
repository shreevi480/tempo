import React from "react";
import {View, Text, StyleSheet,SafeAreaView, StatusBar,Platform} from "react-native";
import AppHeader from '../components/AppHeader';


export default class ProfileScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidsafearea}/>
                <AppHeader text="Profile Screen"/>
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