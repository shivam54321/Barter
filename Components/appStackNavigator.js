import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import BookDonationScreen from './screens/BookDonationScreen';
import RecieverDetailScreen from './screens/RecieverDetailScreen';

export const AppStackNavigator = createStackNavigator ({
BookDonateList: {
screen : BookDonateScreen,
navigationOptions:{
headerShown : false

}
},

RecieverDetails : {
    screen : RecieverDetailScreen,
navigationOptions:{
headerShown : false

}
},
},


{
  initialRouteName: 'BookDonateList'
}


);