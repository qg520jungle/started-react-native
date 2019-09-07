import React from 'react';
import {View, Text, Button, Platform, ScrollView, SafeAreaView} from 'react-native';
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
  StackActions,
  NavigationActions,
  DrawerItems,
} from 'react-navigation'; // Version can be specified in package.json
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from './source/pages/HomeScreen/HomeScreen';
import DetailsScreen from './source/pages/DetailsScreen/DetailsScreen';
import DetailsScreen2 from './source/pages/DetailsScreen/DetailsScreen2';
import DetailsScreen3 from './source/pages/DetailsScreen/DetailsScreen3';
import DetailsScreen4 from './source/pages/DetailsScreen/DetailsScreen4';
import DetailsScreen5 from './source/pages/DetailsScreen/DetailsScreen5';
import ModalScreen from './source/pages/ModalScreen/ModalScreen';

// const AuthStack = cr

const DrawerNav = createDrawerNavigator(
  {
    Details2: {
      screen: DetailsScreen2,
      navigationOptions: {
        drawerLabel: 'Details2',
        drawerIcon: ({tintColor}) => (
          <MaterialIcons name={'drafts'} size={24} style={{color: tintColor}} />
        ),
      },
    },
    Details3: {
      screen: DetailsScreen3,
      navigationOptions: {
        drawerLabel: 'Details3',
        drawerIcon: ({tintColor}) => (
          <MaterialIcons
            name={'move-to-inbox'}
            size={24}
            style={{color: tintColor}}
          />
        ),
      },
    },
  },
  {
    initialRouteName: 'Details2',
    contentOptions: {
      activeTintColor: '#e91e63',
    },
    contentComponent: (props) => (
      <ScrollView style={{backgroundColor: '#789', flex: 1}}>
        <SafeAreaView forceInset={{top: 'always', horizontal: 'never'}}>
          <DrawerItems {...props} />
        </SafeAreaView>
      </ScrollView>
    ),
  },
);

const AppTopNavigator = createMaterialTopTabNavigator(
  {
    Details: {
      screen: DetailsScreen,
      navigationOptions: {
        tabBarLabel: 'All',
      },
    },
    Details2: {
      screen: DetailsScreen2,
      navigationOptions: {
        tabBarLabel: 'IOS',
      },
    },
    Details3: {
      screen: DetailsScreen3,
      navigationOptions: {
        tabBarLabel: 'React',
      },
    },
    Details4: {
      screen: DetailsScreen4,
      navigationOptions: {
        tabBarLabel: 'React Native',
      },
    },
    Details5: {
      screen: DetailsScreen5,
      navigationOptions: {
        tabBarLabel: 'Devio',
      },
    },
  },
  {
    tabBarOptions: {
      tabStyle: {mindWidth: 50},
      upperCaseLabel: false, // 是否大写 默认true
      scrollEnabled: true, // 是否支持 选项卡滚动 默认false
      style: {
        backgroundColor: '#678', // TabBar 的背景色
      },
      indicatorStyle: {
        height: 2,
        backgroundColor: 'white',
      }, // 标签指示器的样式
      labelStyle: {
        fontSize: 13,
        marginTop: 6,
        marginBottom: 6,
      },
    },
  },
);
const AppBottomNavigator = createMaterialBottomTabNavigator(
  {
    Details: {
      screen: DetailsScreen,
      navigationOptions: {
        tabBarLabel: '最热',
        tabBarIcon: ({tintColor, focused}) => (
          <Ionicons name={'ios-home'} size={26} style={{color: tintColor}} />
        ),
      },
    },
    Details2: {
      screen: DetailsScreen2,
      navigationOptions: {
        tabBarLabel: '趋势',
        tabBarIcon: ({tintColor, focused}) => (
          <Ionicons name={'ios-people'} size={26} style={{color: tintColor}} />
        ),
      },
    },
    Details3: {
      screen: DetailsScreen3,
      navigationOptions: {
        tabBarLabel: '收藏',
        tabBarIcon: ({tintColor, focused}) => (
          <Ionicons
            name={'ios-chatboxes'}
            size={26}
            style={{color: tintColor}}
          />
        ),
      },
    },
    Details4: {
      screen: DetailsScreen4,
      navigationOptions: {
        tabBarLabel: '我的',
        tabBarIcon: ({tintColor, focused}) => (
          <Ionicons
            name={'ios-aperture'}
            size={26}
            style={{color: tintColor}}
          />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff',
    },
  },
);

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
const AppStackNavigator = {
  Home: {
    screen: HomeScreen,
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: ({navigation}) => {
      // console.log(navigation);
      return {
        title: `${navigation.state.params.name}页面名`,
      };
    },
  },
  Details2: {
    screen: DetailsScreen2,
    navigationOptions: {
      title: 'This is Details2',
    },
  },
  Details3: {
    screen: DetailsScreen3,
    navigationOptions: props => {
      const {navigation} = props;
      const {state, setParams} = navigation;
      const {params} = state;
      return {
        title: `${params.name}页面名`,
        headerRight: (
          <Button
            title={params.mode === 'edit' ? '保存' : '编辑'}
            onPress={() =>
              setParams({
                mode: params.mode === 'edit' ? '' : 'edit',
              })
            }
          />
        ),
      };
    },
  },
  Bottom: {
    screen: AppBottomNavigator,
    navigationOptions: {
      title: 'BottomNavigator',
    },
  },
  Top: {
    screen: AppTopNavigator,
    navigationOptions: {
      title: 'TopNavigator',
    },
  },
  DrawerNav: {
    screen: DrawerNav,
    navigationOptions: {
      title: 'DrawerNav',
    },
  },
  // Details4: {
  //   screen: DetailsScreen4,
  //   navigationOptions: ({navigation}) => ({
  //     title: `${navigation.state.params.title}页面名`,
  //   }),
  // },
  // Details5: {
  //   screen: DetailsScreen5,
  //   navigationOptions: ({navigation}) => ({
  //     title: `${navigation.state.params.title}页面名`,
  //   }),
  // },
};

// const Tabs = createBottomTabNavigator({RootStack});
// const Tabs = createBottomTabNavigator(AppBottomNavigator);

export default AppStackNavigator;
