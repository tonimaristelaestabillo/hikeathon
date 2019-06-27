import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import { Foundation } from '@expo/vector-icons';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;


const Card = ({ detail, type }) => {

    const { height, image, name, weatherTemp } = detail;

    const {
        cardDetailsContainer,
        cardDescription,
        cardImage,
        cardOverlay,
        cardTitle,
        cardAttribute,
        cardCelsius,
        cardDegree,
        cardHeight,
        cardIcon,
        bannerImage
    } = styles;

    return (
        <View>
            <ImageBackground style={type !== 'inner' ? cardImage : bannerImage} source={{ uri: image }}>
                <View style={cardOverlay} />
                <View style={cardDetailsContainer}>
                    <View style={cardDescription} >
                        <Foundation name="mountains" style={cardIcon} />
                        <Text style={cardTitle}> {name}</Text>
                        <Text style={cardHeight}> {height}m</Text>
                    </View>
                    <View style={cardAttribute}>
                        <Text style={cardCelsius}> {weatherTemp}</Text>
                        <Text style={cardDegree}>°</Text>
                    </View>
                </View>
            </ImageBackground>
        </View >
    )
}

const styles = StyleSheet.create({
    cardDetailsContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    cardImage: {
        flex: 1,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT / 3,
        resizeMode: 'contain'
    },
    bannerImage: {
        flex: 1,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT * 0.4,
        resizeMode: 'contain'
    },
    cardOverlay: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.6)',
        opacity: 0.9,
        shadowColor: 'rgba(46, 49, 49, 1)',
        shadowOffset: {
            width: SCREEN_WIDTH * 0.5,
            height: 0
        },
        shadowRadius: 50,
        shadowOpacity: 0.9
    },
    cardDescription: {
        flex: 0.75,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        margin: 10
    },
    cardAttribute: {
        flex: 0.25,
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop: 20
    },
    cardTitle: {
        fontSize: 28,
        letterSpacing: 1,
        color: '#ecf0f1',
        fontFamily: 'Avenir',
        fontWeight: '500'
    },
    cardHeight: {
        fontSize: 15,
        fontFamily: 'Avenir',
        color: 'rgba(149, 165, 166, 1)',
        textAlign: 'left',
        marginLeft: 5
    },
    cardCelsius: {
        fontSize: 50,
        color: 'rgba(171, 183, 183, 1)',
        fontFamily: 'Avenir',
        fontWeight: '300'
    },
    cardDegree: {
        fontSize: 25,
        color: '#cbcbcb'
    },
    cardIcon: {
        fontSize: 30,
        marginLeft: 7,
        color: 'rgba(108, 122, 137, 1)'
    }
})


export { Card }