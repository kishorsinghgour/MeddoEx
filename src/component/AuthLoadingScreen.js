import React from 'react';
import {
    ActivityIndicator,
    StatusBar,
    StyleSheet,
    View,
    Image
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import { getIsParent } from '../util/Constants';

class AuthLoadingScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    constructor() {
        super();
        this.state = {
            changeScreen: false,
            isParent: false
        }
        this.splashTimer = null
    }

    componentDidMount() {
        this.splashTimer = setTimeout(() => {
            this.setState({ changeScreen: true }, () => {
                this.onSplashEnd()
            })
        }, 3000);

    }
    onSplashEnd = () => {
        AsyncStorage.getItem('userToken')
            .then((data) => {
                this.props.navigation.navigate(data && data !== undefined && data !== null ? 'App' : 'Auth');
            })
            .catch((err) => {
                this.props.navigation.navigate('Auth')
            })
    }

    componentWillUnmount() {
        clearInterval(this.splashTimer)
    }

    render() {
        return (
            this.state.changeScreen ?
                <View style={styles.container}>
                    <ActivityIndicator />
                    <StatusBar barStyle="default" />
                </View>
                : <Image style={{ width: '100%', height: '100%' }}></Image>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const mapStateToProps = state => ({
    token: state.token,
});

const mapDispatchToProps = dispatch => ({
    getUserToken: () => dispatch(getUserToken()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoadingScreen);