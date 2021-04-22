import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';
import { ToastAndroid } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';





export default function CircleCreate() {
    const navigation = useNavigation();
    const [fontLoaded] = useFonts({
        G: require('../assets/fonts/G.ttf'),
        K: require('../assets/fonts/K.ttf'),

      });
      // useEffect(() => {
      //   setTimeout(() => {
      //       navigation.navigate('#');
      //   }, 1000);
      // },[]);
    const [email, setEmail] = useState('');
    const [circlename, setCircleName] = useState('');
    const [password, setPassword] = useState('');
    var names = ["John Doe", "Jane Doe"];
      
      if (!fontLoaded) {
        return null;
      }
      const _addtoList = (name) => {
        names.push(name);
        console.log(names)

      }
    
   
    return (
        <View style={styles.container}>
            <View style={{ marginTop: '15%',}}>
              <View style={{flexDirection:'row', display:'flex', marginHorizontal:'10%'}}>
                  <Icon name="chevron-left" type="entypo" color="#F65158" size={35}></Icon>
                  <Text style={{fontFamily:'G', fontSize:30, color:'#F65158', textAlign:'right'}}>Create a circle</Text>
              </View>
              
              <View style={{position:'relative', marginLeft:'10%', marginTop:'1%', height:500}}><ScrollView>
                <TextInput value={circlename} onChangeText={setCircleName} style={{backgroundColor:`rgba(255,191,0,0.25)`, borderRadius:10, width:'80%', height:50, marginTop:'10%', paddingLeft:'5%'}} placeholder="Name of the Circle" placeholderTextColor="#FFBF00"></TextInput>
                <Text style={{fontFamily:'G', fontSize:20, color:'#28324B', marginTop:'10%'}}>Add Members</Text>
                <View style={{flexDirection:'row', display:'flex', marginTop:'5%'}}>
                    <TextInput value={email}   style={{backgroundColor:`rgba(255,191,0,0.25)`, borderRadius:10, width:'80%', height:50, paddingLeft:'5%'}} placeholder="Email" onChangeText={(e)=>setEmail(e)} placeholderTextColor="#FFBF00"></TextInput>
                    <TouchableOpacity onPress={()=>_addtoList(email)}><Text style={{backgroundColor:'#28324B', fontFamily:'K', fontSize:25,color:"#FFF", width:50, height:50, borderRadius:10, textAlign:'center', textAlignVertical:'center'}}>+</Text></TouchableOpacity>
                </View>
                <Text style={{fontFamily:'G', fontSize:20, color:'#28324B', marginTop:'10%'}}>Members List</Text>
                <View style={{flexDirection:'column', display:'flex', marginTop:'5%'}}>
                    {names.map((name,index)=><Text  style={{backgroundColor:`rgba(255,191,0,0.25)`, borderRadius:10, width:'80%', height:40, paddingLeft:'5%', color:'#FFBF00'}}>{name}</Text>)}
                    
                </View>
                <Text style={{fontFamily:'G', fontSize:20, color:'#28324B', marginTop:'10%'}}>...or Invite Them using a Custom Link</Text>
                <View style={{flexDirection:'row', display:'flex', marginTop:'5%'}}>
                    <Text style={{backgroundColor:`rgba(255,191,0,0.25)`, borderRadius:10, width:'75%', height:50, paddingLeft:'5%', color:"#FFBF00", textAlignVertical:'center'}} >ourfund.com/invite?ref=123</Text>
                    <TouchableOpacity onPress={()=>ToastAndroid.showWithGravityAndOffset(
      'Copied to clipboard',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    )}><Text style={{backgroundColor:'#28324B', fontFamily:'K', fontSize:15,color:"#FFF", width:70, height:50, borderRadius:10, textAlign:'center', textAlignVertical:'center'}}>Copy</Text></TouchableOpacity>
                </View>
                <Text style={{fontFamily:'G', fontSize:20, color:'#28324B', marginTop:'10%'}}>Donation Budget per member (optional)</Text>
                <TextInput style={{fontFamily:'K', color:'#28324B'}} placeholder='$'>
                </TextInput>
                <Text style={{fontFamily:'G', fontSize:20, color:'#28324B', marginTop:'10%'}}>Description</Text>
                <TextInput style={{fontFamily:'K', color:'#28324B'}} placeholder='Tell us more about your lending circle'>
                </TextInput>
             </ScrollView></View>
              
              <View style={{marginTop:'2.5%', width:'60%', alignSelf:'center', borderRadius:10}}>
              <TouchableOpacity onPress={()=>navigation.navigate('Register')}><Text style={{textAlign:'center', color:'#F65158', fontFamily:'G', fontSize:18, textDecorationLine:'underline', textDecorationColor:'#FBDE44', textDecorationStyle:'double', marginTop:'5%'}}>Create Circle</Text></TouchableOpacity>
              </View>
            </View>
            <View style={{backgroundColor:'#28324B', width:'100%', height:70, position:'absolute', bottom:0, paddingTop:'5%', flexDirection:'row', display:'flex', paddingHorizontal:'15%'}}>
                <Icon name="home" color="#FFBF00" style={{marginRight:'25%'}} size={30}></Icon>
                <Icon name="chat" color="#FFF" style={{marginRight:'35%'}} size={30}></Icon>
                <Icon name="user" type="font-awesome" color="#FFF" size={30}></Icon>
              </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        position: 'relative',
        backgroundColor: '#FFF'
    },
    header: {
        height:'34%',
        width:'34%',
        resizeMode:'contain',
        marginLeft:'10%'
    },

});