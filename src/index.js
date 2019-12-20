import { Navigation } from 'react-native-navigation';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import BlankScreen from './screens/BlankScreen';
import HomeScreen from './screens/HomeScreen';

import StepOneScreen from './screens/Submission/StepOneScreen';

const Screens = new Map();
Screens.set('HomeScreen', HomeScreen);
Screens.set('LoginScreen', LoginScreen);
Screens.set('BlankScreen', BlankScreen);
Screens.set('SplashScreen', SplashScreen);
Screens.set('StepOneScreen', StepOneScreen);

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