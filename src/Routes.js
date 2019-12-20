import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Navigation } from "react-native-navigation";

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

export const loggedInRoute = () => {
    Promise.all([
        MaterialIcons.getImageSource('home', 25),
        MaterialIcons.getImageSource('menu', 25),
    ]).then(([homeIcon, menuIcon]) => {
        Navigation.setRoot({
            root: {
                bottomTabs: {
                    options: {
                        bottomTabs: {
                            titleDisplayMode: 'alwaysShow',
                        },
                    },
                    children: [
                        {
                            stack: {
                                children: [{
                                    component: {
                                        name: "HomeScreen",
                                        options: {
                                            topBar: { visible: false, }
                                        }
                                    },
                                }],
                                options: {
                                    bottomTab: {
                                        text: 'Home',
                                        icon: homeIcon
                                    }
                                }
                            },
                        },
                        {
                            stack: {
                                children: [{
                                    component: {
                                        name: "BlankScreen",
                                    },
                                }],
                                options: {
                                    bottomTab: {
                                        text: 'ZZZ',
                                        icon: menuIcon
                                    }
                                }
                            }
                        },
                    ],
                }
            }
        });
    });
}