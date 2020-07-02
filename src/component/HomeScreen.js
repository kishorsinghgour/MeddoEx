import React from 'react';
import { Image, Text, View, SafeAreaView, ScrollView, ImageBackground } from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import Dashboard from './menuScreens/Dashboard';
import { connect } from 'react-redux';
import { DeviceActualWidth } from '../util/ScalFunctions';
import { PURPLE_COLOR } from '../colors/Color';

const Drawer = createDrawerNavigator({
    Dashboard: {
        screen: Dashboard,
        navigationOptions: {
            drawerLabel: 'Home',
            drawerIcon: ({ tintColor }) => (<Image
                source={require("../../assets/icons/dashboard.png")}
                resizeMode="contain"
                style={{ width: 20, height: 20 }}
            />),
        }
    }
},
    {
        contentComponent: (props) => (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ height: 20, alignItems: 'center', justifyContent: 'center' }}>
                    <View
                        style={{
                            width: '100%',
                            height: 120,
                            justifyContent: "center",
                            backgroundColor: PURPLE_COLOR
                        }}>
                    </View>
                </View>
                <ScrollView>
                    <DrawerItems {...props} />
                </ScrollView>
            </SafeAreaView>
        ),
        drawerBackgroundColor: {
            light: '#fff',
            dark: 'rgba(40,40,40,1)',
        },
        drawerWidth: DeviceActualWidth() - 120,
        contentOptions: {
            activeTintColor: '#e91e63',
        },
        drawerType: 'back',
        overlayColor: '#00000000',
        // hideStatusBar: true,

    });

Drawer.navigationOptions = {
    header: <View style={{ height: 56, backgroundColor: 'blue' }}></View>,
};

const mapStateToProps = state => ({
    token: state.token
});

export default connect(mapStateToProps, null)(Drawer);
