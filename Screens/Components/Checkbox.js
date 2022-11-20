import { View, Text,TouchableOpacity,Image } from 'react-native'
import React,{useState} from 'react'

const Checkbox =() => {
  const [tick,setTick]=useState(false);
  const check=()=>{
      setTick(!tick);
  };
return (
  <View>
    <TouchableOpacity onPress={check}>
      {tick?
      <Image source={{uri:'https://www.citypng.com/public/uploads/preview/-316225907691vr4nvazfz.png'}}
    style={{width:30,height:30,marginLeft:40,marginTop:20}}/>:<View style={{borderWidth:1,borderColor:"white",width:30,height:30,marginLeft:40,marginTop:20}}/>}
    
    </TouchableOpacity>
  </View>
  );
};
export default Checkbox;