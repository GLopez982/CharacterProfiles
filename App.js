import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CharacterDetails from './components/CharacterDetails';

const {Navigator, Screen} = createStackNavigator();

export default function App() {

  
  
  return (
    <NavigationContainer >
      <Navigator >
        <Screen component={Home} name='Home'/>
        <Screen component={CharacterDetails} name='CharacterDetails'/>
      </Navigator>
    </NavigationContainer>
  );
}


