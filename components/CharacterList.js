import { StyleSheet, Text, View, TextInput, Pressable, FlatList } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import CharacterForm from './CharacterForm';
import CharacterImage from './CharacterImage';
import CharacterButton from './CharacterButton';
import { useNavigation } from '@react-navigation/native';


export default function CharacterList() {

    const navigation = useNavigation();
    
    const [characterData, setCharacterData] = useState({
             fName: '',
             lName: '',
             birthTown: '',
             ability1: '', 
             ability2: '',
    });

    const [characterList, setCharacterList] =  useState([]);

    return (
    <View style={styles.container}>
        <CharacterForm characterData={characterData} setCharacterData={setCharacterData} characterList={characterList} setCharacterList={setCharacterList}/>
        <FlatList
            data={characterList}
            keyExtractor={(item, index) =>  index.toString()}
            renderItem={({item}) => {
                return(
                <CharacterButton characterData={item} setCharacterData={item}
                    onPress={() => navigation.navigate("CharacterDetails", {characterData: item})
                }
                />
                )
            }}
        >
        </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'purple',
        width: 'auto', 
        height: 700,
        padding: 15, 
        marginTop: 20,
    

        
    },
    formContainer:{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: 'green',
        width: 'auto',
      



    
    }

})