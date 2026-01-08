import { StyleSheet, Text, View, TextInput, Pressable, FlatList } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import CharacterForm from './CharacterForm';
import CharacterButton from './CharacterButton';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CharacterList() {

    const navigation = useNavigation();
    
    const [characterData, setCharacterData] = useState({
             fName: '',
             lName: '',
             birthTown: '',
             ability1: '', 
             ability2: '',
             profileImage: null,
    });

    const [characterList, setCharacterList] =  useState([]);
    

    
        const removeItem = (index) => {
            setCharacterList(characterList.filter((_, i) => i !== index));
        }

    const loadCharacters = async () => {
        try{
        const saved = await AsyncStorage.getItem('characterList')
            if(saved){
                setCharacterList(JSON.parse(saved));
            }else{
                setCharacterList([]);
            }
        }catch(error){
            console.error(error);
        }
    };
    

    const saveCharacters =  async () => {
        try{
            await AsyncStorage.setItem('characterList', JSON.stringify(characterList)) 
        }catch(error){
            console.error(error);
        }
    };

      useEffect(()=>{
        loadCharacters();
    }, []);

      useEffect(()=>{
        if(characterList.length > 0){
        saveCharacters();}
    }, [characterList]);


    return (
    <View style={styles.container}>
        <CharacterForm characterData={characterData} setCharacterData={setCharacterData} characterList={characterList} setCharacterList={setCharacterList}/>
        <FlatList
            data={characterList}
            keyExtractor={(item, index) =>  index.toString()}
            renderItem={({item, index}) => {
                return(
                <CharacterButton characterData={item} setCharacterData={item}
                    onPress={() => navigation.navigate("CharacterDetails", {characterData: item})
                } onRemove={() => removeItem(index)}
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