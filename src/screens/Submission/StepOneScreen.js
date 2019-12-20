import React, { useState } from 'react';
import { scaleFont } from "../../ScaleSize";
import {
    StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView, ScrollView
} from 'react-native';

import CheckBox from '@react-native-community/checkbox';
import { TextInput } from 'react-native-paper';

import {
    TextField,
    FilledTextField,
    OutlinedTextField,
} from 'react-native-material-textfield';

function TopDescription() {
    return (
        <View style={{
            height: 100,
            // marginHorizontal: 35,
            // marginVertical: 30,
            backgroundColor: '#4076CE',
            borderRadius: 15,
            flexDirection: 'row',
            justifyContent: 'flex-start'
        }}>
            <View style={{ flexDirection: 'row', }}>
                <Image
                    source={require("../../images/form-approve.png")}
                    style={{
                        height: '100%',
                        width: '20%',
                        resizeMode: 'center'
                    }}
                />
                <Text
                    style={{
                        alignSelf: 'center',
                        justifyContent: 'center',
                        marginLeft: 20,
                        fontSize: scaleFont(18),
                        color: 'white'
                    }}
                >
                    Form Permohonan{"\n"}Pengajuan Pinjaman
                </Text>

            </View>
        </View>
    );
}

function CheckBoxContainer() {
    return (
        <View style={{
            elevation: 2,
            borderRadius: 1,
            marginVertical: 8,
            borderRadius: 15,
            flexDirection: 'column'
        }}>
            <View style={{ margin: scaleFont(15) }}>
                <Text style={{
                    fontSize: scaleFont(15),
                    fontWeight: 'bold',
                    color: 'gray'
                }}>Pekerjaan</Text>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-start'
                    }}
                >
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: '50%'
                        }}
                    >
                        <CheckBox
                            value={true}
                            disabled={false}
                        />
                        <Text style={{ fontWeight: 'bold', color: '#4076CE' }}>Peg. Negeri</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: '50%'
                        }}
                    >
                        <CheckBox
                            value={true}
                            disabled={false}
                        />
                        <Text style={{ fontWeight: 'bold', color: '#4076CE' }}>Kar. Swasta</Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-start'
                    }}
                >
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: '50%'
                        }}
                    >
                        <CheckBox
                            value={true}
                            disabled={false}
                        />
                        <Text style={{ fontWeight: 'bold', color: '#4076CE' }}>Wiraswasta</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: '50%'
                        }}
                    >
                        <CheckBox
                            value={true}
                            disabled={false}
                        />
                        <Text style={{ fontWeight: 'bold', color: '#4076CE' }}>Lainnya</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    );
}

function FormTextInput({ label, onChange }) {
    return (
        <TextInput
            label={label}
            mode='outlined'
            onChangeText={onChange}
            style={{
                // marginHorizontal: 35,
                marginVertical: 8,
                borderRadius: 15,
                height: 35,

                // fontWeight: 'bold'
            }}
            theme={{
                colors: {
                    primary: '#4287f5',
                    accent: '#03dac4',
                    background: '#f6f6f6',
                    surface: 'white',
                    error: '#B00020',
                    text: '#505050',
                    onBackground: '#000000',
                    onSurface: '#000000',
                    placeholder: '#bababa',
                    notification: 'pinkA400',

                },
                roundness: 7,
                animation: {
                    scale: 0.3
                }
            }}
        />
    );
}

function Dot(props) {

    return (
        <TouchableOpacity onPress={() => { }}>
            <View 
            style={{
                width: scaleFont(7),
                height: scaleFont(7),
                borderRadius: 100,
                marginHorizontal: scaleFont(2),
                backgroundColor: '#4076CE',
            }}></View>
        </TouchableOpacity>
    )
}

function StepOneScreen({ componentId }) {

    const [fullName, setFullName] = useState('');

    return (
        <SafeAreaView
            style={styles.container}
        >

            <ScrollView style={{ paddingHorizontal: 50, paddingTop: 25 }}>

                <TopDescription />

                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: scaleFont(10),
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                >
                    <Text style={{ fontSize: scaleFont(14) }}>Step 1 / 5</Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            // alignSelf: 'center',
                            // justifyContent: 'center'
                        }}
                    >
                        <Dot Page='1' />
                        <Dot Page='2' />
                        <Dot Page='3' />
                        <Dot Page='4' />
                        <Dot Page='5' />

                    </View>
                </View>

                <FormTextInput
                    label="Nama Lengkap"
                    onChange={setFullName}
                />

                <FormTextInput
                    label="Nama Alias"
                    onChange={setFullName}
                />

                <FormTextInput
                    label="Alamat"
                    onChange={setFullName}
                />

                <FormTextInput
                    label="No. KTP"
                    onChange={setFullName}
                />

                <FormTextInput
                    label="Domisili"
                    onChange={setFullName}
                />

                <FormTextInput
                    label="No. Telepon"
                    onChange={setFullName}
                />

                <FormTextInput
                    label="Nama Ibu Kandung"
                    onChange={setFullName}
                />

                <FormTextInput
                    label="Nama Tanggungan 1"
                    onChange={setFullName}
                />

                <FormTextInput
                    label="Nama Tanggungan 1"
                    onChange={setFullName}
                />

                <FormTextInput
                    label="Nama Tanggungan 1"
                    onChange={setFullName}
                />

                <CheckBoxContainer />
                <View style={{ height: 50 }}>

                </View>
            </ScrollView>

            {/* <OutlinedTextField
                label='Email'
                lineWidth={2}
                activeLineWidth={2}
                inputContainerStyle={{
                    alignSelf: "stretch",
                    backgroundColor: 'transparent',
                    marginHorizontal: 35
                }}
                fontSize={scaleFont(10)}
                keyboardType='email-address'
            /> */}



        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    topButton: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginHorizontal: '10%',
        marginVertical: scaleFont(10),
    },
    titleBoxContainer: {
        height: 100,
        marginHorizontal: 50,
        marginVertical: 30,
        backgroundColor: '#4076CE',
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    titleBoxRow: {
        flexDirection: 'row',
    },
    iconStyle: {
        height: '100%',
        width: '20%',
        resizeMode: 'center'
    },
    stepPage: {
        flexDirection: 'row',
        marginTop: scaleFont(10),
        marginHorizontal: '10%',
        justifyContent: 'space-between'

    },
    dotContainer: {
        flexDirection: 'row',
    },
    dot: {
        width: scaleFont(10),
        height: scaleFont(10),
        borderRadius: 100,
        marginHorizontal: scaleFont(2),
        backgroundColor: '#4076CE',
    },
    dotActive: {
        backgroundColor: '#4076CE',
    },
    dotInactive: {
        backgroundColor: 'gray',
    },
    page: {
        elevation: 2,
        borderRadius: 1,
        marginHorizontal: 20,
        marginTop: '5%',
        flexDirection: 'column'
    },
    pageTitleText: {
        fontSize: scaleFont(15),
        fontWeight: 'bold',
        color: 'gray'
    },
    page1Row: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    page1Check: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '50%'
    },
    page2Row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    page2Rp: {
        fontWeight: 'bold',
        color: '#4076CE',
        fontSize: scaleFont(15)
    },
    page2TextInput: {
        borderBottomWidth: 0.5,
        width: '90%',
        fontSize: scaleFont(15)
    },
    page3ButtonWrap: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginBottom: scaleFont(10)
    },
    page4: {

    },
    page5Row: {
        flexDirection: 'row',
        marginBottom: scaleFont(15)
    },
    page5Button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '80%',
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    page5ButtonText: {
        fontWeight: 'bold',
        color: '#4076CE',
        width: '80%',
        marginLeft: '10%'
    },
    page5ButtonIcon: {
        height: scaleFont(20),
        width: scaleFont(20),
        marginRight: scaleFont(10),
    },
    page5LeftSide: {
        width: '20%',
        alignItems: 'center'
    },
    page5LeftCount: {
        alignSelf: 'center',
        fontSize: scaleFont(25),
        fontWeight: 'bold',
        color: '#4076CE'
    },
    page5LeftText: {
        fontWeight: 'bold',
        color: '#4076CE',
        fontSize: scaleFont(10)
    },

})

export default StepOneScreen;