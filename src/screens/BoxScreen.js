import React from 'react';
import {Text, View,StyleSheet} from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}> Hi Box Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle:{
        borderWidth:3,
        borderColor:'black',
    },
    textStyle:{
        borderWidth:1,
        borderColor:'red',
        // marginHorizontal:20,
        // marginVertical:20,
        margin:20,
        
    },

});

export default BoxScreen;