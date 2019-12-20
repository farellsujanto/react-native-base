import { Navigation } from "react-native-navigation";

export const nonLoggedInRoute = () => {
    Navigation.setRoot({
        root: {
            stack: {
                id: "authStack",
                children: [
                    {
                        component: {
                            id: "regId",
                            name: "RegisterScreen",
                            options: {
                                topBar: { visible: false, }
                            }
                        },
                    },
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
            stack: {
                id: "authStack",
                children: [
                    {
                        component: {
                            id: "homeId",
                            name: "HomeScreen",
                            options: {
                                bottomTab: {
                                    fontSize: 11,
                                    text: 'Home',
                                }
                            }
                        },
                    },
                    
                ],
            }
        }
    });
}