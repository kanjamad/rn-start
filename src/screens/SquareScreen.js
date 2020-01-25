import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    return (
        <View>
            <ColorCounter color="Red"/>
            <ColorCounter color="Blue"/>
            <ColorCounter color="Green"/>
        </View>
    );
};

const styles = StyleSheet.create({});
export default SquareScreen;