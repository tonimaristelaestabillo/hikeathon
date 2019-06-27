import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Font } from 'expo';
import DashboardPage from './src/containers/DashboardPage';
import DestinationPage from './src/containers/DestinationPage';
import StatsPage from './src/containers/StatsPage';
import ProfilePage from './src/containers/ProfilePage';
import reducers from './src/reducers';
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));


export default class App extends Component {

  async componentDidMount() {
    await Font.loadAsync({
      Avenir: require('./src/assets/fonts/Avenir-Regular.ttf'),
      'Avenir-Medium': require('./src/assets/fonts/Avenir-Medium.ttf'),
      'Avenir-Heavy': require('./src/assets/fonts/Avenir-Heavy.ttf')
    });

  }




  render() {
    return (
      <Provider store={store}>
        <AppStack />
      </Provider>
    );
  }
}

const AppStack = createAppContainer(
  createStackNavigator(
    {
      DashboardPage: props => <DashboardPage {...props} />,
      DestinationPage: props => <DestinationPage {...props} />,
      StatsPage: props => <StatsPage {...props} />,
      ProfilePage: props => <ProfilePage {...props} />,
    },
    {
      headerMode: 'none',
      navigationOptions: {
        headerVisible: false,
      },
    },
  )

);

