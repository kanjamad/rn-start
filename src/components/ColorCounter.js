import React from 'react';
import { View,Text, StyleSheet, Button} from 'react-native';

// const ColorCounter = (porps) => {
const ColorCounter = ({color}) => {

    return ( 
        <View >
        <Text > {color} </Text> 
        <Button 
        title={`Increate Red ${color}`}
        />
        < Button
        title = {`Decreate Red ${color}` }
        />
        </View>
    );
};

const styles = StyleSheet.create({});

export default ColorCounter;