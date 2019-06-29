import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import {
    Foundation,
    Ionicons
} from '@expo/vector-icons';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class DestinationPage extends Component {


    render() {

        const {
            container,
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
            carouselContainer,
            carouselTitle,
            carouselDescription
        } = styles;

        const { about, difficulty, duration, height, image, location, name, water, temperature } = this.props.navigation.getParam('destination');

        const details = [
            {
                title: 'ABOUT',
                description: about
            },
            {
                title: 'LOCATION',
                description: `Location ${location} \n MASL ${height}`
            },
            {
                title: 'DIFFICULTY',
                description: `Difficulty Level ${difficulty}/10 
                   \n Hike Duration ${duration} 
                   \n Water Load ${water}`
            }
        ];


        return (
            <View style={container}>
                <View style={cardDetailsContainer} >
                    <ImageBackground style={cardImage} source={{ uri: image }}>
                        <View style={cardOverlay} />
                        <View style={{ marginTop: 20 }}>
                            <TouchableWithoutFeedback
                                onPress={() => {
                                    this.props.navigation.goBack();
                                }}>
                                <Ionicons name="ios-arrow-back" style={cardIcon} />
                            </TouchableWithoutFeedback>

                        </View>
                        <View style={cardDetailsContainer}>
                            <View style={cardDescription} >
                                <Foundation name="mountains" style={cardIcon} />
                                <Text style={cardTitle}> {name}</Text>
                                <Text style={cardHeight}> {height}m</Text>
                            </View>
                            <View style={cardAttribute}>
                                <Text style={cardCelsius}> {temperature}</Text>
                                <Text style={cardDegree}>°</Text>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                <View
                    style={styles.scrollContainer}
                >
                    <ScrollView
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                    >
                        {details.map(({ title, description }) => (
                            <View key={title} style={carouselContainer}>
                                <Text style={carouselTitle}> {title}</Text>
                                <Text style={carouselDescription}> {description}</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>
            </View >
        )
    }
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#050505'
    },
    cardDetailsContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    cardImage: {
        flex: 1,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT / 2,
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
        color: 'rgba(171, 183, 183, 1)',
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
        color: '#e4e9ed'
    },
    //Scroll
    scrollContainer: {
        // flexDirection: 'row',
        margin: 20,
        marginLeft: 10,
        height: SCREEN_HEIGHT / 2,
    },
    carouselContainer: {
        alignSelf: 'center',
        width: SCREEN_WIDTH * 0.9,
        margin: 20,
        marginLeft: 10,
        backgroundColor: '#121111',
        height: SCREEN_HEIGHT / 4,
        shadowColor: "#1f262a",
        shadowOffset: {
            width: 0,
            height: 50,
        },
        shadowOpacity: 0.25,
        shadowRadius: 50,
        elevation: 5,
        borderRadius: 5,
        padding: 10
    },
    carouselTitle: {
        fontSize: 20,
        color: '#6c7a89',
        fontFamily: 'Avenir',
        padding: 10
    },
    carouselDescription: {
        fontSize: 12,
        color: 'rgba(171, 183, 183, 1)',
        fontFamily: 'Avenir',
        padding: 10,
        lineHeight: 20
    },
    carouselImage: {
        flex: 1,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT / 2,
        resizeMode: 'stretch'
    },
})



export default DestinationPage;