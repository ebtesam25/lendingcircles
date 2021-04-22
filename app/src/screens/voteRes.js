import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle, Polyline } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';
import { ToastAndroid } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';





export default function VoteRes() {
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
    var names = ["Banana", "Orange", "Apple", "Mango"];
      
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
                  <Icon name="chevron-left" type="entypo" color="#28324B" size={35}></Icon>
                  <Text style={{fontFamily:'G', fontSize:30, color:'#28324B', textAlign:'right'}}>Voting Results</Text>
              </View>
              <View style={{position:'relative', marginLeft:'10%', marginTop:'1%'}}>
                <View style={{height:320}}><ScrollView>
                  
                <View style={{marginTop:'5%',backgroundColor:`rgba(245,243,243,0.32)`,borderRadius:20, width:'80%', paddingHorizontal:'5%'}}>
                <Text style={{fontFamily:'G', fontSize:20, color:'#28324B', marginTop:'10%'}}>Investing in a Food Bank near
NYC</Text>
                <Text style={{fontFamily:'K', color:'#28324B'}}>by George
                </Text>
                <Text style={{fontFamily:'G', fontSize:15, color:'#28324B', marginTop:'10%'}}>No. of votes : 22</Text>
                <Text style={{fontFamily:'G', fontSize:15, color:'#28324B', marginTop:'10%'}}>Approve</Text>
                <Svg height={20}>
                <Line x1="10" y1="10" x2="150" y2="10" stroke="#FFBF00" strokeWidth="15" strokeLinecap="round"/>
                </Svg>
                <Text style={{fontFamily:'G', fontSize:15, color:'#28324B', marginTop:'10%'}}>Deny</Text>
                <Svg height={20} style={{marginBottom:'5%'}}>
                <Line x1="10" y1="10" x2="70" y2="10" stroke="#F65158" strokeWidth="15" strokeLinecap="round"/>
                </Svg>
                  </View>
                  
            </ScrollView></View>
            <Image source={require('../assets/check.png')} style={{height:50, width:50, resizeMode:'contain', alignSelf:'center', marginLeft:'-15%'}}></Image>
              <Text style={{fontFamily:'G', fontSize:15, color:'#28324B', marginTop:'10%', textAlign:'center', marginLeft:'-15%'}}>This request was approved!</Text>
         
                
               
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