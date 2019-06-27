import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { fetchMountains } from '../../actions';
import { Card, TabMenu } from '../../components';
import { TouchableOpacity } from 'react-native-gesture-handler';

class DashboardPage extends Component {

    componentDidMount() {
        this.props.fetchMountains();
    }

    handleDestination(mountain) {
        this.props.navigation.navigate('DestinationPage', {
            destination: mountain,
        });
    }

    renderMountains() {
        const mountainItem = this.props.mountains.map((mountain) => {
            return (
                <TouchableOpacity key={mountain.name} onPress={() => this.handleDestination(mountain)}>
                    <Card detail={mountain}></Card>
                </TouchableOpacity>

            );
        });
        return mountainItem;
    }

    render() {
        const { container } = styles;

        return (
            <View style={container}>
                <ScrollView>
                    {
                        this.renderMountains()
                    }
                </ScrollView>
                <TabMenu navigation={this.props.navigation} />
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

const mapStatetoProps = ({ travel }) => {
    const { mountains } = travel;

    return {
        mountains
    }
}



export default connect(mapStatetoProps, { fetchMountains })(DashboardPage);