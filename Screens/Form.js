import { View, Text,TouchableOpacity,Alert } from 'react-native';
import React,{useEffect, useState} from 'react';
import { TextInput } from 'react-native-gesture-handler';
import Home from './Home';
import firestore, { firebase } from '@react-native-firebase/firestore';


const Form = ({navigation,route}) => {
    const [title,setTitle]=useState("");

       //Get Current Date
       
       var date1 = new Date().getDate();
 
       //Get Current Month
       var month = new Date().getMonth() + 1;
    
       //Get Current Year
       var year = new Date().getFullYear();
    
       var finalObject = date1 + '/' + month + '/' + year ;
    
    const [date,setdate]=useState(finalObject);
       
    
    const ref=firestore().collection('todos');
    
    
   
    
    const add=async()=>{
      
        if(title.length==0){
          Alert.alert("Invalid Input","Please enter the title !");
          return
            }
        await ref.add({
            title:{title},
            date:{date},
            time:firestore.Timestamp.fromDate(new Date()),
            
        }).then(
            setTitle(""),
            setdate(""),
           
            navigation.navigate("Home",list)
            )   
        

        }
    
  
    return (
      <View style={{backgroundColor:'white',height:340}}>
        <Text style={{color:"white",fontSize:30,paddingVertical:10,backgroundColor:"purple",width:"100%",paddingLeft:100}}>Add Your Task</Text>
       
        <Text style={{fontSize:20,color:"blue",marginTop:30,marginLeft:20}}>
          Task Title:
        </Text>

        <TextInput style={{color:"black",borderBottomWidth:2,borderBottomColor:"black",marginLeft:20,width:360,fontSize:18,paddingBottom:0,marginTop:20}}
        onChangeText={(val)=>setTitle(val)} value={title}/>
       
        <TouchableOpacity onPress={add}>
        <Text style={{backgroundColor:"green",color:"white",marginLeft:20,width:100,paddingLeft:35,paddingVertical:10,marginTop:50,borderRadius:15,fontSize:18}}>ADD</Text>  
        </TouchableOpacity>
        
      </View>
    )
  }
  export default Form;