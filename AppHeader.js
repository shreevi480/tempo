import React from "react";
import {View, Text, StyleSheet} from "react-native";

export default class ApppHeader extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>
                    {this.props.text}
                </Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#29A0B1",
        justifyContent:"center"
    },
    text:{
        color:"#167D7F",
        fontSize:20,
        
    },
})