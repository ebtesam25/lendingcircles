import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';
import { ToastAndroid } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';





export default function Proposal() {
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
                  <Text style={{fontFamily:'G', fontSize:30, color:'#28324B', textAlign:'right'}}>Proposal Request</Text>
              </View>
              <View style={{position:'relative', marginLeft:'10%', marginTop:'1%'}}>
                <View style={{height:320}}><ScrollView>
                  
                <View style={{marginTop:'5%',backgroundColor:`rgba(245,243,243,0.32)`,borderRadius:20, width:'80%', paddingHorizontal:'5%'}}>
                <Text style={{fontFamily:'G', fontSize:20, color:'#28324B', marginTop:'10%'}}>Investing in a Food Bank near
NYC</Text>
                <Text style={{fontFamily:'K', color:'#28324B'}}>by George
                </Text>
                <Text style={{fontFamily:'G', fontSize:15, color:'#28324B', marginTop:'10%'}}>Description</Text>
                <Text style={{fontFamily:'K', color:'#28324B', marginBottom:'15%'}}>Seeing the proposal requests this month, I feel like the donation amount was low than what we generally have and that is why tomeet the monthly mount, i feel like we should invest in a Food Bank neard NYC. Everyone will be required to donate $100 for the cause(The more amount one donates, the more chance they have at getting their lending proposal approved).
                </Text>
                  </View>
                  
            </ScrollView></View>
            <View style={{backgroundColor:'#FFBF00', marginTop:'5%', width:'60%', alignSelf:'center', paddingVertical:'5%', borderRadius:10, marginLeft:'-15%'}}>
                <TouchableOpacity onPress={()=>navigation.navigate('VoteRes')}><Text style={{textAlign:'center', color:'#28324B', fontFamily:'G', fontSize:18}}>Approve</Text></TouchableOpacity>
              </View>
              <Text style={{fontFamily:'G', fontSize:15, color:'#28324B', marginTop:'10%', textAlign:'center', marginLeft:'-15%'}}>or</Text>
              <View style={{backgroundColor:'#F65158', marginTop:'5%', width:'60%', alignSelf:'center', paddingVertical:'5%', borderRadius:10, marginLeft:'-15%'}}>
                <TouchableOpacity onPress={()=>navigation.navigate('Vcirc')}><Text style={{textAlign:'center', color:'#FFF', fontFamily:'G', fontSize:18}}>Deny</Text></TouchableOpacity>
              </View>
                
               
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