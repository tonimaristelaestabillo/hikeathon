import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { Ionicons, Foundation } from '@expo/vector-icons';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;


const TabMenu = ({ navigation }) => {

    return (
        <View style={styles.tabContainer}>
            <TouchableOpacity style={styles.tab}
                onPress={() => navigation.navigate('DashboardPage')}>
                <Foundation name="mountains" style={styles.tabIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.tab}
                onPress={() => navigation.navigate('StatsPage')}>
                <Ionicons name="ios-analytics" style={styles.tabIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.tab}
                onPress={() => navigation.navigate('ProfilePage')}>
                <Ionicons name="ios-person" style={styles.tabIcon} />
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    tabContainer: {
        backgroundColor: '#050505',
        alignContent: 'center',
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT * 0.075,
        flexDirection: 'row'
    },
    tab: {
        flex: 0.33,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabIcon: {
        fontSize: 20,
        color: "#ffffff"
    }
})


export { TabMenu }