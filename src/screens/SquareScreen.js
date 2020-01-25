import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const setColor = (color, change) =>{
        // color === 'red', 'green', 'blue'
        // change === +15, -15

        switch (color){
            case 'red':
                // A ternary Expression
                    // a Turner expression is going to essentially check one statement and then
                    // if that statement evaluates to a truth you value it will run some immediate statement like in this case return.
                    // Otherwise it will run some other statement like set red.
                        // So essentially ternary is going to do exactly what we have with our if statement right here already.
                        // But it's just going to kind of condense down this logic
                red + change > 255 || red +change < 0 ? null : setRed(red + change);
                            /* so to do so I would write out red plus change greater than two fifty five 
                            or read plus change less than zero.
                            And here 's where the ternary comes in we'll put in a question mark? like so the question mark means that
                            this is going to be the expression we want to run.
                            If all this evaluates to a truth we value unfortunately we cannot
                            return directly from a ternary statement.
                            So instead we 're just going to evaluate this expression to null like so that essentially means don't do anything.*/
                            /* otherwise.
                            So I'll put a colon :  in there and that means if this is flasy then do this.
                            And in this case I want to update red by calling set red with red plus change*/
                // --------------------------
                // If statment
                            // if(red + change > 255 || red + change < 0){
                            //     return;
                            // }else{
                            //     setRed(red + change);
                            // }
                return;
        }
    };


    return (
        <View>
            <ColorCounter 
            onIncrease={() =>setColor('red', COLOR_INCREMENT)} 
            onDecrease={() =>setColor('red', -1 * COLOR_INCREMENT)} 
            color="Red"
            />
            <ColorCounter 
            onIncrease = { () => setGreen(green +COLOR_INCREMENT)}
            onDecrease = { () => setGreen(green -COLOR_INCREMENT)}
            color="Green"
            />
            <ColorCounter 
            onIncrease = { () => setBlue(blue +COLOR_INCREMENT)}
            onDecrease = { () => setBlue(blue -COLOR_INCREMENT)}
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