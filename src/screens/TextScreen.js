import React,{useState} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';

const TextScreen = () =>{
    const [password, setPassword] = useState('');
    return(
        <View>
            <Text>Enter Password:</Text>
            <TextInput  
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={password}Password
            onChangeText={newValue => setPassword(newValue)}
            />
            {password.length < 5 ? <Text>Password must be longer than 5 characters</Text>: null}
        
        </View>
    );
};

const styles = StyleSheet.create({
    input:{
        borderColor: 'black',
        margin:15,
        borderWidth:1,
    }
});
export default TextScreen;