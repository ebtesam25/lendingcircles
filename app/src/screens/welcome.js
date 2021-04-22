import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';





export default function Welcome() {
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

      if (!fontLoaded) {
        return null;
      }
      
    
   
    return (
        <View style={styles.container}>
            <View style={{ marginTop: '55%',}}>
              <Image source={require('../assets/logo.png')} style={styles.header} ></Image>
              <View style={{position:'relative', marginLeft:'10%', marginTop:'5%'}}>
                <Text style={{fontFamily:'G', fontSize:40, color:'#F65158'}}>OurFund</Text>
                <Text style={{fontFamily:'K', fontSize:25, color:'#000'}}>Democratized Lending Circles</Text>
              </View>
              <View style={{backgroundColor:'#F65158', marginTop:'15%', width:'60%', alignSelf:'center', paddingVertical:'5%', borderRadius:10}}>
                <TouchableOpacity><Text style={{textAlign:'center', color:'#FBDE44', fontFamily:'K', fontSize:18}} onPress={()=>navigation.navigate('Login')}>Sign In</Text></TouchableOpacity>
              </View>
              <View style={{backgroundColor:'#FFBF00', marginTop:'2.5%', width:'60%', alignSelf:'center', paddingVertical:'5%', borderRadius:10}}>
              <TouchableOpacity onPress={()=>navigation.navigate('Register')}><Text style={{textAlign:'center', color:'#28324B', fontFamily:'K', fontSize:18}}>Create an Account</Text></TouchableOpacity>
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