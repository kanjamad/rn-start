import React, {useReducer} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;
// const reducer = (state, howToChangeStateObject) => {
const reducer = (state, action) => {
    // state === {red: number, green:number, blue:number};
    /* *# community onvention *# -- 
        action === {type:'change_red'||'change_green'|| 'change_blue', payload:15 || -15 } */
    switch (action.type) {
        case 'change_red':
            // add validation
            return state.red + action.payload > 255 || state.red + action.payload < 0 ? state : {
                ...state,
                red: state.red + action.payload
            };
        case 'change_green':
            return state.green + action.payload > 255 || state.green + action.payload < 0 ? state : {
                ...state,
                green: state.green + action.payload
            };
        case 'change_blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0 ? state : {
                ...state,
                blue: state.blue + action.payload
            };
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
    <View >
        <ColorCounter onIncrease = {() => }
        onDecrease = {() => }
        color = "Red" 
        />
        <ColorCounter onIncrease = {() => }
        onDecrease = {() => }
        color = "Green" 
        />
        <ColorCounter onIncrease = {() => }
        onDecrease = {() => }
        color = "Blue" 
        />
        <View style = {
            {
                height: 150,
                width: 150,
                backgroundColor: `rgb(${red},${green},${blue})`
            }
        }
        />  
        </View>
    );
};

const styles = StyleSheet.create({});
export default SquareScreen;