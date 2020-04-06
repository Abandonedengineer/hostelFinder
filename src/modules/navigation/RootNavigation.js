import React from 'react';
import { Image, TouchableOpacity, Dimensions } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

import GalleryScreen from '../gallery/GalleryViewContainer';
import DetailsScreen from '../Details/DetailsScreen';
import Login from '../Login/Login';
import CreateProfile from '../Login/createProfile';
import SelectRoom from '../SelectRoom/SelectRoom';
import Booking from '../Booking/Booking';
import AddHostel from '../AddHostel/AddHostel';
import EditHostel from '../EditHostel/EditHostel';

// To use this screens please see the full version at https://reactnativestarter.com
// import ProfileScreen from '../containers/ProfileScreen';
// import ArticleScreen from '../containers/ArticleScreen';
// import ChatScreen from '../containers/chat/ChatScreen';
// import MessagesScreen from '../containers/chat/MessagesScreen';
// import ChartsScreen from '../containers/ChartsScreen';

import AvailableInFullVersion from '../availableInFullVersion/AvailableInFullVersionViewContainer';

import { colors, fonts } from '../../styles';

const { width } = Dimensions.get('window');

const headerBackground = require('../../../assets/images/topBarBg.png');

const stackNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        header: null,
        title: 'Login',
      },
    },
    Main: {
      screen: MainTabNavigator,
      navigationOptions: () => ({
        title: 'Hostel Finder',
        headerLeft: null,
        headerBackground: (
          <Image
            style={{
              flex: 1,
              width,
            }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
    },
    CreateProfile: {
      screen: CreateProfile,
      navigationOptions: {
        headerLeft: null,
        title: 'Create Profile',
        headerBackground: (
          <Image
            style={{
              flex: 1,
              width,
            }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      },
    },
    SelectRoom: {
      screen: SelectRoom,
      navigationOptions: {
        title: 'SelectRoom',
      },
    },
    Booking: {
      screen: Booking,
      navigationOptions: {
        title: 'Booking',
      },
    },
    AddHostel: {
      screen: AddHostel,
      navigationOptions: {
        title: 'Add Hostel',
      },
    },
    EditHostel: {
      screen: EditHostel,
      navigationOptions: {
        title: 'Edit Hostel',
      },
    },
    Profile: {
      screen: AvailableInFullVersion,
      navigationOptions: {
        header: null,
      },
    },
    Gallery: {
      screen: GalleryScreen,
      navigationOptions: {
        title: 'Gallery',
      },
    },
    Article: {
      screen: AvailableInFullVersion,
      navigationOptions: {
        header: null,
      },
    },
    Details: {
      screen: DetailsScreen,
      navigationOptions: {
        title: 'Details',
      },
    },
    Chat: {
      screen: AvailableInFullVersion,
      navigationOptions: {
        header: null,
      },
    },
    Messages: {
      screen: AvailableInFullVersion,
      navigationOptions: {
        header: null,
      },
    },
    Charts: {
      screen: AvailableInFullVersion,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    defaultNavigationOptions: () => ({
      titleStyle: {
        fontFamily: fonts.primaryLight,
      },
      headerStyle: {
        backgroundColor: colors.primary,
        borderBottomWidth: 0,
      },
      headerBackground: (
        <Image
          style={{ flex: 1 }}
          source={headerBackground}
          resizeMode="cover"
        />
      ),
      headerTitleStyle: {
        color: colors.white,
        fontFamily: fonts.primaryRegular,
      },
      headerTintColor: '#222222',
      headerLeft: props => (
        <TouchableOpacity
          onPress={props.onPress}
          style={{
            paddingLeft: 25,
          }}
        >
          <Image
            source={require('../../../assets/images/icons/arrow-back.png')}
            resizeMode="contain"
            style={{
              height: 20,
            }}
          />
        </TouchableOpacity>
      ),
    }),
  },
);

export default createAppContainer(stackNavigator);
