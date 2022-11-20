import { View, Text,ImageBackground,TextInput,Image,TouchableOpacity,Alert} from 'react-native'
import React,{useState} from 'react';
import auth from '@react-native-firebase/auth';
import Home from './Home';

const Register = ({navigation}) => {

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const  registerUser = async() => {
    
    if(email === '' && password === '') {
      alert('Enter details to signup!')
    } else {
        auth().createUserWithEmailAndPassword(email.trim(),password)    
        .then(()=>{
            console.log('User account created!');
            setEmail('');
            setPassword('');
            setName('');
            navigation.navigate("Home")
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
              console.log('That email address is already in use!');
            }
        
            if (error.code === 'auth/invalid-email') {
              console.log('That email address is invalid!');
            }
        
            console.error(error);
          });
    
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
         <Text style={{color:"black",marginLeft:60,marginTop:80,fontSize:19}}>Username</Text>
         <TextInput style={{borderWidth:2,borderColor:"black",width:340,marginLeft:58,marginTop:10,borderRadius:10,color:"black",padding:10,fontSize:18}} onChangeText={(val)=>setName(val)} value={name}/>
         <Text style={{color:"black",marginLeft:60,marginTop:30,fontSize:19}}>Email</Text>
         <TextInput style={{borderWidth:2,borderColor:"black",width:340,marginLeft:58,marginTop:10,borderRadius:10,color:"black",padding:10,fontSize:18}} onChangeText={(val)=>setEmail(val)} value={email}/>
         <Text style={{color:"black",marginLeft:60,marginTop:30,fontSize:19}}>Password</Text>
         <TextInput secureTextEntry={true} style={{borderWidth:2,borderColor:"black",width:340,marginLeft:58,marginTop:10,borderRadius:10,color:"black",padding:10,fontSize:18}} onChangeText={(val)=>setPassword(val)} value={password}/>
         <TouchableOpacity onPress={registerUser}>
         <Text style={{borderWidth:2,borderRadius:30,borderColor:"black",width:340,marginLeft:58,marginTop:35,paddingVertical:15,fontSize:20,backgroundColor:"purple",paddingLeft:130,color:"white"}}>REGISTER</Text>    
         </TouchableOpacity>
         
       </ImageBackground>
 
    </View>
  )
}

export default Register;