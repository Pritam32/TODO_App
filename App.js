import { View ,LogBox} from 'react-native'
import React from 'react'
import Home from './Screens/Home';
import Form from './Screens/Form';
import Login from './Screens/Login';
import Register from './Screens/Register';
import Splash from './Screens/Splash';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const Stack=createStackNavigator();

const App = () => {
  
  return (
    
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Splash" >
      <Stack.Screen name='Splash' component={Splash} options={{headerShown:false}}/>
      <Stack.Screen name="Register" component={Register} options={{headerShown:false}}/>
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
      <Stack.Screen name="Form" component={Form} options={{headerShown:false}}/>
    </Stack.Navigator>
    </NavigationContainer>
    
  );
};

export default App;