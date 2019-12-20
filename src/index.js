import { Navigation } from 'react-native-navigation';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';

const Screens = new Map();
Screens.set('HomeScreen', HomeScreen);
Screens.set('LoginScreen', LoginScreen);
Screens.set('RegisterScreen', RegisterScreen);
Screens.set('SplashScreen', SplashScreen);

Screens.forEach((C, key) => {
    Navigation.registerComponent(
        key,
        () => gestureHandlerRootHOC(C),
        () => C,
    );
});

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            component: {
                name: "SplashScreen"
            }
        }
    });
});