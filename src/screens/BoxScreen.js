import React from 'react';
import {Text, View,StyleSheet} from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}> Child#1 </Text>
            <Text style={styles.textStyle}> Child#2 </Text>
            <Text style={styles.textStyle}> Child#3 </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle:{
        borderWidth:3,
        borderColor:'black',
        // alignItems:'flex-end',
        flexDirection:'row'
    },
    textStyle:{
        borderWidth:2,
        borderColor:'red',
        height:200
        
    },

});

export default BoxScreen;