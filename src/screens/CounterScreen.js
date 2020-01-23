import React, {useState} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';

const CounterScreen = () =>{
    // let counter = 0;
    const [counter, setCounter] = useState(0);

    return (
        <View>
            {/* <Button title="Increase" onPress={()=>{}} /> */}
            <Button title="Increase" onPress={()=>{
                //Don't do this because we not varifly variable direactly (counter++);
                // console.log(counter);
                setCounter(counter + 1);
                
            }} />
            <Button title="Decrease" onPress={()=>{
                setCounter(counter -1);
            }} />
<Text> Current Count: {counter} </Text>
        </View>
    );
}

const Styles = StyleSheet.create({});

export default CounterScreen;