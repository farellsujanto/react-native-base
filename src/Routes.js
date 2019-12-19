import React from 'react';
import { Navigation } from "react-native-navigation";

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';


Navigation.registerComponent('LoginScreen', () => LoginScreen);
Navigation.registerComponent('RegisterScreen', () => RegisterScreen);

export const nonLoggedInRoute = () => {
    Navigation.setRoot({
        root: {
            stack: {
                id: "authStack",
                children: [
                    {
                        component: {
                            id: "loginId",
                            name: "LoginScreen",
                            options: {
                                topBar: { visible: false, }
                            }
                        },
                    },
                ],
            }
        }
    });
}

const iconColor = '#444';
const selectedIconColor = '#0089da';

export const loggedInRoute = () => {
    Navigation.setRoot({
        root: {
            bottomTabs: {
                id: "authStack",
                children: [
                    {
                        component: {
                            id: "loginId",
                            name: "LoginScreen",
                            options: {
                                bottomTab: {
                                    fontSize: 11,
                                    text: 'Home',
                                }
                            }
                        },
                    },
                    {
                        component: {
                            id: "registerId",
                            name: "RegisterScreen",
                            options: {
                                bottomTab: {
                                    fontSize: 11,
                                    text: 'A',
                                }
                            }
                        }
                    }
                ],
            }
        }
    });
}