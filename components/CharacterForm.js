import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { useState, useEffect, useRef } from 'react';

export default function CharacterForm({characterData, setCharacterData, characterList, setCharacterList}) {

    

    //This uses the spread operator to read the characterData and update the field with the input data
    const handleDataSubmit = (field, inputData) =>{
        setCharacterData({
            ...characterData, 
            [field]: inputData
        });
    }


    //handles the pressable button for submission. Button adds a new character to the characterList 
    const handlePress = () => {
        setCharacterList([...characterList, characterData])
        console.log([...characterList, characterData])

        setCharacterData({
             fName: '',
             lName: '',
             birthTown: '',
             ability1: '', 
             ability2: '',
     
    });
   }


    return (
    <View style={styles.container}>
        <View style={styles.formContainer}>
            <TextInput style={styles.textInput} value={characterData.fName} onChangeText={(value) => handleDataSubmit('fName', value)} placeholder="First Name"   />
            <TextInput style={styles.textInput} value={characterData.lName}  onChangeText={(value) => handleDataSubmit('lName', value)}  placeholder="Last Name"  />
            <TextInput style={styles.textInput} value={characterData.birthTown} onChangeText={(value) => handleDataSubmit('birthTown', value)}  placeholder="Birth Town"  />
            <TextInput style={styles.textInput} value={characterData.ability1} onChangeText={(value) => handleDataSubmit('ability1', value)}  placeholder="Ability 1"  />
            <TextInput style={styles.textInput} value={characterData.ability2} onChangeText={(value) => handleDataSubmit('ability2', value)}  placeholder="Ability 2"  />
        </View>
        <Pressable style={styles.submitButton} onPress={handlePress}><Text style={styles.submitText}>Submit</Text></Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor: 'green',
        width: 'auto', 
        padding: 10, 
        gap: 5, 
        borderTopRightRadius: 50, 
        borderTopLeftRadius: 50, 
        borderBottomLeftRadius: 80, 
        borderBottomRightRadius:80,
        borderWidth: 1, 
        borderColor: 'black'  
    },
    formContainer:{
        flex: 1, 
        height: 20,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        gap: 10, 
        borderWidth: 5, 
        borderTopRightRadius: 50, 
        borderTopLeftRadius: 50, 
        borderBottomLeftRadius: 80, 
        borderBottomRightRadius:80, 
        borderBottomColor: 'indigo',
        borderLeftColor: 'purple',
        borderTopColor: 'violet',
        borderRightColor: 'navy'
        
        
         

    
    },
    textInput:{
        backgroundColor: 'gray',
        width: 250,
        height: 25,


    },
    submitButton: {
        borderRadius: 20, 
        borderWidth: 2,
        borderColor: 'purple',
        justifyContent: 'center',
        margin: 'auto',
        padding: 10,
        backgroundColor: 'white'
    }, 
    submitText: {
        textAlign: 'center',
        color: 'black' 
        
    }


})