import Rect,{Component} from 'react';
import {View, StyleSheet, Text, Flatlist, TouchableOpacity } from 'react-native';
import {DrawerItems} from 'react-navigation-drawer'
import firebase from 'firebase';


export default class customSideBarMenu extends Component{



render(){
return(
<View style={{flex:1}}>
<View style={StyleSheet.drawerItemsContainer}>
<DrawerItems {...this.props}/>
</View>
<View style={StyleSheet.logOutContainer}>
<TouchableOpacity style={StyleSheet.logOutButton}
onPress = {() => {
this.props.navigation.navigate('WecomeScreen')
firebase.auth().signOut()
}}>
<Text>Log Out</Text>
</TouchableOpacity>
</View>
</View>
)
}    
}
var styles = StyleSheet.create({
  container : {
    flex:1
  },
  drawerItemsContainer:{
    flex:0.8
  },
  logOutContainer : {
    flex:0.2,
    justifyContent:'flex-end',
    paddingBottom:30
  },
  logOutButton : {
    height:30,
    width:'100%',
    justifyContent:'center',
    padding:10
  },
  logOutText:{
    fontSize: 30,
    fontWeight:'bold'
  }
})
