import * as React from "react";

import { ActivityIndicator, StyleSheet } from "react-native";


export default LoadingCircle = ({ style, ...props }) => (
    <ActivityIndicator style={style || styles.spinner} {...props} />
);

const styles = StyleSheet.create({
    spinner: {
        width: "100%",
        height: "100%",
        flex: 1
    }
});

