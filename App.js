/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Text, StyleSheet, TextInput, View, TouchableOpacity,} from 'react-native';
 
 const App = () => {
   return (
     <View>
       <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>TWIN</Text>
        <TextInput style={styles.TextInput} placeholder={'ID'}/>
        <TextInput style={styles.TextInput} placeholder={'Password'}/>
        <TouchableOpacity style={styles.submitButton}>
          <Text children={'Login'} style={styles.submitText}></Text>
        </TouchableOpacity>
       </View>
     </View>
   )
 };
 
 const styles = StyleSheet.create({
  TextInput:{
    margin:10,
    height:40,
    borderBottomColor:"#5D5FEF",
    borderBottomWidth:1.
  },
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     textAlign:'center',
     fontSize: 24,
     fontWeight: '900',
     color:"#5D5FEF",
   },
   submitText:{
    textAlign:'center',
    textAlignVertical:'center',
    color:'white',
    fontWeight:'bold',
   },
   submitButton:{
     padding:10,
     margin:15,
     height:40,
     backgroundColor:"#5D5FEF",
   }
 });
 
 export default App;
 