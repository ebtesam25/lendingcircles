import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';





export default function Login() {
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
    const [password, setPassword] = useState('');
      if (!fontLoaded) {
        return null;
      }
      
    
   
    return (
        <View style={styles.container}>
            <View style={{ marginTop: '15%',}}>
              <View style={{flexDirection:'row', display:'flex', marginHorizontal:'10%'}}>
                  <Icon name="chevron-left" type="entypo" color="#F65158" size={35}></Icon>
                  <Text style={{fontFamily:'G', fontSize:30, color:'#F65158', textAlign:'right'}}> Sign In</Text>
              </View>
              <View style={{position:'relative', marginLeft:'10%', marginTop:'40%'}}>
                <Text style={{fontFamily:'K', fontSize:30, color:'#F65158'}}>Login to your account</Text>
                <TextInput value={email} onChangeText={setEmail} style={{backgroundColor:`rgba(255,191,0,0.25)`, borderRadius:10, width:'80%', height:50, marginTop:'10%', paddingLeft:'5%'}} placeholder="Email address" placeholderTextColor="#FFBF00"></TextInput>
                <TextInput value={password} onChangeText={setPassword} secureTextEntry style={{backgroundColor:`rgba(255,191,0,0.25)`, borderRadius:10, width:'80%', height:50, marginTop:'5%', paddingLeft:'5%'}} placeholder="Password" placeholderTextColor="#FFBF00"></TextInput>
                <Text style={{color:'#F65158', fontFamily:'K', marginTop:'2.5%', fontSize:16}}>forgot your password?</Text>
              </View>
              <View style={{backgroundColor:'#F65158', marginTop:'15%', width:'60%', alignSelf:'center', paddingVertical:'5%', borderRadius:10}}>
                <TouchableOpacity><Text style={{textAlign:'center', color:'#FBDE44', fontFamily:'K', fontSize:18}}>Sign In</Text></TouchableOpacity>
              </View>
              <View style={{marginTop:'2.5%', width:'60%', alignSelf:'center', borderRadius:10}}>
              <TouchableOpacity onPress={()=>navigation.navigate('Register')}><Text style={{textAlign:'center', color:'#F65158', fontFamily:'G', fontSize:18, textDecorationLine:'underline', textDecorationColor:'#FBDE44', textDecorationStyle:'double', marginTop:'55%'}}>Create an  new account</Text></TouchableOpacity>
              </View>
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