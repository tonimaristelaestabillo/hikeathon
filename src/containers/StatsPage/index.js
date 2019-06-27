import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import { TabMenu } from '../../components';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class StatsPage extends Component {


    render() {
        const { container, stats } = styles;

        return (
            <View style={container}>
                <ImageBackground style={stats} source={require('../../assets/graphs.png')} />
                <TabMenu navigation={this.props.navigation} />
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    stats: {
        flex: 1,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        resizeMode: 'contain'
    }
})


export default (StatsPage);