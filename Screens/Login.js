import { View, Text,ImageBackground,TextInput,Image,TouchableOpacity,Alert} from 'react-native'
import React, { useState } from 'react'
import Register from './Register'
import auth from '@react-native-firebase/auth';
import Home from './Home';

const Login = ({navigation}) => {

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  

  const loginUser=()=>{
    if(email === '' && password === '') {
      Alert.alert('Enter details to signin!')
    } else {
     
      auth()
      .signInWithEmailAndPassword(email.trim(),password)
      .then(()=>{
        
        Alert.alert("Query",'User logged-in successfully!')
        
        setEmail('');
        setPassword('');
        
        console.log('User signed in Successfully!');
        navigation.navigate('Home');
      })
      .catch(error=>{
        if (error.code === 'auth/invalid-email' || error.code==='auth/wrong-password') {
          Alert.alert('Query','Invalid Email or Password !');
        }
    
        console.error(error);
      });      
    };
  }
  

  return (
    <View style={{alignItems:"center"}}>
       
      <ImageBackground
        source={{
          uri: 
'https://i.stack.imgur.com/RoCZr.png'
        }}
        resizeMode="stretch"
        style={{width:450,height:850}}>
        <Image source={{uri:"https://www.sketchappsources.com/resources/source-image/sketch-3-todo-list-app-icon-template.png"}} style={{width:100,height:100,marginLeft:170,marginTop:80}}/>
        <Text style={{color:"black",textAlign:'center',marginTop:10,fontWeight:'bold',fontSize:16}}>TODO</Text>
        <TextInput style={{borderWidth:2,borderColor:"black",width:340,marginLeft:58,marginTop:50,borderRadius:10,color:"black",padding:10,fontSize:18}} placeholder="Email" placeholderTextColor="grey" onChangeText={(val)=>setEmail(val)} value={email}/>
        <TextInput secureTextEntry={true} style={{borderWidth:2,borderColor:"black",width:340,marginLeft:58,marginTop:30,borderRadius:10,color:"black",padding:10,fontSize:18}} placeholder="Password" placeholderTextColor="grey" onChangeText={(val)=>setPassword(val)} value={password}/>
        <TouchableOpacity onPress={loginUser}>
        <Text style={{borderWidth:2,borderRadius:30,borderColor:"black",width:340,marginLeft:58,marginTop:30,paddingVertical:15,fontSize:20,backgroundColor:"purple",paddingLeft:130,color:"white"}}>LOGIN</Text>    
        </TouchableOpacity>
        <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:20}}>
      <Text style={{color:'black',fontSize:18}}>New User?</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
      <Text style={{color:'blue',fontSize:18}}> Create New Account</Text>
      </TouchableOpacity>
    </View>
      </ImageBackground>

   
    </View>
   
  )
}

export default Login;