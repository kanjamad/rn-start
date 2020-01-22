import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

// const ImageDetail = ({imageSoure, title, imageScore}) => {
const ImageDetail = (props) => {
    // console.log(props);
    return(
        <View>
            {/* <Image source={require('../../assets/beach.jpg')} /> */}
            {/* <Image source={imageSoure} />
            <Text>{title}</Text>
            <Text>Image score - {imageScore}</Text> */}
            <Image source={props.imageSoure} />
            <Text>{props.title}</Text>
            <Text>Image score - {props.imageScore}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageDetail;