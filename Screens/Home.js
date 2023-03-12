import { View, Text,TouchableOpacity,FlatList, Button,ScrollView,Alert,Image,LogBox} from 'react-native';
import React,{useState,useEffect} from 'react';
import {TextInput } from 'react-native-gesture-handler';
import firestore, { firebase } from '@react-native-firebase/firestore';
import Checkbox from './Components/Checkbox';
import Form from './Form';
import auth from '@react-native-firebase/auth';

LogBox.ignoreAllLogs()
const Home = ({route,navigation}) => {

  const [list,setList]=useState([]);
  
  
  const ref=firestore().collection('users').doc(auth().currentUser.uid).collection('todos');



    useEffect(()=>{
      
      return ref.orderBy('time','asc').onSnapshot(querySnapshot=>{
        const list=[]
        querySnapshot.forEach(doc=>{
          list.push({
            id:doc.id,
            title:doc.data().title,
            date:doc.data().date,
            time:doc.data().time,
          })
        })
        setList(list)
        console.log(list)
        navigation.navigate("Home")
      })
    },[])

    const deleteTODO=({item})=>{
      
      ref.doc(item.id).delete().then(
        Alert.alert("Success"," Task Deleted Successfully !")
      )
      
    }
   
   
  return (
    <View style={{backgroundColor:"white"}}>
       
      <Text style={{backgroundColor:"purple",paddingHorizontal:20,paddingVertical:15,fontSize:20,color:"white",fontWeight:"bold"}}>TODO List</Text>
      
      <View style={{marginTop:25,height:616,alignItems:'center',backgroundColor:"white"}}>
      
        <FlatList
          data={list}
          renderItem={({item})=>(
            <ScrollView scrollEnabled>
             
            <View style={{width:380,backgroundColor:"#1a7bc9",marginTop:20,padding:20,borderRadius:25}}>
            <View style={{flexDirection:"row"}}>
            <View>
            <TouchableOpacity onPress={()=>Alert.alert("Task",item.title.title)}>
              <View style={{width:220}}>
              <Text style={{fontSize:22,color:"white"}}>{item.title.title}</Text>
              </View>
            </TouchableOpacity>
            <Text style={{fontSize:16,color:"white",marginTop:25}}>{"Added On: "+item.date.date}</Text>  
            </View>    
            <Checkbox/>
            <TouchableOpacity onPress={()=>deleteTODO({item})}>
            <Image source={{uri:"https://media.istockphoto.com/vectors/paper-cut-trash-can-icon-isolated-on-blue-background-garbage-bin-sign-vector-id1224149023?k=20&m=1224149023&s=170667a&w=0&h=0IaKZGIPVahuRJRST46jI4Fz46tKfyphTkJGzBxhfDU="}}
    style={{width:50,height:50,marginLeft:10,marginTop:10}}/>
            </TouchableOpacity>
            </View>
            
            </View> 
            </ScrollView>
          )}/>
      
      </View> 
      
      
      <View style={{marginLeft:180,marginTop:30,backgroundColor:"blue",alignItems:'center',width:70,height:68,
      justifyContent:'center',position:"relative",borderRadius:20}}>
        <TouchableOpacity onPress={()=>navigation.navigate("Form")}>
        <Text style={{fontSize:35,color:'white'}}>+</Text>
        </TouchableOpacity>
      </View>
    
     
     
    </View>
  )
};

export default Home;