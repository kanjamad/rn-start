import React, {useReducer} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

// const reducer = (state, howToChangeStateObject) => {
const reducer = (state, action) => {
    // state === {red: number, green:number, blue:number};
    // action mean how to change state object
    // action === {colorToChange:'red'||'green'|| 'blue', amount:15 || -15 }
    /* *# community onvention *# -- 
        action === {type:'change_red'||'change_green'|| 'change_blue', payload:15 || -15 } */
    switch (action.type) {
        case 'change_red':
            // add validation
            return state.red + action.payload >255 || state.red + action.payload < 0 ? state : { ...state, red: state.red + action.payload};
        case 'change_green':
            return state.green + action.payload >255 || state.green + action.payload < 0 ? state : { ...state, green: state.green + action.payload};
        case 'change_blue':
            return state.blue + action.payload >255 || state.blue + action.payload < 0 ? state : { ...state, blue: state.blue + action.payload};
        default:
            return state;

    }

};
const SquareScreen = () => {

    // dispatch === runMyReducer
    const [state, dispatch] = useReducer(reducer, {red: 0, green:0, blue:0});
    console.log(state) //{red:0, green:0,blue:0}

    // Use destructuring 
    const {red, green, blue} = state;


    return (
        <View>
            <ColorCounter 
            onIncrease={() => 
                dispatch({ type: 'change_red', payload: COLOR_INCREMENT })} 
            onDecrease={() => 
                dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT }) } 
            color="Red"
            />
            <ColorCounter 
            onIncrease = { () => 
                dispatch({ type: 'change_green', payload: COLOR_INCREMENT })} 
            onDecrease = { () =>  
                dispatch({ type: 'change_green', payload: -1 * COLOR_INCREMENT }) } 
            color="Green"
            />
            <ColorCounter 
            onIncrease = { () => 
                dispatch({ type: 'change_blue', payload: COLOR_INCREMENT })} 
            onDecrease = { () => 
                dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREMENT }) } 
            color="Blue"
            />
            <View style={{
                height:150,
                width:150,
                backgroundColor: `rgb(${red},${green},${blue})`
            }} />
        </View>
    );
};

const styles = StyleSheet.create({});
export default SquareScreen;