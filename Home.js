import { StyleSheet, Text, View } from 'react-native';
import Footer from './components/Footer';
import Header from './components/Header';
import { ImageBackground } from 'react-native';
import CharacterList from './components/CharacterList';


export default function Home() {
  return (
    <View style={styles.container}>
        <ImageBackground style={{width: 'auto', height: 'auto'}} source={require('./assets/icon.png')}>
            <Header />
            <CharacterList/>
            <Footer/>



        </ImageBackground>
        
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor: 'black',
        width: 'auto',
        
        
    },
    heading:{
        fontSize: 23, 
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center',
        alignContent: 'center',

    
    }

})