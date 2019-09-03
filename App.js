import React from 'react';
import {View, Text, Button} from 'react-native';
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
  StackActions,
  NavigationActions,
} from 'react-navigation'; // Version can be specified in package.json
import HomeScreen from './source/pages/HomeScreen/HomeScreen';
import DetailsScreen from './source/pages/DetailsScreen/DetailsScreen';
import ModalScreen from './source/pages/ModalScreen/ModalScreen';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
    navigationOptions: {
      tabBarLabel: 'Home!',
    },
  },
);

const RootStack = createStackNavigator(
  {
    Main: {
      screen: AppNavigator,
    },
    MyModal: {
      screen: ModalScreen,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);
const AppBottomNavigator = {
  Home: {
    screen: HomeScreen,
  },
  Details: {
    screen: DetailsScreen,
  },
};

// const Tabs = createBottomTabNavigator({RootStack});
const Tabs = createBottomTabNavigator(AppBottomNavigator);

const AppContainer = createAppContainer(Tabs);
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
