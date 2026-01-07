import {Text, StyleSheet, View, } from 'react-native'
import CharacterImage from './CharacterImage'
import Header from './Header';
import Footer from './Footer';


export default function CharacterDetails({route}){

    //The bottom destructures the passed item object from the flatlist located in the CharacterList component. 
    //This allows us to use the character data within the details component
    //simplifies use by allowing calling of the object as item.xxx instead of data.item.xxxx or characterdata.item.xxx CLEARNER

    const {characterData} = route.params;

    return (
        <View style={styles.container}>
            <Header/>
            <CharacterImage/>
            <Text style={{color: 'yellow'}}>{characterData.fName}</Text>
            <Text style={styles.detail}>Town: {characterData.birthTown}</Text>
            <Text style={styles.detail}>Ability 1: {characterData.ability1}</Text>
            <Text style={styles.detail}>Ability 2: {characterData.ability2}</Text>
            <Footer/>

        </View>
    )


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex", 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: 'black'
  }
 

});
    