import React, {component, TouchableOpacity} from 'react-native';
import {View,Stylesheet,Text,  TouchableOpacity,TextInput,Alert,KeyboardAvoidingView } from 'react-native'
import db from '../config' ;
import firebase from ' firebase';

export default class ItemRequestScreen extends component{
constructor(){
super();
this.state ={
userId : firebase.auth().currentUser.email,
ItemName:"",
reasonToRequest:""
}
}

createUniqeId(){
return Math.random().toString(36).substring(7);
}
addRequest =(bookName,reasonToRequest)=>{
var userId = this.state.userId
var randomRequestId = this.createUniqeId()
db.collection('requested_books').add({
"userid": userId,
"book_name":bookName,
"reason_to_request":reasonToRequest,
"request_id":randomRequestId,
})
this.setState({
ItemName:'',
reasonToRequest:''
})
return Alert.alert("Item Requested Sucessfully")
}
render(){
return(
  <View style={{flex:1}}>
  <MyHeader title="Request Book"/>
    <KeyboardAvoidingView style={styles.keyBoardStyle}>
      <TextInput
        style ={styles.formTextInput}
        placeholder={"enter item name"}
        onChangeText={(text)=>{
this.setState({
  ItemName:text
})
 }}
value={this.state.ItemName}
 />
<TextInput
 style ={[styles.formTextInput,{height:300}]}
multiline
numberOfLines ={8}
 placeholder={"Why do you need the Item"}
onChangeText ={(text)=>{
this.setState({
reasonToRequest:text
})
}}
value ={this.state.reasonToRequest}
/>
<TouchableOpacity
style={styles.button}
onPress={()=>{this.addRequest(this.state.ItemName,this.state.reasonToRequest)}}
>
 <Text>Request</Text>
</TouchableOpacity>
</KeyboardAvoidingView>
</View>
)
}
}

const styles = StyleSheet.create({
    keyBoardStyle : {
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },
    formTextInput:{
      width:"75%",
      height:35,
      alignSelf:'center',
      borderColor:'#ffab91',
      borderRadius:10,
      borderWidth:1,
      marginTop:20,
      padding:10,
    },
    button:{
      width:"75%",
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
      backgroundColor:"#ff5722",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
      elevation: 16,
      marginTop:20
      },
    }
  )
  
