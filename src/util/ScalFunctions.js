import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = size => {
    var baselineWidth = width;
    if (width > height) {
        baselineWidth = height;
    }

    return Math.trunc((baselineWidth / guidelineBaseWidth) * size);
};

const moderateScale = (size, factor = 0.5) =>
    Math.trunc(size + (scale(size) - size) * factor);
const DeviceWidth = () => width;
const DeviceHeight = () => height;

const DeviceActualWidth = () => {
    var baselineWidth = width;
    if (width > height) {
        baselineWidth = height;
    }

    return baselineWidth;
};
const DeviceActualHeight = () => {
    var baselineHeight = height;
    if (height < width) {
        baselineHeight = width;
    }
    return baselineHeight;
};

export {
    scale,
    moderateScale,
    DeviceWidth,
    DeviceHeight,
    DeviceActualWidth,
    DeviceActualHeight
};

