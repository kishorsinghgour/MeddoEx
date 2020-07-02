import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import LoadingCircle from '../../../util/LoadingCircle'
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

class Logout extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: "Logout",
        headerLeft: (
            <TouchableOpacity
                onPress={() => navigation.openDrawer()}>
                <Image
                    style={{ margin: 16, height: 24, width: 24 }}
                    source={require("../../../../assets/icons/side_menu_icon.png")} />
            </TouchableOpacity>
        ),

    })

    constructor(props) {
        super(props)
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        AsyncStorage.removeItem('userToken')
            .then((data) => {
                this.setState({
                    isLoading: false
                })
                this.props.navigation.navigate("AuthLoading")
            })
            .catch((err) => {
                console.log(error)
                this.setState({
                    isLoading: false
                })
            })
    }

    render() {
        const { isLoading } = this.state
        return (
            isLoading ? <LoadingCircle></LoadingCircle>
                : <View>
                    <Text>Events</Text>
                </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

const mapStateToProps = state => ({
    token: state.token,
});

const mapDispatchToProps = dispatch => ({
    removeUserToken: () => dispatch(removeUserToken())
});

export default connect(mapStateToProps, mapDispatchToProps)(Logout);