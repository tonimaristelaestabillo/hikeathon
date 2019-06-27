import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, ImageBackground, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabMenu } from '../../components';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class ProfilePage extends Component {


    constructor(props) {
        super(props);
        this.state = {
            name: 'Toni Estabillo',
            country: 'Philippines',
            occupation: 'Software Engineer'
        }

    }



    render() {
        const { container, dataContainer,
            profileBackground,
            inputField, inputLabel,
            actionIcon, actionLabel, actionContainer
        } = styles;

        return (
            <View style={styles.container}>
                <View>
                    <ImageBackground style={profileBackground} source={require('../../assets/profile.png')} >
                    </ImageBackground>
                </View>
                <View style={dataContainer}>
                    <Text style={inputLabel}> Name </Text>
                    <TextInput
                        style={inputField}
                        name="name"
                        onChangeText={(value) => this.setState({ name: value })}
                        value={this.state.name}
                    />
                    <Text style={inputLabel}> Country </Text>
                    <TextInput
                        style={inputField}
                        name="country"
                        onChangeText={(value) => this.setState({ country: value })}
                        value={this.state.country}
                    />
                    <Text style={inputLabel}>Occupation </Text>
                    <TextInput
                        style={inputField}
                        name="occupation"
                        onChangeText={(value) => this.setState({ occupation: value })}
                        value={this.state.occupation}
                    />
                </View>
                <View style={actionContainer}>
                    <Ionicons name="ios-walk" style={actionIcon} />
                    <Text style={actionLabel}> Start Hiking </Text>
                </View>

                <TabMenu navigation={this.props.navigation} />
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#050505'
    },
    dataContainer: {
        flex: 1,
        padding: 20
    },
    profileBackground: {
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT * 0.5
    },
    inputLabel: {
        fontSize: 15,
        letterSpacing: 1,
        color: '#ecf0f1',
        fontFamily: 'Avenir',
        fontWeight: '500'
    },
    inputField: {
        height: SCREEN_HEIGHT * 0.06,
        borderColor: 'transparent',
        borderWidth: 30,
        overflow: 'hidden',
        shadowColor: 'black',
        backgroundColor: '#1a1919',
        shadowRadius: 10,
        shadowOpacity: 1,
        borderWidth: 1,
        color: '#ffffff',
        borderRadius: 5
    },
    actionContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    actionIcon: {
        color: '#dadfe1',
        fontSize: 50
    },
    actionLabel: {
        color: '#dadfe1',
        fontFamily: 'Avenir',
        alignSelf: 'center',
        letterSpacing: 3,
        fontWeight: '500',
        fontSize: 20
    }

})


export default (ProfilePage);