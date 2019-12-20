
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { scaleFont } from "../ScaleSize";
import { Navigation } from 'react-native-navigation';

function TopActionContainer() {
    return (
        <View style={styles.topButtonsContainer}>
            <View>
                <Image
                    source={require("../images/logo-dummy.png")}
                    style={[styles.iconStyle]}
                />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={{ alignItems: 'center' }} >
                    <Image
                        source={require("../images/setting.png")}
                        style={[styles.iconStyle]}
                    />
                    <Text style={{ color: 'white', fontSize: scaleFont(8), fontWeight: 'bold' }}>Settings</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ alignItems: 'center' }}>
                    <Image
                        source={require("../images/logout.png")}
                        style={[styles.iconStyle]}
                    />
                    <Text style={{ color: 'white', fontSize: scaleFont(8), fontWeight: 'bold' }}>Logout</Text>

                </TouchableOpacity>
            </View>
        </View>
    );
}

function TopBackgroundImage() {
    return (
        <View
            style={{
                height: '30%',
                width: '100%',
                resizeMode: 'cover',
                position: 'absolute',
                overflow: 'hidden',
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20
            }}
        >
            <Image
                source={require("../images/bg.png")}
                style={{
                    resizeMode: 'cover',
                    height: '100%',
                    width: '100%',
                }}
            />
        </View>
    );
}

export default function MainMenu({componentId}) {

    const [fullname, setFullname] = useState('Test Name')
    const [title, setTitle] = useState('Marketing')
    const [address, setAddress] = useState('Kuningan , Jakarta')


    function navigateToSubmission() {
        Navigation.push(componentId, {
            component: {
                name: "StepOneScreen",
            },
        })
    }

    return (
        <SafeAreaView style={styles.container}>

            <TopBackgroundImage />

            <TopActionContainer />

            <View style={styles.userDetailContainer}>
                <View style={[styles.userDetailRow]}>
                    <Image
                        source={require("../images/ktp-dummy.jpeg")}
                        style={styles.userImage}
                    />
                    <View style={[styles.userDetailData]}>
                        <Text style={{ fontWeight: 'bold' }}>{fullname}</Text>
                        <Text style={{ fontSize: scaleFont(8) }}>{title}</Text>
                        <Text style={{ fontSize: scaleFont(8), fontWeight: 'bold' }}>{address}</Text>
                    </View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Details</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.separator}></View>
                <View style={[styles.userDetailRow]}>

                    <Image
                        source={require("../images/list.png")}
                        style={[styles.iconStyle]}
                    />
                    <View style={[styles.userDetailData]}>
                        <Text style={{ fontWeight: 'bold', }}>Total Prospek </Text>
                        <Text style={{ fontSize: scaleFont(15) }}>70</Text>
                    </View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Details</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.midButtonsContainer}>
                <TouchableOpacity
                    onPress={navigateToSubmission}
                    style={{ flexDirection: 'row', alignContent: 'center', paddingRight: scaleFont(15) }}>
                    <View
                        style={styles.midButton}>
                        <Image
                            source={require("../images/form-approve.png")}
                            style={[styles.iconStyle]}
                        />
                        <Text style={styles.midButtonText}>Lakukan {"\n"}Pengajuan</Text>
                    </View>
                    <View style={styles.midButtonIconContainer}>
                        <Image
                            source={require("../images/arrow.png")}
                            style={[styles.midButtonIcon]}
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ flexDirection: 'row', alignContent: 'center', paddingRight: scaleFont(15) }}>
                    <View style={styles.midButton}>
                        <Image
                            source={require("../images/prospect-user.png")}
                            style={[styles.iconStyle]}
                        />
                        <Text style={styles.midButtonText}>Pengajuan {"\n"}Prospek</Text>
                    </View>
                    <View style={styles.midButtonIconContainer}>
                        <Image
                            source={require("../images/arrow.png")}
                            style={[styles.midButtonIcon]}
                        />
                    </View>
                </TouchableOpacity>

            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        // alignContent: 'flex-end',
        // justifyContent: 'flex-end'
    },
    topButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: '10%',
        marginTop: '5%',
        width: '80%',
        top: 1
    },
    iconStyle: {
        height: scaleFont(40),
        width: scaleFont(40),
        resizeMode: 'center'
    },
    userDetailContainer: {
        height: 175,
        marginTop: 20,
        width: '80%',
        marginHorizontal: '10%',
        borderRadius: 10,
        elevation: 5,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    userDetailRow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    userDetailData: {
        flexDirection: 'column',
        width: '40%'
    },
    userImage: {
        height: scaleFont(40),
        width: scaleFont(40),
        resizeMode: 'center',
        borderRadius: 100,
        borderWidth: 1,
        borderColor: 'black',
        resizeMode: 'cover'
    },
    button: {
        backgroundColor: '#4076CE',
        marginVertical: scaleFont(15),
        paddingVertical: scaleFont(5),
        paddingHorizontal: scaleFont(15),
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: scaleFont(10)
    },
    midButtonsContainer: {
        flex: 0.4,
        height: 200,
        flexDirection: 'row',
        // marginHorizontal: '20%',
        justifyContent: 'space-between',
        alignSelf: 'center',

    },
    midButton: {
        flexDirection: 'row',
        backgroundColor: '#4076CE',
        alignItems: 'center',
        borderRadius: 5,
        height: '75%',
        alignSelf: 'center',
        paddingRight: scaleFont(20)
    },
    midButtonText: {
        fontWeight: 'bold',
        fontSize: scaleFont(12),
        color: 'white',
        alignSelf: 'center'
    },
    midButtonIconContainer: {
        elevation: 10,
        position: 'absolute',
        right: 1,
        borderRadius: 100,
        backgroundColor: '#4076CE',
        width: scaleFont(30),
        height: scaleFont(30),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    midButtonIcon: {
        resizeMode: 'cover',
        height: scaleFont(40),
        width: scaleFont(40),

    },
    midRoundButton: {
        backgroundColor: '#4076CE',
        height: scaleFont(25),
        width: scaleFont(25),
    },
    artikelSliderContainer: {
        flex: 0.7,
        backgroundColor: 'skyblue'
    },
    separator: {
        height: 0.5,
        alignItems: "stretch",
        borderWidth: 0.5,
        borderColor: "#A9A9A9",
        marginHorizontal: scaleFont(15),
        marginVertical: scaleFont(5)
    }

})
