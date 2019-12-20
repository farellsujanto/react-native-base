import React from 'react';

import {
    View,
    Text,
    Button
} from 'react-native';

import { Navigation } from'react-native-navigation';
function LoginScreen({ componentId }) {


    function navigateToRegister() {
        Navigation.push(componentId, {
            component: {
                name: 'RegisterScreen'
            }
        });
    }

    return (
        <View>
        
            <Text>LoginScreen</Text>
        </View>
    );
}


export default LoginScreen;