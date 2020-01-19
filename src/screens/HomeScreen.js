import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
// const HomeScreen = (props) => {
  // console.log(props.navigation);
  return (
    <View>
      <Text style={styles.text}>Kanjamad Bosel-Por</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        // onPress={() => props.navigation.navigate("Components")}
        title="Go to Components Demo"
      />
      <Button 
        title="Go to List Demo"
        onPress={()=> navigation.navigate('List')}
        // onPress={()=>props.navigation.navigate('List')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
