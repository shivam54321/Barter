import React,{Component} from 'react';
import {View,Text,StyleSheet,FlatList,TouchableOpacity, } from 'react-native';


export default class RecieverDetailScreen extends Component{
constructor(props){
super(props);
this.state={
userId : firebase.auth().currentUser.email,
recieverId : this.props.navigation.getParam('details') ["user_id"],
requestID : this.props.navigation.getParam('details') ["request_id"],
bookName : this.props.navigation.getParam('details')["book_name"],
reason_for_requesting     : this.props.navigation.getParam('details')["reason_to_request"],
recieverName    : '',
recieverContact : '',
recieverAddress : '',
recieverRequestDocId : ''
}
}

getRecieverDetails(){
db.collection('users').where('email_id ' , '==',this.state.recieverId ).get()
.then(snapshot=>{
snapshot.forEach(doc=>{
this.setState({
recieverName : doc.data().first_name,
recieverContact : doc.data().contact,
recieverAddress : doc.data().address,
})
})
});

 db.collection('requested_books').where('request_id', '==',this.state,requestId).ger()  
 .then(snapshot=>{   
  snapshot.forEach(doc=>{  
   this.setState({recieverRequestDocId: doc.id}) 
  })
}) 
}

getUserDetails=(userId)=>{
db.collection("users").where('email_id','==', userId).get()
.then((snapshot)=>{
snapshot.forEach((doc)=>{
 this.setState({   
userName :doc.data().first_name+" " + doc.data().last_name
 })
})
})
}

updateItemStatus=()=>{
    db.collection('all_donations').add({
        "book_name"           : this.state.bookName,
        "request_id"          : this.state.requestId,
        "requested_by"        : this.state.recieverName,
        "donor_id"            : this.state.userId,
        "request_status"      :  "Donor Interested"
      })
    }

addNotification=()=>{
var message = this.state.userName + "has shown intrest in donating the book"
db.collection("all_notifications").add({
"targeted_user_id"  : this.state.recieverId,
"donor_id"          : this.state.userId,
"request_id"        : this.state.requestId,
"book_name"         : this.state.bookName,
"date"              : firebase.firestore.fieldValue.serverTimestamp(),
"notification_status" : "unread",
"message"           : message
})
}


componentDidMount(){
this.getRecieverDetails()
this.getUserDetails(this.state.usderId)
}




render(){
return(
<View>
  
</View>




)

}

}
