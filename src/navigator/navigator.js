import HomeScreen from '../component/HomeScreen';
import LoginScreen from '../component/LoginScreen'
import AuthLoadingScreen from '../component/AuthLoadingScreen';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

export const AppStack = createStackNavigator({ Home: HomeScreen },
    { initialRouteName: 'Home', headerMode: 'none' });
export const AuthStack = createStackNavigator({ SignIn: LoginScreen },
    { initialRouteName: 'SignIn', headerMode: 'none' });

export const app_navigator = createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
);

export const AppNavigator = createAppContainer(app_navigator);