import React, { useState } from "react";
import { StyleSheet, Text, View ,TouchableOpacity,Image ,ImageBackground  } from 'react-native';
import { scaleFont } from "../ScaleSize";
import { useNavigation} from 'react-navigation-hooks'

export default function BottomNavigator(){
    return(
        <View style={styles.container}>
           
            <View style ={{
                alignSelf:'flex-end',
                bottom: 1,
                position:'absolute',
                height:'55%',
                width:'100%',flexDirection :'row',justifyContent:'space-around',backgroundColor:'#4076CE'}}>
                <TouchableOpacity style={[styles.iconContainer,{marginLeft:'5%'}]}>
                    <Image 
                        source={require("../images/setting.png")}
                        style={styles.icon}    
                    />
                    <Text style ={styles.iconText}>Prospek</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer}>
                    <Image 
                        source={require("../images/setting.png")}
                        style={styles.icon}    
                    />
                    <Text style ={styles.iconText}>Prospek</Text>
                </TouchableOpacity>
                <View style={{flex : 0.2}}>
                    {/* <Image 
                        source={require("../images/home.png")}
                        style={styles.icon}    
                    /> */}
                </View>
                <TouchableOpacity style={styles.iconContainer}>
                    <Image 
                        source={require("../images/setting.png")}
                        style={styles.icon}    
                    />
                    <Text style ={styles.iconText}>Prospek</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.iconContainer,{marginRight:'5%'}]}>
                    <Image 
                        source={require("../images/setting.png")}
                        style={styles.icon}    
                    />
                    <Text style ={styles.iconText}>Prospek</Text>
                </TouchableOpacity>
            </View>
            {/* <View style={{}}> */}
                <TouchableOpacity style={{borderWidth:1,borderColor :'blue',borderRadius :100,alignSelf:'center',backgroundColor:'blue'}}>
                        <Image 
                            source={require("../images/home.png")}
                            style={styles.icon}    
                        />
                </TouchableOpacity>
            {/* </View> */}
            
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1 ,
        flexDirection :'column',
        justifyContent:'space-around',
        // backgroundColor:'yellow'

    },
    iconContainer:{
        flexDirection:'column',
        alignItems:'center',
        alignSelf:'center',
        flex :0.15,
        marginBottom : '3%'
    },
    iconText : {
        fontSize : scaleFont(10),
        color:'white',
    },
    icon : {
        width : scaleFont(50),
        height: scaleFont(50),
        resizeMode: 'center',
    }
})
