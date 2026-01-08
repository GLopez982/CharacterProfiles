import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footer}>CharacterProfile @2025 All Rights Reserved</Text>
    </View>
  );
}


const styles = StyleSheet.create({
    footerContainer:{
        width: 'auto',
        height: 50, 
        backgroundColor: 'green',
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 20, 
    },
    footer:{
        fontSize: 18, 
        color: 'white',
        textAlign: 'center',
    }

})