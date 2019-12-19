import React, { useEffect } from 'react';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
  } from 'react-native';
  

import { loggedInRoute, nonLoggedInRoute } from '../Routes';

function SplashScreen() {

    useEffect(() => {
        nonLoggedInRoute();
    }, []);

    return (
        <View>
            <Text>SplashScreen</Text>
        </View>
    );
}

export default SplashScreen;