import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

// const ImageDetail = (props) => {
const ImageDetail = ({ imageSoure, title, imageScore }) => {
    // console.log(props);
    return(
        <View>
            {/* <Image source={require('../../assets/beach.jpg')} /> */}
            {/* <Image source={props.imageSoure} />
            <Text>{props.title}</Text>
            <Text>Image score - {props.imageScore}</Text> */}
            <Image source={imageSoure} />
            <Text>{title}</Text>
            <Text>Image score - {imageScore}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageDetail;