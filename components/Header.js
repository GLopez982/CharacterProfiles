import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Character Profile Testing</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'purple',
        height: 50,
        width: 'auto',
        padding: 5,
        justifyContent: 'center', 
        
    },
    heading:{
        fontSize: 23, 
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    }

})