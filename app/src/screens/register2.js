import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';





export default function Register2({route}) {
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
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const {name} = route.params;
      if (!fontLoaded) {
        return null;
      }
      
    
   
    return (
        <View style={styles.container}>
            <View style={{ marginTop: '15%',}}>
              <View style={{flexDirection:'column', display:'flex', marginHorizontal:'10%'}}>
                  <Icon name="chevron-left" type="entypo" color="#28324B" size={35} style={{alignItems:'flex-start'}}></Icon>
                  <Text style={{fontFamily:'G', fontSize:20, color:'#28324B', textAlign:'left', marginTop:'2.5%', marginLeft:'5%'}}>Hey {name}, complete your profile</Text>
              </View>
              <View style={{flexDirection:'row', display:'flex', marginHorizontal:'10%', marginTop:'5%'}}>
                  <Image source={require('../assets/r1.png')}></Image>
                  <Icon name="circle" color="#C4C4C4" size={15} style={{marginTop:'60%', marginLeft:'10%'}}></Icon>
                  <Icon name="circle" color="#C4C4C4" size={15} style={{marginTop:'200%', marginLeft:'0%'}}></Icon>
                  <Icon name="circle" color="#C4C4C4" size={15} style={{marginTop:'65%', marginLeft:'10%'}}></Icon>
                  <Image source={require('../assets/r2.png')}></Image>
              </View>
              <View style={{flexDirection:'row', display:'flex', marginHorizontal:'10%', marginTop:'5%'}}>
              <Text style={{fontFamily:'G', fontSize:20, color:'#28324B'}}>Personal{'\n'}Details</Text>
              <TouchableOpacity onPress={()=>navigation.navigate('Monetary')}><Text style={{fontFamily:'G', fontSize:20, color:'#28324B'}}>                         Monetary{'\n'}                         Details</Text></TouchableOpacity>
              </View>
              <View style={{marginTop:'2.5%', width:'60%' , marginLeft:'10%', borderRadius:10}}>
              <TouchableOpacity><Text style={{textAlign:'left', color:'#28324B', fontFamily:'G', fontSize:18, textDecorationLine:'underline', textDecorationColor:'#FBDE44', textDecorationStyle:'double', marginTop:'5%'}}>I'll do this later</Text></TouchableOpacity>
              </View>
              <Image source={require('../assets/r3.png')} style={{marginTop:'10%', marginLeft:'10%'}}></Image>
              
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