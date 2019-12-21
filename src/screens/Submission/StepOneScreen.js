import React, { useState, useEffect, memo } from 'react';

import { scaleFont } from "../../ScaleSize";
import {
    StyleSheet, View, SafeAreaView, ScrollView
} from 'react-native';

import {
    TopApplicationFormDescription,
    CheckBoxContainer,
    FormTextInput,
    DotComponent,
    UploadImageButton,
    DoubleCheckBoxContainer,
    FormNumberTextInput,
    OutlinedFormNumberTextInput,
    BoxContainer
} from '../../components/FormComponents';


const StepOneScreen = memo(({ componentId }) => {

    const [fullName, setFullName] = useState('');
    const [selectedJob, setSelectedJob] = useState('');

    useEffect(() => {
        console.log("AAAA")
    }, [selectedJob]);

    return (
        <SafeAreaView style={styles.container} >

            <ScrollView style={{ paddingHorizontal: 50, paddingTop: 25 }}>

                <TopApplicationFormDescription />



                <DotComponent currentStep={0} maxStep={7} />
                <BoxContainer>
                    <FormNumberTextInput
                        prefix="Rp "
                        title="AAAAz"

                    />
                </BoxContainer>

                <FormNumberTextInput
                    prefix="Rp "
                    title="AAAA"
                />
                <DoubleCheckBoxContainer />
                <OutlinedFormNumberTextInput
                    title="Tanggunan"
                />

                <FormTextInput
                    label="Nama Lengkap"
                    onChange={setFullName}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <UploadImageButton
                        title="Upload Foto KTP"
                        onPress={() => console.log("A")}
                    />
                    <View style={{ flex: 0.05 }} />
                    <UploadImageButton
                        title="Upload Foto KK"
                        onPress={() => console.log("B")}
                    />
                </View>


                <CheckBoxContainer
                    title="Pekerjaan"
                    datas={["Peg. Negeri", "Kar. Swasta", "Wiraswasta", "Lainnya"]}
                    setData={setSelectedJob}
                />


                <View style={{ height: 50 }}></View>
            </ScrollView>
        </SafeAreaView>
    )

});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white'
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