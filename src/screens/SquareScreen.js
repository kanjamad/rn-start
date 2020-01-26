import React, {useReducer} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

// const reducer = (state, howToChangeStateObject) => {
const reducer = (state, action) => {
    // state === {red: number, green:number, blue:number};
    // action mean how to change state object
    // action === {colorToChange:'red'||'green'|| 'blue', amount:15 || -15 }
    switch (action.colorToChange) {
        case 'red':
            // inspac action
            // Never do this->  state.red =state.red - 15;
            return { ...state, red: state.red + action.amount};
            /* So what's going on with the syntax right here.

                Well it's essentially means make a brand new object so that's where we are assembling a new object.

                We're then going to take all the existing properties out of our state object and we're going to essentially

                copy paste them into this new one then we're going to overwrite the existing red property and the new

                value for red will be state plus red plus action dot amount.

                So with this code right here we are not making any change whatsoever to our state object.

                Instead we are copy pasting all the values out of it adding them to this new object and then making

                a change to the new object.

                So no change has been made to the original state object which is exactly what we want.

                We don't want to make any change directly to state */

            // ---------------------
            /* 
            
                return { ...state, red: state.red + action.amount};
                return { red: 0, green:0, blue:0, red: state.red + action.amount};
                imagine that with this dot dot

                dot state that essentially gets changed at runtime into something like this.

                So again with the dot dot dot state we take all the values out of state which is red green and blue

                and we essentially copy paste them into this new object that includes the red property.

                But now we've redefined red to the right hand side of the existing one.

                When we redefine a new property like so later on INSIDE AN OBJECT it overwrite the existing one.

                So essentially this red of 0 right here gets deleted and we end up with just green of zero blue of 0

                and red of the new value.

                So that's what's really going on with that syntax */

                            /* From our reducer function.

                            So whenever we call this reduce our function or whenever it gets called by react automatically in every

                            scenario no matter what we are always returning a new object to be used as our state.*/
        case 'green':
            return { ...state, green: state.green + action.amount};
        case 'blue':
            return { ...state, blue: state.blue + action.amount};
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
            onIncrease={() => dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT })} 
            onDecrease={() => dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT }) } 
            color="Red"
            />
            <ColorCounter 
            onIncrease = { () => dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT })} 
            onDecrease = { () =>  dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT }) } 
            color="Green"
            />
            <ColorCounter 
            onIncrease = { () => dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT })} 
            onDecrease = { () => dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT }) } 
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