import React, { useEffect } from 'react';
import {StyleSheet,Text, View,} from 'react-native';
import { NotificationListner, requestUserPermission,} from "./src/untils/pushnotification_helper";

const App = () => {

  useEffect(() => {
    requestUserPermission();
    NotificationListner();
  }, [])
  return (

    <View style={{alignSelf:"center",flex:1,justifyContent:"center"}}>
      <Text style={{fontWeight:"bold"}}>Push Notification Tester</Text>
    </View>

  );
};
  


export default App;

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});


