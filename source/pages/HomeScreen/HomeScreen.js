import React from 'react';
import {View, Image, Text, Button, Platform} from 'react-native';
import {
  createAppContainer,
  createStackNavigator,
  StackActions,
  NavigationActions,
} from 'react-navigation';

class LogoTitle extends React.Component {
  render() {
    return (
      <Image source={require('./spiro.png')} style={{width: 30, height: 30}} />
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = ({navigation, navigationOptions}) => {
    const {params} = navigation.state;
    return {
      headerTitle: <LogoTitle />,
      headerRight: (
        <Button
          onPress={navigation.getParam('increaseCount')}
          title="+1"
          color={Platform.OS === 'ios' ? '#fff' : null}
        />
      ),
      headerLeft: (
        <Button
          onPress={() => navigation.navigate('MyModal')}
          title="Info"
          color="#fff"
        />
      ),
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({increaseCount: this._increaseCount});
  }

  state = {
    count: 0,
  };

  _increaseCount = () => {
    this.setState({count: this.state.count + 1});
  };

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
        <Text>Count: {this.state.count}</Text>
        <Button
          title="Go to Details"
          // onPress={() => this.props.navigation.push('Details')}
          onPress={() =>
            this.props.navigation.navigate('Details', {
              itemId: this.state.count,
              otherParam: 'First Details',
            })
          }
          // onPress={() => {
          //   this.props.navigation.dispatch(
          //     StackActions.reset({
          //       index: 0,
          //       actions: [NavigationActions.navigate({routeName: 'Details'})],
          //     }),
          //   );
          // }}
        />
      </View>
    );
  }
}

export default HomeScreen;
