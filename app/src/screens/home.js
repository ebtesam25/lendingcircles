import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';





export default function Home() {
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
            <View style={{ marginTop: '5%',}}>
              <Image source={require('../assets/logo.png')} style={styles.header} ></Image>
              <View style={{position:'relative', marginLeft:'10%', marginTop:'5%'}}>
                <Text style={{fontFamily:'G', fontSize:40, color:'#F65158'}}>OurFund</Text>
                <Text style={{fontFamily:'G', fontSize:25, color:'#000'}}>Lending Circles, Democratized.</Text>
                <Text style={{fontFamily:'K', fontSize:18, color:'#000', width:'90%'}}>Lending circles help participants raise money for various expenses such as car down payments, debts and small-business investments. The circle consists of a group of people lending money to each other at very low or no cost. </Text>
              </View>
              <View style={{flexDirection:'row', display:'flex', marginHorizontal:'10%', marginTop:'5%'}}>
                  <Image source={require('../assets/j.png')}></Image>
                  <Image source={require('../assets/c.png')} style={{marginLeft:'5%'}}></Image>
              </View>
              <View style={{flexDirection:'row', display:'flex', marginHorizontal:'10%', marginTop:'5%'}}>
              <TouchableOpacity onPress={()=>navigation.navigate('CircleJoin')}><Text style={{fontFamily:'G', fontSize:15, color:'#28324B'}}>        Join a cirlce</Text></TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate('CircleCreate')}><Text style={{fontFamily:'G', fontSize:15, color:'#28324B'}}>                    Create a circle</Text></TouchableOpacity>
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