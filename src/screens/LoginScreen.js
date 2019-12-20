import React, { useState, useEffect } from 'react';
import {
    StyleSheet, Text, View, TouchableOpacity, Alert, Image, ImageBackground, Keyboard
} from 'react-native';

import { scaleFont, getScreenWidth } from "../ScaleSize";

import {
    TextField,
    FilledTextField,
    OutlinedTextField,
} from 'react-native-material-textfield';

function LoginScreen() {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('')

    const [isKbShown, setIsKbShown] = useState(false);


    useEffect(() => {
        Keyboard.addListener(
            'keyboardDidShow',
            () => { setIsKbShown(true) }
        );
        Keyboard.addListener(
            'keyboardDidHide',
            () => { setIsKbShown(false) }
        );
    }, [])

    function signInButtonTapped() {

    }


    return (
        <ImageBackground style={styles.background} source={require("../images/bg.png")}>
            <View style={styles.container}>

                {
                    !isKbShown ?
                        (
                            <View style={{ flex: 1, alignSelf: 'center', justifyContent: 'center' }}>
                                <Image
                                    source={require("../images/logo-dummy.png")}
                                    style={{
                                        width: (getScreenWidth() / 5),
                                        resizeMode: 'contain'
                                    }}
                                />
                            </View>
                        ) : null
                }
                <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', marginTop: 70 }}>
                    <FilledTextField
                        value={email}
                        onChangeText={setEmail}
                        returnKeyType='next'
                        label='Email'
                        lineWidth={0}
                        activeLineWidth={0}
                        inputContainerStyle={styles.textinput}
                        fontSize={scaleFont(15)}
                        keyboardType='email-address'
                    />
                    <FilledTextField
                        value={pass}
                        onChangeText={setPass}
                        returnKeyType='next'
                        label='Password'
                        lineWidth={0}
                        activeLineWidth={0}
                        inputContainerStyle={styles.textinput}
                        fontSize={scaleFont(15)}
                        secureTextEntry={true}
                    />

                    <TouchableOpacity
                        style={styles.button}
                        onPress={signInButtonTapped}
                    >
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>

                </View>
                {
                    !isKbShown ?
                        (
                            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                                <Text style={styles.copyrightText}>2019 Kredo App</Text>
                            </View>
                        ) : null
                }

            </View>

        </ImageBackground >
    );

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: scaleFont(25),
        marginVertical: scaleFont(25),
    },
    background: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    textFieldContainer: {
        alignSelf: "stretch",
        marginVertical: scaleFont(5),
        borderRadius: 15,
        backgroundColor: 'white'
    },
    copyrightText: {
        fontSize: scaleFont(15),
        color: 'white'
    },
    textinput: {
        alignSelf: "stretch",
        backgroundColor: 'white',
        borderRadius: 5,
    },
    button: {
        alignSelf: "stretch",
        backgroundColor: "#4076CE",
        marginVertical: scaleFont(25),
        borderRadius: 10,
        padding: scaleFont(10),
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: scaleFont(15)
    },

});

export default LoginScreen;