import React from "react";
import { View, Image, StyleSheet  } from "react-native";




export default function CharacterImage({profileImage}){


    return(
        <View style={styles.container} >
            {profileImage ? (<Image style={styles.profilePic} source={{uri: profileImage}}/>
            ) : (<Text>No Profile Image available</Text> 

            )}   
       
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        borderWidth: 2, 
        borderRadius: 2, 
        borderColor: 'green', 
        width: 200,
        height: 200, 
        alignContent: 'center', 
        marginTop: 10, 
        margin: 'auto'

    },
    profilePic:{
        flex: 1, 
        width: 'auto', 
    }
});