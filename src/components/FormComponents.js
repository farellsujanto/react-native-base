import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { scaleFont } from "../ScaleSize";
import {
    StyleSheet, Text, View, TouchableOpacity, Image
} from 'react-native';

import CheckBox from '@react-native-community/checkbox';
import { TextInput } from 'react-native-paper';

// import {
//     TextField,
//     FilledTextField,
//     OutlinedTextField,
// } from 'react-native-material-textfield';

export function TopApplicationFormDescription() {
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
                    source={require("../images/form-approve.png")}
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

export function CheckBoxContainer({ title, datas, setData }) {

    const [selected, setSelected] = useState(0);



    function createCheckBox() {
        let output = [];

        for (let i = 0; i < Math.ceil((datas.length / 2)); i++) {
            let insideComponent = []
            for (let x = 0; x < 2; x++) {
                const index = i * 2 + x;
                if (index < datas.length) {
                    insideComponent.push(
                        <View style={styles.checkBoxRow} key={datas[index]}>
                            <CheckBox
                                value={selected === index + 1}
                                onChange={() => {
                                    setSelected(index + 1);
                                    setData(datas[index]);
                                }}
                                tintColors={{
                                    true: '#4076CE',
                                    false: '#bababa'
                                }}
                            />
                            <Text style={styles.text}>{datas[index]}</Text>
                        </View>
                    );
                }
            }
            output.push(
                <View style={styles.checkBoxColumn} key={i}>
                    {insideComponent}
                </View>
            );
        }

        return output;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            {createCheckBox()}
        </View>
    );
}

export function FormTextInput({ label, onChange }) {
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

function Dot({ active }) {

    return (
        <View
            style={{
                width: scaleFont(7),
                height: scaleFont(7),
                borderRadius: 100,
                marginHorizontal: scaleFont(2),
                backgroundColor: active ? '#4076CE' : 'grey',
            }}
        />
    )
}

export function DotComponent({ currentStep, maxStep }) {

    function createDots() {
        let output = [];

        for (let i = 0; i < maxStep; i++) {
            output.push(<Dot key={i} active={currentStep === i} />);
        }

        return output;
    }

    return (
        <View
            style={{
                flexDirection: 'row',
                marginTop: scaleFont(10),
                justifyContent: 'space-between',
                alignItems: 'center'
            }}
        >
            <Text style={{ fontSize: scaleFont(14) }}>Step {currentStep + 1} / {maxStep}</Text>
            <View style={{ flexDirection: 'row', }} >
                {createDots()}
            </View>
        </View>
    );
}

export function UploadImageButton({ title, onPress }) {
    return (
        <TouchableOpacity
            style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 7,
                borderColor: '#bababa',
                borderWidth: 1
            }}
            onPress={onPress}
        >
            <Icon name="upload" size={20} color="#bababa" />
            <Text style={{ fontSize: 10, fontWeight: '400' }}> {title}</Text>
        </TouchableOpacity>
    );
}

function SectionTitle({ title }) {
    return (
        <Text style={styles.sectionTitle}>{title}</Text>
    );
}

function NumberTextInputSuffix({ text }) {
    return (
        <Text style={styles.suffix}>{text}</Text>
    );
}

export function OutlinedFormNumberTextInput({ label, title, onChange }) {
    return (
        <>
            <SectionTitle title={title} />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TextInput
                    label={label}
                    mode='outlined'
                    keyboardType='numeric'
                    onChangeText={onChange}

                    style={{
                        // marginHorizontal: 35,
                        marginVertical: 8,
                        borderRadius: 15,
                        height: 35,
                        width: '20%'
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
                        },

                    }}
                />

                <NumberTextInputSuffix style={{ marginLeft: 10 }} text=" Orang" />
            </View>

        </>

    );
}

function FormPrefix({ prefix }) {
    return (
        <Text style={{ marginBottom: 10, color: "#4287f5", fontWeight: 'bold' }}>{prefix}</Text>
    );
}

export function FormNumberTextInput({ title, prefix, onChange }) {
    return (
        <>
            <SectionTitle title={title} />
            <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                <FormPrefix prefix={prefix} />
                <TextInput
                    mode='flat'
                    keyboardType='numeric'
                    onChangeText={onChange}
                    style={{
                        marginVertical: 8,
                        height: 35,
                        backgroundColor: 'white',
                        flex: 1,
                        borderBottomWidth: 0.5
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
            </View>
        </>
    );
}

export function BoxContainer({ children }) {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
}

export function DoubleCheckBoxContainer() {
    return (
        <View>
            <SectionTitle title="Status Pemohon" />
            <View style={styles.checkBoxColumn}>
                <View style={styles.checkBoxRow}>
                    <CheckBox
                        value={false}
                        // onChange={() => { }}
                        tintColors={{
                            true: '#4076CE',
                            false: '#bababa'
                        }}
                    />
                    <Text style={styles.text}>AAAA</Text>

                </View>
                <View style={styles.checkBoxRow}>
                    <CheckBox
                        value={false}
                        // onChange={() => { }}
                        tintColors={{
                            true: '#4076CE',
                            false: '#bababa'
                        }}
                    />
                    <Text style={styles.text}>AAAA</Text>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        elevation: 2,
        borderRadius: 1,
        marginVertical: 8,
        borderRadius: 15,
        flexDirection: 'column',
        padding: scaleFont(14)
    },
    title: {
        fontSize: scaleFont(15),
        fontWeight: 'bold',
        color: 'gray',
        marginLeft: 7
    },
    sectionTitle: {
        fontSize: scaleFont(12),
        fontWeight: 'bold',
        color: 'gray',
    },
    suffix: {
        fontSize: scaleFont(12),
        fontWeight: 'bold',
        color: '#4076CE',
    },
    text: {
        fontWeight: 'bold',
        color: '#4076CE'
    },
    checkBoxColumn: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    checkBoxRow: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '50%',

    }
});