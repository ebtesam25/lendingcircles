import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';





export default function Orient2() {
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
                <Text style={{fontFamily:'G', fontSize:25, color:'#000'}}>Lending<Text style={{fontFamily:'G', fontSize:25, color:'#F65158'}}> within the group</Text></Text>
                
                <Text style={{fontFamily:'K', fontSize:18, color:'#000', width:'90%'}}>Using OurFund, a virtual form of lending circles, you can lend/donate/gift money to members within the group.</Text>
              </View>
              <View style={{backgroundColor:'#FFBF00', marginTop:'15%', width:'60%', alignSelf:'center', paddingVertical:'5%', borderRadius:10}}>
                <TouchableOpacity onPress={()=>navigation.navigate('Orient3')}><Text style={{textAlign:'center', color:'#28324B', fontFamily:'G', fontSize:14}}>Next</Text></TouchableOpacity>
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