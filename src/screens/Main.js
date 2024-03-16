import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import Users from './Users';
import Setting from './Setting';

const Main = () => {
    const [selectedTab,setSelectedTab] = useState(0);
  return (
    <>
    <View style={[styles.container]}>
        {selectedTab == 0 ? <Users /> : <Setting />}
        <View style={[styles.bottomTab]}>
            <TouchableOpacity style={[styles.tab]} onPress={()=>setSelectedTab(0)}>
                <Icon name="chatbox-ellipses" style={[styles.tabIcon,{color : selectedTab ==  0?"#fff":'gray'}]} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.tab]} onPress={()=>setSelectedTab(1)}>
                <Icon name="settings" style={[styles.tabIcon,{color : selectedTab ==  1?"#fff":'gray'}]} />
            </TouchableOpacity>
        </View>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:'#fff'
    },
    bottomTab:{
        position:'absolute',
        bottom:0,
        height:70,
        flexDirection:'row',
        width:'100%',
        backgroundColor:'purple',
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    tab:{
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:'50%'
    },
    tabIcon:{
        height:30,
        width:30,
        fontSize:30,
        color:'#fff'
    }
})
export default Main
