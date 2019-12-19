import React from 'react';
import { Navigation } from "react-native-navigation";

import {
    View,
    Text,
    Button,
} from 'react-native';


function moveScreen(componentId) {
    Navigation.push(componentId, {
        component: { name: 'RegisterScreen', }
    });
}

function LoginScreen({ componentId }) {

    return (

        <View>
            <Text>LoginScreen</Text>

            <Button onPress={() => moveScreen(componentId)} title="REGISTER"></Button>
        </View>
    );
}


export default LoginScreen;