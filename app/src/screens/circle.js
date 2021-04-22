import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';
import { ToastAndroid } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';





export default function CircleView() {
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
    var names = ["John Doe", "George Washington", "Jane Doe"];
      
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
              <View style={{position:'relative', marginLeft:'10%', marginTop:'1%'}}>
                <View style={{height:510}}><ScrollView>
                  
                <View style={{marginTop:'5%',backgroundColor:`rgba(245,243,243,0.32)`,borderRadius:20, width:'80%', paddingHorizontal:'5%'}}>
                <Text style={{fontFamily:'G', fontSize:20, color:'#28324B', marginTop:'10%'}}>Description</Text>
                <Text style={{fontFamily:'K', color:'#F65158'}}>MAF is a San Francisco based non-profit that provides zero-interest social loans and financial education to help hardworking families build their credit and realize their financial goals with Lending Circles for DACA, DAPA, Citizenship and Business.
                </Text>
                <Text style={{fontFamily:'G', fontSize:20, color:'#28324B', marginTop:'10%'}}>Tags</Text>
                <Text style={{fontFamily:'K', color:'#F65158'}}>Lending Circles; Lending Circles for Citizenship; Lending Circles for DACA; Lending Circles for
DAPA; Lending Circles for Small Businesses 
                </Text>
                <Text style={{fontFamily:'G', fontSize:20, color:'#28324B', marginTop:'10%'}}>Contact Details</Text>
                <Text style={{fontFamily:'K', color:'#F65158'}}>Contact: Programs Team 3269 Mission Street San Francisco CA, 94110
                    Phone: (888) 274-4808
                    Email: programs@maf.org
                </Text>
                <Text style={{fontFamily:'G', fontSize:20, color:'#28324B', marginTop:'10%'}}>Member Details (monthly)</Text>
                <Text style={{fontFamily:'K', color:'#F65158', marginBottom:'5%'}}>Donation Budget: $100 {'\n'}

Deposit Budget: $300{'\n'}

No. of Members currently: 19{'\n'}

Proposal requests(last month): 37{'\n'}

Buy-in amount: $25
                </Text>
                  </View>
                  
            </ScrollView></View>
            <View style={{backgroundColor:'#FFBF00', marginTop:'5%', width:'60%', alignSelf:'center', paddingVertical:'5%', borderRadius:10, marginLeft:'-15%'}}>
                <TouchableOpacity onPress={()=>navigation.navigate('Vcirc')}><Text style={{textAlign:'center', color:'#28324B', fontFamily:'G', fontSize:18}}>Join</Text></TouchableOpacity>
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