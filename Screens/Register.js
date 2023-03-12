import { View, Text,ImageBackground,TextInput,Image,TouchableOpacity,Alert} from 'react-native'
import React,{useState} from 'react';
import auth from '@react-native-firebase/auth';
import Home from './Home';
import Login from './Login';
import { useNavigation } from '@react-navigation/native';
import { firebase } from '@react-native-firebase/firestore';
import { ScrollView } from 'react-native-gesture-handler';

const Register = () => {

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigator=useNavigation();

  const  registerUser =async() => {
    
    if(email!='' && password!='' && name!=''){
      
      const result=await auth()
      .createUserWithEmailAndPassword(email.trim(),password)
      firebase.firestore().collection('users').doc(result.user.uid).set({
        name:name,
        email:result.user.email,
        uid:result.user.uid,
       
      })
      .then(()=>{
        navigator.navigate("Home");
      })
    }
    else{
      Alert.alert('Invalid',"All Fields are required !")
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
         <ScrollView>
         <Image source={{uri:"https://www.sketchappsources.com/resources/source-image/sketch-3-todo-list-app-icon-template.png"}} style={{width:100,height:100,marginLeft:170,marginTop:80}}/>
         <Text style={{color:"black",marginTop:10,fontWeight:'bold',fontSize:16,textAlign:'center'}}>TODO</Text>
         
         <TextInput style={{borderWidth:2,borderColor:"black",width:340,marginLeft:58,marginTop:50,borderRadius:10,color:"black",padding:10,fontSize:18}} placeholder="Username" placeholderTextColor="grey" onChangeText={(val)=>setName(val)} value={name}/>
         <TextInput style={{borderWidth:2,borderColor:"black",width:340,marginLeft:58,marginTop:30,borderRadius:10,color:"black",padding:10,fontSize:18}} placeholder="Email" placeholderTextColor="grey"onChangeText={(val)=>setEmail(val)} value={email}/>
         <TextInput secureTextEntry={true} style={{borderWidth:2,borderColor:"black",width:340,marginLeft:58,marginTop:30,borderRadius:10,color:"black",padding:10,fontSize:18}} placeholder="Password" placeholderTextColor="grey" onChangeText={(val)=>setPassword(val)} value={password}/>
         <TouchableOpacity onPress={registerUser}>
         <Text style={{borderWidth:2,borderRadius:30,borderColor:"black",width:340,marginLeft:58,marginTop:35,paddingVertical:15,fontSize:20,backgroundColor:"purple",paddingLeft:130,color:"white"}}>REGISTER</Text>    
         </TouchableOpacity>
         <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:20}}>
      <Text style={{color:'black',fontSize:18}}>Already have an Account?</Text>
      <TouchableOpacity onPress={()=>navigator.navigate('Login')}>
      <Text style={{color:'blue',fontSize:18}}> Sign in</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
       </ImageBackground>
       
    </View>
  )
}

export default Register;