import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import LoadingCircle from '../../../util/LoadingCircle'
import { ScrollView } from 'react-native-gesture-handler';

class DetailScreen extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: "Detail",
        headerLeft: (
            <TouchableOpacity
                onPress={() => navigation.navigate("Home")}>
                <Image
                    style={{ margin: 16, height: 24, width: 24 }}
                    source={require("../../../../assets/icons/back_arrow.png")} />
            </TouchableOpacity>
        ),
    })

    render() {
        const prop = this.props.navigation.getParam("detail")
        return (
            <View key={prop.id} style={{
                margin: 2,
                borderRadius: 2,
                backgroundColor: prop.color,
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}
                onPress={() => {
                    onItemClick(prop)
                    navigate.navigate("DetailScreen", { "detail": prop })
                }}>
                <View  >
                    <Text style={{ color: 'white' }}>{prop.name}</Text>
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        item: state.item,
    };
};

export default connect(mapStateToProps, null)(DetailScreen);