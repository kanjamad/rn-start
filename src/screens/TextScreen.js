import React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';

const TextScreen = () =>{
    return(
        <View>
            <TextInput  style={styles.input}/>
        </View>
    );
};

const styles = StyleSheet.create({
    input:{
        borderColor: 'black',
        margin:15,
        borderWidth:1
    }
});
export default TextScreen;