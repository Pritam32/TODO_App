import { View, Text,Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Register from './Register'

const Splash = () => {

    const navigator=useNavigation();

    useEffect(()=>{
        setTimeout(()=>{
            navigator.navigate('Register');
        },4000)
    })

  return (
    <View style={{display:'flex',alignItems:'center',justifyContent:'center',height:'100%'}}>
      <Image source={require('./logo.png')} style={{width:100,height:100}}/>
      <Text style={{color:'black',marginTop:5,fontSize:20,fontWeight:'bold'}}>TODO</Text>
    </View>
  )
}

export default Splash;