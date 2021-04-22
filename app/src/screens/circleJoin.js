import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';
import { ToastAndroid } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';





export default function CircleJoin() {
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
                  <Icon name="chevron-left" type="entypo" color="#F65158" size={35}></Icon>
                  <Text style={{fontFamily:'G', fontSize:30, color:'#F65158', textAlign:'right'}}>Join a circle</Text>
              </View>
              <View style={{position:'relative', marginLeft:'10%', marginTop:'1%'}}>
                <TextInput value={circlename} style={{backgroundColor:`rgba(255,191,0,0.25)`, borderRadius:10, width:'80%', height:50, marginTop:'10%', paddingLeft:'5%'}} placeholder="Search" placeholderTextColor="#FFBF00"></TextInput>
                <View style={{height:510}}><ScrollView>
                  
                <View style={{marginTop:'5%',backgroundColor:`rgba(245,243,243,0.32)`,borderRadius:20, width:'80%', paddingHorizontal:'5%'}}>
                <Text style={{fontFamily:'G', fontSize:20, color:'#28324B', marginTop:'10%'}}>Mission Asset Fund</Text>
                <Text style={{fontFamily:'K', color:'#F65158'}}>Contact: Charles Butler{'\n'}
                    2854 Frederick Douglass Blvd{'\n'}
                    New York NY, 10039{'\n'}
                    Phone: (212) 281-4887{'\n'}
                    Email: cbutler@hcci.org{'\n'}{'\n'}
                    Description: MAF is a San Francisco
                    based nonprofit that provides
                    zero-interest social loans and
                    financial education to help
                    hardworking families build their...
                </Text><TouchableOpacity onPress={()=>navigation.navigate('Circle')}><Text style={{fontFamily:'K', marginBottom:'10%'}}>See more</Text></TouchableOpacity>
                    </View>
                    <View style={{marginTop:'5%',backgroundColor:`rgba(245,243,243,0.32)`,borderRadius:10, width:'80%', paddingHorizontal:'5%'}}>
                <Text style={{fontFamily:'G', fontSize:20, color:'#28324B', marginTop:'10%'}}>Harlem Congregations for Community Improvement</Text>
                <Text style={{fontFamily:'K', color:'#F65158'}}>Contact: Charles Butler{'\n'}2854 Frederick Douglass Blvd{'\n'}New York NY, 10039{'\n'}Phone: (212) 281-4887{'\n'}Email: cbutler@hcci.org{'\n'}{'\n'}Description: HCCI provides economic development and empowerment opportunities to help Harlem residents rebuild and sustain...
                </Text>
                    <Text style={{fontFamily:'K'}}>See more</Text></View>
                    <View style={{marginTop:'5%',backgroundColor:`rgba(245,243,243,0.32)`,borderRadius:10, width:'80%', paddingHorizontal:'5%'}}>
                <Text style={{fontFamily:'G', fontSize:20, color:'#28324B', marginTop:'10%'}}>San Francisco LGBT Community Center</Text>
                <Text style={{fontFamily:'K', color:'#F65158'}}>Contact: Andrea Coombes{'\n'}
                    1800 Market St{'\n'}
                    San Francisco CA, 94102{'\n'}
                    Phone: 415.865.5652{'\n'}
                    Email: lendingcircles@sfcenter.org{'\n'}{'\n'}
                    Description: SF LGBT connects our
                    community to opportunities and
                    resources to achieve our vision of a
                    stronger, healthier, and more equ...

                </Text>
                <Text style={{fontFamily:'K'}}>See more</Text></View>
            </ScrollView></View>

                
               
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