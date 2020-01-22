import React from 'react'
import {Text, View, StyleSheet} from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail 
            title="Forest" 
            imageScore={9} 
            imageSoure={require('../../assets/forest.jpg')} />
            <ImageDetail title="Beach" imageScore={7} imageSoure={require('../../assets/beach.jpg')}/>
            <ImageDetail title="Mountain" imageScore={4} imageSoure={require('../../assets/mountain.jpg')}/>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageScreen;