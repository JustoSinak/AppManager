// Login and Signup app 

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from './components/Home';
import LoginScreen from './components/LoginScreen';
import SignupScreen from './components/SignupScreen';

const Stack =createNativeStackNavigator();


const App = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name={"Home"} component={Home} />
      <Stack.Screen name={"Login"} component={LoginScreen} />
      <Stack.Screen name={"Signup"} component={SignupScreen} />
    </Stack.Navigator>
   </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inText:{
    color: '#45fa76',
    fontSize: 40
  }
});
