import { View, Text,ImageBackground,TextInput,Image,TouchableOpacity,Alert} from 'react-native'
import React, { useState } from 'react'
import Register from './Register'
import auth from '@react-native-firebase/auth';
import Home from './Home';

const Login = ({navigation}) => {

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  

  const loginUser=()=>{
    if(email=='' && password==''){
      Alert.alert("Input","Enter the Values First !")
    }
    else{
      auth().signInWithEmailAndPassword(email,password).then(
        setEmail(''),
        setPassword(''),
        navigation.navigate("Home")
      )
    }
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
        <Text style={{color:"black",marginLeft:175,marginTop:10,fontWeight:'bold',fontSize:16}}>TODO LIST</Text>
        <Text style={{color:"black",marginLeft:60,marginTop:80,fontSize:19}}>Email</Text>
        <TextInput style={{borderWidth:2,borderColor:"black",width:340,marginLeft:58,marginTop:10,borderRadius:10,color:"black",padding:10,fontSize:18}} onChangeText={(val)=>setEmail(val)} value={email}/>
        <Text style={{color:"black",marginLeft:60,marginTop:30,fontSize:19}}>Password</Text>
        <TextInput secureTextEntry={true} style={{borderWidth:2,borderColor:"black",width:340,marginLeft:58,marginTop:10,borderRadius:10,color:"black",padding:10,fontSize:18}} onChangeText={(val)=>setPassword(val)} value={password}/>
        <TouchableOpacity onPress={loginUser}>
        <Text style={{borderWidth:2,borderRadius:30,borderColor:"black",width:340,marginLeft:58,marginTop:30,paddingVertical:15,fontSize:20,backgroundColor:"purple",paddingLeft:130,color:"white"}}>LOGIN</Text>    
        </TouchableOpacity>
        <View style={{flexDirection:"row"}} >
        <Text style={{color:"black",marginTop:100,fontSize:16,marginLeft:70,fontSize:18}}>Already have an account.</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("Register")}>
        <Text style={{color:"blue",marginTop:100,fontSize:16,marginLeft:5,fontSize:18}}>Register</Text>
        </TouchableOpacity> 
        </View>
      </ImageBackground>

   
    </View>
   
  )
}

export default Login;