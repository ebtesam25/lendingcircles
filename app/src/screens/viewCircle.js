import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';
import { ToastAndroid } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';





export default function VCirc() {
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
                  <Text style={{fontFamily:'G', fontSize:30, color:'#28324B', textAlign:'right'}}>Mission Asset Fund</Text>
              </View>
              <View style={{position:'relative', marginLeft:'10%', marginTop:'1%', height:600}}>

              <ScrollView> 
                <View style={{marginTop:'5%',backgroundColor:'#FFBF00',borderRadius:10, width:'80%', paddingHorizontal:'5%'}}>
                <Text style={{fontFamily:'G', fontSize:15, color:'#000', marginVertical:'5%', textAlignVertical:'center', textAlign:'center'}} onPress={()=>navigation.navigate('CreateProposal')}>Create your own proposal</Text>
                </View>
                <View style={{marginTop:'5%',backgroundColor:'#FFBF00',borderRadius:10, width:'80%', paddingHorizontal:'5%'}}>
                <Text style={{fontFamily:'G', fontSize:15, color:'#000', marginVertical:'5%', textAlignVertical:'center', textAlign:'center'}}>Make a Deposit</Text>
                </View>
                <Text style={{fontFamily:'G', fontSize:18, color:'#28324B', textAlign:'left', marginTop:'10%'}}>Current Proposals</Text>
                <View style={{marginTop:'5%',backgroundColor:'#FBEAEB',borderRadius:10, width:'80%', paddingHorizontal:'5%'}}>
                <Text style={{fontFamily:'G', fontSize:15, color:'#F65158', marginVertical:'5%', textAlignVertical:'center', textAlign:'center'}}>Lending Request for Student
Loan (by Amy)</Text>
                </View>
                <View style={{marginTop:'5%',backgroundColor:'#FBEAEB',borderRadius:10, width:'80%', paddingHorizontal:'5%'}}>
                <Text style={{fontFamily:'G', fontSize:15, color:'#F65158', marginVertical:'5%', textAlignVertical:'center', textAlign:'center'}} onPress={()=>navigation.navigate('Proposal')}>Investing in a food bank near NYC (by George)</Text>
                </View>
                <View style={{marginTop:'5%',backgroundColor:'#FBEAEB',borderRadius:10, width:'80%', paddingHorizontal:'5%'}}>
                <Text style={{fontFamily:'G', fontSize:15, color:'#F65158', marginVertical:'5%', textAlignVertical:'center', textAlign:'center'}}>Purchasing stocks in Reddit Inc. (by George)</Text>
                </View>
                <Text style={{fontFamily:'G', fontSize:18, color:'#28324B', textAlign:'left', marginTop:'10%'}}>Member Growth(past month)</Text>
                <View style={{marginTop:'5%',backgroundColor:'#F65158',borderRadius:10, width:'80%', paddingHorizontal:'5%'}}>
                <Text style={{fontFamily:'G', fontSize:25, color:'#FFF', marginTop:'5%', textAlignVertical:'center', textAlign:'center'}}>125%</Text>
                <Text style={{fontFamily:'K', fontSize:15, color:'#FFF', marginBottom:'5%', textAlignVertical:'center', textAlign:'center'}}>15 more members joined
in the past month.</Text>
                </View>
                <Text style={{fontFamily:'G', fontSize:18, color:'#28324B', textAlign:'left', marginTop:'10%'}}>Amount in Bank</Text>
                <View style={{marginTop:'5%',backgroundColor:'#E9EBED',borderRadius:10, width:'80%', paddingHorizontal:'5%'}}>
                <Text style={{fontFamily:'G', fontSize:25, color:'#28324B', marginTop:'5%', textAlignVertical:'center', textAlign:'center'}}>$10,790</Text>
                <Text style={{fontFamily:'K', fontSize:15, color:'#28324B', marginBottom:'5%', textAlignVertical:'center', textAlign:'center'}}>*minimum amount of $750
to be present in bank*</Text>
                </View>
              </ScrollView>
               
              </View>
              
              <View style={{marginTop:'2.5%', width:'60%', alignSelf:'center', borderRadius:10}}>
              <TouchableOpacity onPress={()=>navigation.navigate('Register')}><Text style={{textAlign:'center', color:'#F65158', fontFamily:'G', fontSize:18, textDecorationLine:'underline', textDecorationColor:'#FBDE44', textDecorationStyle:'double', marginTop:'55%'}}>Create an  new account</Text></TouchableOpacity>
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