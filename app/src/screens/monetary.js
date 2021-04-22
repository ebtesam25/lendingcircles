import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';





export default function MOnetary() {
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
      if (!fontLoaded) {
        return null;
      }
      
    
   
    return (
        <View style={styles.container}>
            <View style={{ marginTop: '15%',}}>
              <View style={{flexDirection:'row', display:'flex', marginHorizontal:'10%'}}>
                  <Icon name="chevron-left" type="entypo" color="#28324B" size={35}></Icon>
                  <Text style={{fontFamily:'G', fontSize:30, color:'#28324B', textAlign:'right'}}> Monetary Details</Text>
              </View>

              <View style={{position:'relative', marginLeft:'10%', marginTop:'20%'}}>
                  <View style={{flexDirection:'row', display:'flex', height:50}}>
                  <View style={{flexDirection:'row', display:'flex', backgroundColor:'#FFBF00', width:'40%', borderRadius:10, height:50, paddingVertical:10, alignContent:'center'}}>
                      <Icon name="credit-card-alt" type="font-awesome" style={{marginLeft:'10%'}}></Icon>
                      <Text style={{fontFamily:'G'}}>  Credit Card</Text>
                  </View>
                  <View style={{ width:'40%', borderRadius:10, marginLeft:'10%', alignContent:'center'}}>
                      <Image source={require('../assets/pal.png')} height={50}></Image>
                  </View>
                  </View>
                  
                <Text style={{fontFamily:'K', fontSize:20, color:'#28324B', marginTop:'10%'}}>Credit card number</Text>
                <TextInput value={fullName} onChangeText={(e)=>setFullName(e)} style={{backgroundColor:`rgba(255,191,0,0.25)`, borderRadius:10, width:'80%', height:50, marginTop:'1%', paddingLeft:'5%'}} placeholder="1234 1234 1234 1234" placeholderTextColor="#FFBF00"></TextInput>
                <Text style={{fontFamily:'K', fontSize:20, color:'#28324B', marginTop:'10%'}}>Expiry Date                            CVV</Text>
                <View style={{flexDirection:'row', display:'flex'}}>
                <TextInput style={{backgroundColor:`rgba(255,191,0,0.25)`, borderRadius:10, width:'40%', height:50, marginTop:'1%', paddingLeft:'5%'}} placeholder="MM/YYYY" placeholderTextColor="#FFBF00"></TextInput>
                <TextInput secureTextEntry style={{backgroundColor:`rgba(255,191,0,0.25)`, borderRadius:10, width:'30%', height:50, marginLeft:'15%', paddingLeft:'5%'}} placeholder="CVV" placeholderTextColor="#FFBF00"></TextInput>
                </View>
                <Text style={{fontFamily:'K', fontSize:18, color:'#28324B', marginTop:'10%', width:'90%'}}>By registering your payment details, you agree to OurFund’s terms of use and privacy policy</Text>

              </View>
              <View style={{backgroundColor:'#28324B', marginTop:'15%', width:'60%', alignSelf:'center', paddingVertical:'5%', borderRadius:10}}>
                <TouchableOpacity onPress={()=>navigation.navigate('Orient1')}><Text style={{textAlign:'center', color:'#FBDE44', fontFamily:'G', fontSize:14}}>Confirm Payment Details</Text></TouchableOpacity>
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