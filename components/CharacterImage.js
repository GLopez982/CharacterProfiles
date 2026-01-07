import React from "react";
import { View, Image, StyleSheet  } from "react-native";




export default function CharacterImage(){

    return(
        <View style={styles.container} >
            <Image style={styles.profilePic} source={require('../assets/icon.png')} />
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        borderWidth: 2, 
        borderRadius: 2, 
        borderColor: 'green', 
        width: 205,
        height: 205, 
        alignContent: 'center', 
        marginTop: 10,  

    },
    profilePic:{
        width: 200, 
        height: 200, 
    }


})