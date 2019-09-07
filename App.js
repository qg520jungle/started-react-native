import React from 'react';
import AppStackNavigator from './AppNavigarots';
import {createAppContainer, createStackNavigator} from 'react-navigation'; // Version can be specified in package.json
const Stacks = createStackNavigator(AppStackNavigator);

const AppContainer = createAppContainer(Stacks);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
