import React, {useState} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';

const CounterScreen = () =>{
    // let counter = 0;
    const [counter, setCounter] = useState(0);

    return (
        <View>
            {/* <Button title="Increase" onPress={()=>{}} /> */}
            <Button title="Increase" onPress={()=>{
                counter++;
                console.log(counter);
                
            }} />
            <Button title="Decrease" onPress={()=>{
                counter--;
                console.log(counter);
                
            }} />
<Text> Current Count: {counter} </Text>
        </View>
    );
}

const Styles = StyleSheet.create({});

export default CounterScreen;