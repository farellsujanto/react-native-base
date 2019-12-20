           
import React, { useState } from "react";
import { StyleSheet, Text, View ,TouchableOpacity,Image ,ImageBackground  } from 'react-native';
import { scaleFont } from "../ScaleSize";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { useNavigation} from 'react-navigation-hooks'
import CheckBox from '@react-native-community/checkbox';

export default function FormPermohonan(){
    const [page,setPage] = useState('1');
    const { navigate } = useNavigation();

    function Dot(props){
        
        return (
            <TouchableOpacity onPress = {()=> setPage(props.Page)}>
                <View style = {styles.dot}></View>
            </TouchableOpacity>
        )
    }
    function Page1(){
        return(
            <View style={styles.page}>
                <View style={{margin :scaleFont(15)}}>
                    <Text style ={styles.pageTitleText}>Pekerjaan</Text>
                    <View style = {styles.page1Row}>
                        <TouchableOpacity style={styles.page1Check}>
                            <CheckBox
                                value={true}
                                disabled={false}
                            />
                            <Text style = {{fontWeight : 'bold', color :'#4076CE'}}>Peg. Negeri</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.page1Check}>
                            <CheckBox
                                value={true}
                                disabled={false}
                            />
                            <Text style = {{fontWeight : 'bold', color :'#4076CE'}}>Kar. Swasta</Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {styles.page1Row}>
                        <TouchableOpacity style={styles.page1Check}>
                            <CheckBox
                                value={true}
                                disabled={false}
                            />
                            <Text style = {{fontWeight : 'bold', color :'#4076CE'}}>Wiraswasta</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.page1Check}>
                            <CheckBox
                                value={true}
                                disabled={false}
                            />
                            <Text style = {{fontWeight : 'bold', color :'#4076CE'}}>Lainnya</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </View>
        )
    }
    function Page2(){
        return (
            <View style = {styles.page}>
                <View style={{margin :scaleFont(15)}}>
                    <Text style ={[styles.pageTitleText,{marginBottom : scaleFont(10)}]}>Total Pendapatan</Text>
                    <Text style ={styles.pageTitleText}>Pendapatan Pokok</Text>
                    <View style={styles.page2Row}>
                        <Text style ={styles.page2Rp}>Rp</Text>
                        <TextInput 
                            style ={styles.page2TextInput}
                            keyboardType='numeric'
                        />
                    </View>
                    <Text style ={styles.pageTitleText}>Pendapatan Suami Istri</Text>
                    <View style={styles.page2Row}>
                        <Text style ={styles.page2Rp}>Rp</Text>
                        <TextInput 
                            style ={styles.page2TextInput}
                            keyboardType='numeric'
                        />
                    </View>
                    <Text style ={styles.pageTitleText}>Pendapatan Lainnya</Text>
                    <View style={styles.page2Row}>
                        <Text style ={styles.page2Rp}>Rp</Text>
                        <TextInput 
                            style ={styles.page2TextInput}
                            keyboardType='numeric'
                        />
                    </View>
                    <Text style ={styles.pageTitleText}>Pendapatan Lainnya</Text>
                    <View style={styles.page2Row}>
                        <Text style ={styles.page2Rp}>Rp</Text>
                        <TextInput 
                            style ={styles.page2TextInput}
                            keyboardType='numeric'
                        />
                    </View>
                    <Text style ={[styles.pageTitleText,{color: '#4076CE'}]}>Jumlah Pendapatan</Text>
                    <View style={styles.page2Row}>
                        <Text style ={styles.page2Rp}>Rp</Text>
                        <TextInput 
                            style ={styles.page2TextInput}
                            keyboardType='numeric'
                        />
                    </View>
                </View>
            </View>
        )
    }
    function Page3(){
        return (
            <View style ={[styles.page,{padding :scaleFont(20)}]}>
                <View style = {styles.page3ButtonWrap}>
                    <TouchableOpacity style ={{backgroundColor: '#4076CE',flexDirection :'row' , alignItems :'center' ,padding:scaleFont(10),borderRadius : 10}}>
                        <Text style ={{color :'white' , fontSize : scaleFont(15)}}>Tambahkan Foto</Text> 
                        <Image 
                            source={require("../images/plus_white.png")}
                            style={{backgroundColor: '#4076CE',height : scaleFont(20),width : scaleFont(20) , marginRight : scaleFont(10)}}    
                        />
                    </TouchableOpacity>
                </View>
                <View style = {styles.page3ButtonWrap}>
                    <TouchableOpacity style ={{
                        backgroundColor: 'white',flexDirection :'row' , alignItems :'center',padding:scaleFont(10),borderRadius : 10 ,borderColor : '#4076CE',borderWidth:1}}>
                        <Text style ={{color :'#4076CE' , fontSize : scaleFont(15)}}>Tambahkan Jaminan Lainnya</Text> 
                        <Image 
                            source={require("../images/plus_blue.png")}
                            style={{height : scaleFont(20),width : scaleFont(20) , marginRight : scaleFont(10)}}    
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    function Page4(){
        return (
            <View style ={styles.page}>
                    <Text>PAGE 4 </Text>
            </View>
        )
    }
    function Page5(){
        return (
            <View style ={[styles.page,{elevation : 0}]}>
                <Text style = {[styles.pageTitleText,{color : 'black',marginBottom : '5%'}]}>Jaminan Kredit</Text>
                <View style ={styles.page5Row}>
                    <View style ={styles.page5LeftSide}>
                        <Text style = {styles.page5LeftCount}>1</Text>
                        <Text style = {styles.page5LeftText}>Jaminan</Text>
                    </View>
                    <TouchableOpacity style ={styles.page5Button}>
                        <Text style ={styles.page5ButtonText}>Kendaraan Bermotor</Text>
                        <Image 
                            source={require("../images/plus_filled.png")}
                            style={styles.page5ButtonIcon}    
                        />
                    </TouchableOpacity>
                </View>
                <View style ={styles.page5Row}>
                    <View style ={styles.page5LeftSide}>
                        <Text style = {styles.page5LeftCount}>1</Text>
                        <Text style = {styles.page5LeftText}>Jaminan</Text>
                    </View>
                    <TouchableOpacity style ={styles.page5Button}>
                        <Text style ={styles.page5ButtonText}>Tanah dan/atau bangunan</Text>
                        <Image 
                            source={require("../images/plus_filled.png")}
                            style={styles.page5ButtonIcon}    
                        />
                    </TouchableOpacity>
                </View>
                <View style ={styles.page5Row}>
                    <View style ={styles.page5LeftSide}>
                        <Text style = {styles.page5LeftCount}></Text>
                        <Text style = {styles.page5LeftText}></Text>
                    </View>
                    <TouchableOpacity style ={styles.page5Button}>
                        <Text style ={styles.page5ButtonText}>Los/Kios Pasar</Text>
                        <Image 
                            source={require("../images/plus_filled.png")}
                            style={styles.page5ButtonIcon}    
                        />
                    </TouchableOpacity>
                </View>
                <View style ={styles.page5Row}>
                    <View style ={styles.page5LeftSide}>
                        <Text style = {styles.page5LeftCount}></Text>
                        <Text style = {styles.page5LeftText}></Text>
                    </View>
                    <TouchableOpacity style ={styles.page5Button}>
                        <Text style ={styles.page5ButtonText}>Tabungan/Deposito</Text>
                        <Image 
                            source={require("../images/plus_filled.png")}
                            style={styles.page5ButtonIcon}    
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    
    return (
    <View style = {styles.container}>
            <TouchableOpacity 
                onPress = {()=> navigate('MainMenu') }
                style ={styles.topButton}>
                <Image 
                    source={require("../images/goback.png")}
                    style={{height : scaleFont(35),width : scaleFont(35) , marginRight : scaleFont(10)}}    
                />
                <Text style ={{fontSize : scaleFont(15) , color : '#4076CE' , fontWeight :'bold'}} > 
                    Back
                </Text>
            </TouchableOpacity>
        <View style = {styles.titleBoxContainer}>
            <View style ={styles.titleBoxRow}> 
                <Image
                    source={require("../images/form-approve.png")}
                    style={[styles.iconStyle]}    
                />
                <Text style = {{marginLeft :'10%',fontSize : scaleFont(18),color : 'white', marginTop:'10%'}}>Form Permohonan{"\n"}Pengajuan Pinjaman</Text>
            </View>
        </View>
        <View style = {styles.stepPage}>
            <Text style ={{fontSize : scaleFont(15)}}>Step {page} / 5</Text> 
            <View style={styles.dotContainer}>
                <Dot Page ='1'/>                
                <Dot Page ='2'/>                
                <Dot Page ='3'/>                
                <Dot Page ='4'/>                
                <Dot Page ='5'/>                
                
            </View>
        </View>
            {
                page=='1' ? <Page1/> : 
                page=='2' ? <Page2/> : 
                page=='3' ? <Page3/> : 
                page=='4' ? <Page4/> : 
                page=='5' ? <Page5/> : 
                null
            }
    </View>
    )
}
const styles = StyleSheet.create({
    container : {
        flex: 1 ,
        flexDirection :'column'
    },
    topButton: {
        flexDirection : 'row',
        justifyContent :'flex-start',
        alignItems : 'center',
        marginHorizontal:'10%',
        marginVertical:scaleFont(10),
    },
    titleBoxContainer : {
        // flex:0.15,
        height:'15%',
        marginHorizontal :'10%',
        backgroundColor : '#4076CE',
        borderRadius : 15,
        // marginTop:'5%',
        flexDirection : 'row',
        justifyContent : 'flex-start'
    },
    titleBoxRow : {
        flexDirection : 'row',
    },
    iconStyle : {
        height: '100%',
        width: '20%',
        resizeMode : 'center'
    },
    stepPage : {
        flexDirection : 'row',
        marginTop : scaleFont(10),
        marginHorizontal : '10%',
        justifyContent : 'space-between'

    },
    dotContainer : {
        flexDirection :'row',
    },
    dot: {
        width: scaleFont(10),
        height: scaleFont(10),
        borderRadius: 100,
        marginHorizontal : scaleFont(2),
        backgroundColor: '#4076CE',
      },
    dotActive: {
        backgroundColor: '#4076CE',
      },
    dotInactive: {
        backgroundColor: 'gray',
      },
    page :{
        elevation: 2,
        borderRadius : 1,
        marginHorizontal :'10%',
        marginTop : '5%',
        flexDirection : 'column'
    },
    pageTitleText : {
        fontSize : scaleFont(15),
        fontWeight :'bold',
        color:'gray'
    },
    page1Row : {
        flexDirection : 'row' , 
        justifyContent: 'flex-start'
    }, 
    page1Check :{
        flexDirection : 'row' ,
        alignItems:'center',
        width :'50%'
    },
    page2Row :{
        flexDirection : 'row',
        alignItems : 'center'
    },
    page2Rp :{
        fontWeight : 'bold',
        color: '#4076CE' ,
        fontSize :scaleFont(15)
    },
    page2TextInput:{
        borderBottomWidth : 0.5 , 
        width : '90%',
        fontSize :scaleFont(15)
    },
    page3ButtonWrap :{
        justifyContent: 'flex-start', 
        flexDirection: 'row',
        marginBottom :scaleFont(10)
    },
    page4 :{

    },
    page5Row : {
        flexDirection : 'row', 
        marginBottom : scaleFont(15) 
    },
    page5Button :{
        flexDirection : 'row',
        alignItems :'center',
        justifyContent : 'space-around' , 
        width :'80%',
        elevation : 5   ,
        borderRadius : 10,
        backgroundColor:'white'
    },
    page5ButtonText : {
        fontWeight :'bold', 
        color :'#4076CE',
        width :'80%',
        marginLeft :'10%'
    },
    page5ButtonIcon : {
        height : scaleFont(20),
        width : scaleFont(20) , 
        marginRight : scaleFont(10),
    },
    page5LeftSide : {
        width :'20%', 
        alignItems :'center'
    },
    page5LeftCount :{
        alignSelf:'center',
        fontSize:scaleFont(25),
        fontWeight :'bold', 
        color :'#4076CE'
    },
    page5LeftText:{
        fontWeight : 'bold' , 
        color :'#4076CE', 
        fontSize : scaleFont(10)
    },
    
})