import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import { commonStyle } from '../../../styles';
import { connect } from 'react-redux';
import {
    BASE_URL, DASHBOARD
} from '../../../util/Constants'
import LoadingCircle from '../../../util/LoadingCircle'
import AsyncStorage from '@react-native-community/async-storage';
import moment from 'moment'
import BrickList from 'react-native-masonry-brick-list';
import { listItem } from '../../../actions/index'

class Home extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: DASHBOARD,
        headerLeft: (
            <TouchableOpacity
                onPress={() => navigation.openDrawer()}>
                <Image
                    style={commonStyle.sideBarIconStyle}
                    source={require("../../../../assets/icons/side_menu_icon.png")} />
            </TouchableOpacity>
        ),
        headerRight: (
            <TouchableOpacity
                onPress={() => {
                    AsyncStorage.removeItem('userToken')
                        .then(() => {
                            navigation.navigate("AuthLoading")
                        })
                }}>
                <Text style={{ marginRight: 10 }}>Logout</Text>
            </TouchableOpacity>
        ),
    })

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            networkOutage: false,
            profileUrl: require("../../../../assets/ic_launcher.png"),
            data: [
                { id: '1', name: "Red", color: "#f44336", span: 1 },
                { id: '2', name: "Pink", color: "#E91E63", span: 1 },
                { id: '3', name: "Purple", color: "#9C27B0", span: 1 },
                { id: '4', name: "Deep Purple", color: "#673AB7", span: 1 },
                { id: '5', name: "Indigo", color: "#3F51B5", span: 1 },
                { id: '6', name: "Blue", color: "#2196F3", span: 1 },
                { id: '7', name: "Light Blue", color: "#03A9F4", span: 1 },
                { id: '8', name: "Cyan", color: "#00BCD4", span: 1 },
                { id: '9', name: "Teal", color: "#009688", span: 1 },
                { id: '10', name: "Green", color: "#4CAF50", span: 1 },
                { id: '11', name: "Light Green", color: "#8BC34A", span: 2 },
                { id: '12', name: "Lime", color: "#CDDC39", span: 1 },
                { id: '13', name: "Yellow", color: "#FFEB3B", span: 1 },
                { id: '14', name: "Amber", color: "#FFC107", span: 1 },
                { id: '15', name: "Orange", color: "#FF5722", span: 1 },
            ]
        };
        this.onDateChange = this.onDateChange.bind(this);
    }

    onDateChange(date) {
        this.setState({
            selectedStartDate: date,
        });
    }

    componentDidMount() {
        this.checkNetworkConnectivity()
        this.props.navigation.setParams({
            profileUrl: this.state.profileUrl,
        });
    }

    checkNetworkConnectivity = () => {
        fetch(BASE_URL)
            .then(response => {
                this.setState({ networkOutage: false });
            })
            .catch(error => {
                this.setState({ networkOutage: true });
            });
    };

    render() {
        const navigate = this.props.navigation;
        const onItemClick = this.props.onItemClick;
        return (
            this.state.isLoading
                ? <LoadingCircle />
                : <BrickList
                    data={this.state.data}
                    renderItem={(prop) => renderView(prop, navigate, onItemClick)}
                    columns={2}
                />
        );
    }
}

renderView = (prop, navigate, onItemClick) => {

    return (
        <TouchableOpacity key={prop.id} style={{
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
        </TouchableOpacity>
    )
};

const mapStateToProps = state => {
    return {
        token: state.token
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getUserToken: () => dispatch(getUserToken()),
        onItemClick: (item) => dispatch(listItem(item))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);