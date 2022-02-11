// import React from 'react';
// // import { StyleSheet, Text, View, Button } from 'react-native';

// export default class Dashboard extends React.Component {
//   render() {
//     return (
//       <View>
//         <Text>Dashboard</Text>
//       </View>
//     );
//   }
// }

import React, {Component} from 'react';  
import {View,Text} from 'react-native';  
import Icon from 'react-native-vector-icons/Ionicons';  


export default class Attendance extends Component{  
    render(){  
        return(  
            <View>  
                <Text>this is attendance screen</Text>  
            </View>  
        )  
    }  
}  
Attendance.navigationOptions={  
    tabBarIcon:({tintColor, focused})=>(  
        <Icon  
            name={focused ? 'ios-settings' : 'md-settings'}  
            color={tintColor}  
            size={25}  
        />  
    )  
}  
