/**
 * @format
 */

import { AppRegistry, View } from 'react-native';
import { name as appName } from './app.json';
import React from 'react'
import { Provider } from 'react-redux';
import store from './src/store'
import { AppNavigator } from './src/navigator/navigator'

const RNRedux = () => (
    <Provider store={store}>
        <View style={{ flex: 1 }}>
            <AppNavigator />
        </View>
    </Provider>
)

AppRegistry.registerComponent(appName, () => RNRedux);
