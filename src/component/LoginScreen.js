import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert,
    ImageBackground
} from 'react-native';
import { loginStyles, dashboardStyles } from '../styles';
import { BASE_URL } from '../util/Constants'
import { connect } from 'react-redux';
import { saveUserToken, userName } from '../actions';
import { DeviceActualHeight } from '../util/ScalFunctions';
import { Card } from 'react-native-shadow-cards';
import LoadinCircle from '../util/LoadingCircle'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { PURPLE_COLOR } from '../colors/Color';
const qs = require('querystring')

class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: '',
            isLoading: false,
            networkOutage: false
        }
    }
    componentDidMount() {
        this.checkNetworkConnectivity()
    }

    navigateToHome = () => {
        this.props.navigation.navigate('App');
    }

    _signInAsync = (token) => {

        this.props.saveUserToken(token)
            .then(() => {
                console.log("saved token: ", this.props.token)
                this.setState({
                    isLoading: false
                })
                this.navigateToHome()
            })
            .catch((error) => {
                this.setState({
                    error,
                    isLoading: false
                })
            })
    };

    checkNetworkConnectivity = () => {
        fetch(BASE_URL)
            .then(response => {
                this.setState({ networkOutage: false });
            })
            .catch(error => {
                console.log("error")
                this.setState({ networkOutage: true });
            });
    };

    onClickListener = () => {
        if (!this.state.networkOutage) {
            if (this.state.email != '' && this.state.password != '') {
                this.setState({
                    isLoading: true
                })
                if (this.state.email === "Meddo" && this.state.password === "12345")
                    this._signInAsync("meddo-token")
            } else {
                Alert.alert(
                    "Please enter username and password."
                );
            }
        } else {
            Alert.alert(
                "Please check your internet connection."
            );
        }

    }

    render() {
        const { isLoading } = this.state;
        return (<ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={loginStyles.container}>
                <View
                    style={{
                        width: '100%',
                        height: DeviceActualHeight() / 2,
                        justifyContent: "center",
                        alignItems: 'center',
                        backgroundColor: PURPLE_COLOR,
                        borderBottomEndRadius: 200,
                        borderBottomStartRadius: 200
                    }}>
                    <Text style={loginStyles.loginTextStyle}>Meddo.in</Text>
                </View>

                <View style={{ margin: 20 }}>
                    <Card style={loginStyles.inputContainer}>
                        <Image style={loginStyles.inputIcon} source={require("../../assets/icons/user_icon.png")} />
                        <TextInput style={loginStyles.inputs}
                            placeholder="User Name"
                            keyboardType="email-address"
                            underlineColorAndroid='transparent'
                            onChangeText={(email) => this.setState({ email })} />
                    </Card>

                    <Card style={loginStyles.inputContainer}>
                        <Image style={loginStyles.inputIcon} source={require("../../assets/icons/password_icon.png")} />
                        <TextInput style={loginStyles.inputs}
                            placeholder="Password"
                            secureTextEntry={true}
                            underlineColorAndroid='transparent'
                            onChangeText={(password) => this.setState({ password })} />
                    </Card>
                </View>
                <View style={[loginStyles.buttonContainer, loginStyles.loginButton]}>
                    <TouchableOpacity onPress={() => this.onClickListener('login')}>
                        {isLoading ? <LoadinCircle /> : <Text style={loginStyles.loginText}>Login</Text>}
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>)
    }
}

const mapStateToProps = state => ({
    token: state.token
});

const mapDispatchToProps = dispatch => ({
    saveUserToken: token => dispatch(saveUserToken(token)),
    onLogin: (name) => {
        dispatch(userName(name));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);