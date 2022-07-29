

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TextInput,
  View,
  Button
} from 'react-native';
import { Input } from "@rneui/themed";
import {Formik} from 'formik'





const App = () => {
  
  
  
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Create your account</Text>
      <Formik initialValues={{Firstname:"",Lastname:"",Age:"",email:""}}
      onSubmit ={values=>{fetch("your_connection_url", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((r) => r.json())
        .then((data) => {
          // The response comes here
          console.log(data);
        })
        .catch((error) => {
          // Errors are reported there
          console.log(error);
        });}
      
      }>
        {({handleChange, handleBlur, handleSubmit, values})=>(
          <View>
            <Input placeholder='First Name' value={values.Firstname} onChangeText={handleChange('Firstname')}
           onBlur={handleBlur('Firstname')}/>
           <Input placeholder='Last Name' value={values.Lastname} onChangeText={handleChange('Lastname')}
           onBlur={handleBlur('Lastname')}/>
           <Input placeholder='Age' value={values.Age} onChangeText={handleChange('Age')}
           onBlur={handleBlur('Age')}/>
           <Input placeholder='Email' value={values.email} onChangeText={handleChange('email')}
           onBlur={handleBlur('email')}/>

           <Button onPress={handleSubmit} title="Submit" />
           
          </View>
        )}

      </Formik>

    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 49,
    paddingHorizontal: 24,
  
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    alignSelf:"center",
    color:"blue",
    marginBottom:23
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
    alignSelf:"center"
  },
});

export default App;
