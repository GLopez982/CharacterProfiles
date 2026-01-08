import { useState } from "react";
import { Text, View, StyleSheet, Pressable, ImageBackground } from "react-native";


export default function CharacterButton({characterData, onPress = () =>{},  onRemove = () => {}}){

    const [isFocused, setIsFocused] = useState(false);


    return(
        <Pressable style={styles.container } onLongPress={() => onRemove()} onPress={() => onPress()} onFocus={() => setIsFocused(true)} onblur={() => setIsFocused(false)}>
            <ImageBackground source={{uri: characterData.profileImage}}>
            <View style={[styles.row, isFocused && styles.rowFocused]}>
            <Text style={{textAlign: 'center', margin: 'auto' }}>Character:   {characterData.fName} {characterData.lName}</Text>
            </View>
            </ImageBackground>
        </Pressable>
        
    )

    
}const styles = StyleSheet.create({
    container:{
        flex: 1, 
        justifyContent: 'center',
        marginTop: 10, 
         
        
        
    },
    row: {
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: 'black',
        width: 150,
        marginTop: 5,
        marginBottom: 5,
        padding: 10,
        borderRadius: 30, 
        backgroundColor: 'lightgray',
        margin: 'auto',
    

    }, 
    rowFocused: {
        borderWidth: 5, 
        borderColor: 'white', 
    
    }
})