import * as React from 'react';
import { View, StyleSheet, Dimensions, SafeAreaView, TouchableOpacity, Text, Image } from 'react-native';
import { SceneMap } from 'react-native-tab-view';
import { Card } from 'react-native-elements';

import menubar from './main/assets/images/menubar.png';
import avatar from './main/assets/images/avatar3.jpg';
import attendance from './main/assets/images/attendance.png';
import leave from './main/assets/images/leave.png';
import punchinout from './main/assets/images/punchinout.png';


const AttendanceRoute = () => (
   <View style={[styles.scene, { backgroundColor: 'white' }]} />
);

const LeaveRoute = () => (
   <View style={[styles.scene, { backgroundColor: 'white' }]} />
);

const EditRoute = () => (
   <View style={[styles.scene, { backgroundColor: 'white' }]} />
);

const initialLayout = { width: Dimensions.get('window').width };

const renderScene = SceneMap({
   Attendance: AttendanceRoute,
   Leave: LeaveRoute,
   Edit: EditRoute,
});

export default function HomeScreen() {
   const [index, setIndex] = React.useState(0);
   const [routes] = React.useState([
      { key: 'Attendance', title: 'Attendance' },
      { key: 'Leave', title: 'Leave' },
      { key: 'Edit', title: 'Edit' },
   ]);

   return (
      <><SafeAreaView>
         <View style={{ flexDirection: 'row', backgroundColor: "gray" }}>
            <View style={[{ width: "16%", margin: 10, backgroundColor: "" }]}>
               <TouchableOpacity onPress={() => { }}><Image
                  source={menubar}
                  style={{
                     width: 30,
                     height: 30,
                     marginVertical: 10,
                     marginLeft: 5,
                     marginRight: 10
                  }}
               />
               </TouchableOpacity>


            </View>

            <Text style={{ backgroundColor: "", fontSize: 30, padding: 10, marginTop: 0 }}>Dashboard</Text>

            <Image
               style={{
                  width: 65,
                  height: 65,
                  borderRadius: 65 / 2,
                  overflow: "hidden",
                  borderWidth: 3,
                  borderColor: "grey",
                  marginVertical: 10,
                  marginLeft: "auto",
                  marginRight: 10
               }}
               source={avatar}
            />
         </View>


         <View >
            <TouchableOpacity onPress={() => { alert("this is attendance ")  }}>
               
               <Card style={styles.card}>
                  <View style={{flexDirection:"row"}}><Image
                  source={attendance}
                  style={{
                     width: 30,
                     height: 30,
                     marginVertical: 10,
                     marginLeft: 5,
                     marginRight: 10
                  }}
               />
                  
               <Text style={{fontSize:24 ,marginLeft:1,marginTop:10}}>
                     Attendance
                  </Text>
                  </View>
               </Card>
            </TouchableOpacity>
            </View>
            <View>

            <TouchableOpacity onPress={() => { alert("this is leave ") }}>
               <Card style={styles.card}>
               <View style={{flexDirection:"row"}}><Image
                  source={leave}
                  style={{
                     width: 30,
                     height: 30,
                     marginVertical: 10,
                     marginLeft: 5,
                     marginRight: 10
                  }}
               />
                  <Text style={{fontSize:24 ,marginLeft:1,marginTop:10}}>
                     Leave
                  </Text>
                  </View>
               </Card>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { alert("this is PunchIn/out ") }}>
               <Card style={styles.card}>
               <View style={{flexDirection:"row"}}>
               <Image
                  source={punchinout}
                  style={{
                     width: 30,
                     height: 30,
                     marginVertical: 10,
                     marginLeft: 5,
                     marginRight: 10
                  }}
               />
                  <Text style={{fontSize:24 ,marginLeft:1,marginTop:10}}>
                     PunchIn/out
                  </Text>
                  </View>
               </Card>
            </TouchableOpacity>


         </View>

      </SafeAreaView>

         {/* <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            style={styles.tabview} /> */}
      </>

   );
};

const styles = StyleSheet.create({
   tabview: {
      marginTop: 0,
      //backgroundColor:"white",
      //color:'black',

   },
   scene: {
      flex: 1,
      //backgroundColor:"white",
      // color:'black',
   },
   card:{
      flex:1,
      flexDirection:"row",
   }
});