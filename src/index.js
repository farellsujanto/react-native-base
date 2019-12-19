import { Navigation } from 'react-native-navigation';

import SplashScreen from './screens/SplashScreen';

Navigation.registerComponent('SplashScreen', () => SplashScreen);

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            component: {
                name: "SplashScreen"
            }
        }
    });
});