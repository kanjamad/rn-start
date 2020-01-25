import React from 'react';
import { View,Text, StyleSheet, Button} from 'react-native';

// const ColorCounter = (porps) => {
const ColorCounter = ({color, onIncrease, onDecrease}) => {

    return ( 
        <View >
        <Text > {color} </Text> 
        <Button 
        title={`Increate Red ${color}`}
        onPress={()=>onIncrease()}
        />
        < Button
        title = {`Decreate Red ${color}` }
        onPress={()=>onDecrease()}
        />
        </View>
    );
};

const styles = StyleSheet.create({});

export default ColorCounter;