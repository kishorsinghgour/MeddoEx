import { StyleSheet } from 'react-native';
import {
    scale,
} from "../util/ScalFunctions";
import { GREY_DARK_COLOR, PURPLE_COLOR, RED_COLOR, LIGHT_GREY2, LIGHT_GREY, PURPLE_HEART, VIOLET, DARK_GREY } from '../colors/Color';

export const loginStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: scale(30),
        borderBottomWidth: scale(2),
        width: '100%',
        marginBottom: scale(20),
        flexDirection: 'row',
        alignItems: 'center',
        padding: scale(4)
    },
    inputs: {
        height: scale(36),
        marginLeft: scale(16),
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    inputIcon: {
        width: scale(24),
        height: scale(24),
        marginLeft: scale(15),
        justifyContent: 'center'
    },
    buttonContainer: {
        height: scale(45),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: scale(20),
        width: '70%',
        borderRadius: scale(30),
        padding: 0,
    },
    loginButton: {
        backgroundColor: "#531ec9",
    },
    loginText: {
        color: 'white',
        fontSize: scale(20),
        fontWeight: 'bold',
    },
    topHeaderStyle: {
        fontSize: scale(24),
    },
    loginTextStyle: {
        color: '#531ec9',
        fontSize: scale(42),
        fontWeight: 'bold',
        padding: scale(16)
    }

})
export const dashboardStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        marginTop: 0,
    },
    topCardConatiner: {
        flexDirection: 'row',
        padding: scale(10),
        justifyContent: 'center',
        alignItems: 'center',
        margin: scale(10),
        width: '95%'
    },
    topCard: {
        padding: scale(10),
        height: scale(100),
        width: '50%',
    },
    topCardTextHeader: {
        fontSize: scale(16),
        color: '#000000',
        fontWeight: 'bold'
    },
    thisMonthText: {
        fontSize: scale(12),
        color: '#A9A9A9',
        fontWeight: 'bold'
    },
    topCardImages: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: scale(10)
    },
    topCardImageStyle: {
        height: scale(42),
        width: scale(42)
    },
    topCardTextStyle: {
        fontSize: scale(36),
        color: RED_COLOR,
        fontWeight: 'bold'
    },
    profileCard: {
        padding: scale(10),
        margin: scale(10),
        width: '95%'
    },
    noticaboardText: {
        padding: scale(10),
        fontSize: scale(24),
        color: '#000000',
        fontWeight: 'bold'
    },
    noticaboarItemCard: {
        padding: scale(10),
        margin: scale(10),
        width: '95%'
    },
    newTextStyle: {
        paddingLeft: scale(4),
        fontSize: scale(12),
        color: '#faa83c',
        fontWeight: 'bold',
        position: 'absolute',
        top: 0,
        right: 0
    },
    dateStyle: {
        fontSize: scale(10),
        marginTop: scale(4)
    },
    noticeTextStyle: {
        fontSize: scale(14),
        width: '90%',
        color: '#b7bac4',
    }
})

export const profileStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        marginTop: 0,
    },
    topBackImg: {
        backgroundColor: PURPLE_COLOR,
        width: '100%',
        height: scale(200),
        justifyContent: 'center',
    },
    profileImgOuterBorder: {
        borderRadius: scale(35),
        width: scale(70),
        height: scale(70),
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    userProfileTextContainer: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: scale(20)
    },
    userProfileText: {
        fontSize: scale(20),
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
    headerText: {
        fontSize: scale(20),
        color: '#000000',
        fontWeight: 'bold',
        margin: scale(10)
    },
    title: {
        fontSize: scale(14),
        color: '#A9A9A9',
    },
    titleValue: {
        fontSize: scale(16),
        color: '#000000',
        fontWeight: 'bold',
        marginTop: scale(4)
    },
    valueConatiner: {
        margin: scale(10)
    },
    lineStyle: {
        height: scale(0.5),
        backgroundColor: '#DCDCDC',
        marginTop: scale(8)
    },
    profileImg: {
        height: scale(70),
        width: scale(70)
    },
    outerContainer: {
        flexDirection: 'row',
        margin: scale(20)
    }

})

export const timeTableStyle = StyleSheet.create({
    headerTextStyle: {
        fontSize: scale(14),
        color: '#000000',
        fontWeight: 'bold'
    },
    tableHead: {
        height: scale(30),
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        marginTop: scale(10),
        fontWeight: 'bold',
        borderBottomColor: '#c8e1ff',
        borderBottomWidth: scale(2),
        borderTopColor: '#c8e1ff',
        borderTopWidth: scale(2),
        marginBottom: scale(6),
    },
    tableRowText: {
        margin: scale(6),
        fontSize: scale(12),
        justifyContent: 'center'
    },
    topText: {
        fontSize: scale(12),
        margin: scale(6),
        fontWeight: 'bold'
    },
    rowTextStyle: {
        width: '40%',
        color: '#b3b6bd',
        fontSize: scale(12)
    }
})

export const resultTableStyle = StyleSheet.create({
    headerTextStyle: {
        fontSize: scale(10),
        color: '#000000',
        fontWeight: 'bold'
    },
    tableHead: {
        height: scale(30),
        backgroundColor: '#ffffff',
        justifyContent: 'center'
    },
    tableRowText: {
        fontSize: scale(10),
        fontWeight: '300',
        alignItems: 'center',
        paddingTop: scale(8),
        paddingBottom: scale(8),
        alignSelf: 'center'
    },
    topText: {
        fontSize: scale(10),
        margin: scale(2),
        fontWeight: '500',
        alignSelf: 'center'
    }
})

export const attendanceTableStyle = StyleSheet.create({
    headerTextStyle: {
        fontSize: scale(10),
        color: '#000000',
        fontWeight: 'bold'
    },
    tableHead: {
        height: scale(30),
        backgroundColor: LIGHT_GREY2,
        justifyContent: 'center'
    },
    tableRowText: {
        fontSize: scale(10),
        fontWeight: '300',
        alignItems: 'center',
        paddingTop: scale(8),
        paddingBottom: scale(8),
        alignSelf: 'center'
    },
    topText: {
        fontSize: scale(10),
        margin: scale(2),
        fontWeight: '500',
        alignSelf: 'center'
    }
})

export const homeWorksStyle = StyleSheet.create({
    headerTextStyle: {
        fontSize: scale(14),
        width: '90%',
        color: '#f49a28',
        fontWeight: 'bold'
    },
    descStyle: {
        fontSize: scale(12),
        color: '#878787',
        marginBottom: 2
    }
})


export const examResultStyle = StyleSheet.create({
    titleStyle: {
        fontSize: scale(14),
        width: '50%',
        color: '#000000',
        marginBottom: scale(2),
        textAlign: 'left',
        alignSelf: 'stretch',
        fontWeight: 'bold'
    },
    valueStyle: {
        fontSize: scale(14),
        width: '50%',
        color: '#000000',
        marginBottom: scale(2),
        textAlign: 'left',
        alignSelf: 'stretch'
    },
    examResultContainer: {
        padding: scale(6),
        margin: scale(8),
        width: '95%'
    },
    examTitleStyle: {
        fontSize: 16,
        color: '#000000',
        marginBottom: scale(10),
        fontWeight: 'bold'
    },
    buttonContainer: {
        height: scale(42),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: scale(20),
        width: '100%',
        borderRadius: scale(10),
        padding: 0,
    },
    overallButton: {
        backgroundColor: '#f49a28'
    },
    loginText: {
        color: 'white',
        fontSize: scale(18),
        fontWeight: 'bold'
    },
    noticaboarItemCard: {
        paddingLeft: scale(8),
        margin: scale(8),
        width: '96%'
    },
})

export const paymentHistoryStyle = StyleSheet.create({
    container: {
        flex: 1,
    },
    thisMonthText: {
        fontSize: scale(12),
        color: DARK_GREY,
        fontWeight: 'bold'
    },
    dateText: {
        fontSize: scale(12),
        color: VIOLET,
        fontWeight: 'bold'
    },
    noticaboarItemCard: {
        padding: scale(10),
        margin: scale(10),
        width: '95%',
    },
    titleStyle: {
        fontSize: scale(14),
        width: '50%',
        color: '#000000',
        marginBottom: scale(2),
        textAlign: 'left',
        alignSelf: 'stretch',
    },
    nameStyle: {
        fontSize: scale(14),
        width: '50%',
        color: '#000000',
        marginBottom: scale(2),
        textAlign: 'left',
        alignSelf: 'stretch',
    },
    amountTextStyle: {
        fontSize: scale(14),
        width: '50%',
        color: '#000000',
        marginBottom: scale(2),
        textAlign: 'left',
        alignSelf: 'stretch',
    },
    amountValueStyle: {
        fontSize: scale(18),
        width: '50%',
        color: '#ff0000',
        marginBottom: scale(2),
        fontWeight: 'bold',
        textAlign: 'left',
        alignSelf: 'stretch',
    },
    cashTextStyle: {
        fontSize: scale(12),
        fontWeight: 'bold',
        color: '#f49a28',
    },
    titleContainerStyle: {
        justifyContent: 'center',
        width: '50%',
        marginLeft: scale(20)
    },
    titleTextStyle: {
        fontSize: scale(12),
        color: 'black',
        alignItems: 'center'
    },
    valueConatinerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%'
    },
    valueTextStyle: {
        fontSize: scale(12),
        color: 'black',
        alignItems: 'center'
    }
})

export const admitCardStyle = StyleSheet.create({
    examTitleStyle: {
        fontSize: scale(14),
        width: '90%',
        color: '#f49a28',
        fontWeight: 'bold'
    },
    schoolNameStyle: {
        color: '#000',
        fontSize: scale(14),
        marginTop: scale(20),
        fontWeight: 'bold'
    },
    header: {
        backgroundColor: LIGHT_GREY,
        height: scale(200),
        alignItems: 'center'
    },
    avatar: {
        width: scale(130),
        height: scale(130),
        borderRadius: scale(63),
        borderWidth: scale(4),
        borderColor: "white",
        marginBottom: scale(10),
        alignSelf: 'center',
        position: 'absolute',
        marginTop: scale(130)
    },
    phoneContainerStyle: {
        flexDirection: 'row', marginTop: 5
    },
    phoneTextStyle: {
        fontSize: scale(12),
        fontWeight: 'bold'
    },
    rowTitleStyle: {
        width: '40%',
        fontSize: scale(12),
    },
    topTextStyle: {
        flexDirection: 'row',
        height: scale(48),
        backgroundColor: LIGHT_GREY,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomRowContainer: {
        margin: scale(8),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    bottomTextTitle: {
        fontSize: scale(10),
        color: '#000'
    },
    bottomTextValue: {
        fontSize: scale(10),
        color: GREY_DARK_COLOR
    },
    topCardTextStyle: {
        fontSize: scale(14),
        color: 'black',
        alignItems: 'center'
    },
    colonStyle: {
        width: '10%'
    }

})

export const eventsStyle = StyleSheet.create({
    circle: {
        width: scale(8),
        height: scale(8),
        borderRadius: scale(4),
        backgroundColor: PURPLE_COLOR
    },
    eventTitleStyle: {
        fontSize: scale(12),
        marginLeft: scale(10)
    },
    eventDetailCard: {
        margin: scale(8),
        width: '96%',
        backgroundColor: 'white'
    },
})

export const feeinvoiceStyle = StyleSheet.create({
    containerCard: {
        margin: scale(8),
        width: '96%',
        backgroundColor: 'white'
    },
    topContainer: {
        justifyContent: 'center',
        width: '100%',
        marginLeft: scale(20),
        alignItems: 'center',
        padding: scale(8)
    },
    topHeaderText: {
        fontSize: scale(12),
        color: PURPLE_COLOR,
        alignItems: 'center'
    },
    topCardContainer: {
        flexDirection: 'row',
        height: scale(48),
        backgroundColor: LIGHT_GREY,
    },
    topCardTextStyle: {
        fontSize: scale(12),
        color: 'black',
        alignItems: 'center'
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: scale(10),
        marginLeft: scale(20),
        marginRight: scale(20)
    },
    seperatorLine: {
        height: 1,
        backgroundColor: LIGHT_GREY,
        marginRight: scale(8),
        marginLeft: scale(8)
    },
    buttonContainer: {
        backgroundColor: PURPLE_COLOR,
        height: scale(32),
        width: scale(100),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: scale(10)
    },
    buttonTextStyle: {
        fontSize: scale(14),
        color: 'white'
    },
    dateIssueContainer: {
        justifyContent: 'center',
        width: '50%',
        marginLeft: scale(20)
    }
})

export const leaveRequestStyle = StyleSheet.create({
    submitLeaveBtnContainer: {
        height: scale(36),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: scale(10),
        width: '50%',
        borderRadius: scale(8),
        padding: 0,
        backgroundColor: PURPLE_HEART,
    },
    submitBtnTextStyle: {
        color: 'white',
        fontSize: scale(12),
        fontWeight: 'bold',
    },
    recentTextStyle: {
        color: '#000',
        fontSize: scale(14),
        marginLeft: scale(10),
        fontWeight: 'bold',
        marginTop: scale(10),
        marginBottom: scale(8),
    },
    leaveRequestRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: LIGHT_GREY2,
        borderWidth: scale(0.5),
        paddingTop: scale(8),
        paddingBottom: scale(8)
    },
    tableBorderStyle: {
        borderWidth: scale(0.5),
        borderColor: LIGHT_GREY2
    },
    datePickerConter: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: scale(100)
    },
    leaveTextInputStyle: {
        height: scale(100),
        textAlignVertical: 'top',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    selectDateContainer: {
        height: scale(56),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: scale(8),
        paddingRight: scale(8)
    }

})

export const commonStyle = StyleSheet.create({
    detailCard: {
        margin: scale(8),
        width: '96%',
        backgroundColor: 'white'
    },
    dotCardContainer: {
        paddingLeft: scale(8),
        margin: scale(8),
        width: '96%'
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: scale(10),
        marginLeft: scale(20),
        marginRight: scale(20)
    },
    seperatorLine: {
        height: scale(1),
        backgroundColor: LIGHT_GREY,
        marginRight: scale(8),
        marginLeft: scale(8)
    },
    sideBarIconStyle: {
        margin: scale(16),
        height: scale(24),
        width: scale(24)
    },
    sideBarRightIconStyle: {
        height: scale(32),
        width: scale(32)
    },
    viewButtonStyle: {
        width: scale(48),
        height: scale(48),
        backgroundColor: PURPLE_COLOR,
        justifyContent: 'center',
        alignItems: 'center'
    },
    rowItemCard: {
        paddingLeft: scale(8),
        margin: scale(8),
        width: '96%'
    },
    circle: {
        width: scale(8),
        height: scale(8),
        borderRadius: scale(4),
        backgroundColor: PURPLE_COLOR
    },
    rowTitleStyle: {
        fontSize: scale(12),
        marginLeft: scale(10)
    },
    rowTextStyle: {
        fontWeight: 'bold',
        marginBottom: scale(5)
    },
    endStartDate: {
        fontSize: scale(10),
        color: 'grey'
    },
    rowCardContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    outerContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    viewButtonOuterStyle: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    cardOuterStyle: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    container: {
        flex: 1,
        paddingBottom: scale(30)
    },
    dashBoardLeftImgOuterBorder: {
        borderRadius: scale(35),
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        borderColor: PURPLE_HEART,
        borderWidth: scale(1),
        marginRight: scale(16),
    }
})
export const commonRowStyle = StyleSheet.create({
    cardsContainer: {
        marginRight: scale(8),
        marginLeft: scale(8),
        marginBottom: scale(8),
        width: '96%',
    },
    separator: {
        backgroundColor: DARK_GREY,
        height: scale(0.8),
        width: "100%"
    },
    topCardContainer: {
        marginTop: scale(4),
        marginBottom: scale(4),
        flexDirection: 'row',
        padding: scale(8),
        marginLeft: scale(20)
    },
    textTitleTopCard: {
        width: '50%',
        color: '#000',
        fontSize: scale(12)
    },
    textValueTopCard: {
        width: '50%',
        color: GREY_DARK_COLOR,
        fontSize: scale(12)
    },
    colonStyle: {
        width: '10%'
    },
})

export const studyMaterialStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: scale(8),
        marginLeft: scale(20)
    },
    rowItemContainer: {
        width: '25%',
        fontSize: scale(12),
    },
    itemNameTitle: {
        width: '75%',
        color: 'blue',
        fontSize: scale(10),
    }
})

export const bookIssuedStyle = StyleSheet.create({
    container: {
        backgroundColor: "yellow",
        height: scale(250),
        alignItems: 'center'
    },
    circleStyle: {
        marginTop: scale(30),
        width: scale(240),
        height: scale(240),
        borderRadius: scale(120),
        backgroundColor: 'white',
        alignItems: 'center'
    },
    imgStyle: {
        width: scale(150),
        height: scale(150),
        alignSelf: 'center',
        marginTop: scale(30)
    }
})

export const paymentReceiptStyle = StyleSheet.create({
    cardContainer: {
        width: '95%',
        marginLeft: scale(8),
        marginRight: scale(8),
        marginTop: scale(15),
        marginBottom: scale(15),
        backgroundColor: LIGHT_GREY
    },
    container: {
        backgroundColor: LIGHT_GREY,
        height: scale(150),
        alignItems: 'center'
    },
    tableContainer: {
        borderWidth: scale(1),
        borderColor: LIGHT_GREY2
    }
})

export const sideViewStyle = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        alignSelf: "center",
        width: 256
    },
    topHeader: {
        flexDirection: "row",
        height: scale(36),
        justifyContent: "space-between",
        backgroundColor: "#4B0082",
        alignItems: "center"
    },
    topHeaderSortStyle: {
        textAlign: "center",
        fontSize: scale(14),
        padding: 10,
        color: "#ffffff",
        // fontFamily: GetLilitaFontName(),
        justifyContent: "center"
    },
    topHeaderDoneStyle: {
        textAlign: "center",
        fontSize: scale(20),
        // fontFamily: GetLilitaFontName(),
        color: "#fff",
        marginRight: scale(20),
        justifyContent: "flex-end"
    },
    itemStyle: {
        textAlign: "right",
        fontSize: scale(14),
        color: "black",
        // fontFamily: getSemiBoldFont()
    },
    itemSelectedStyle: {
        textAlign: "right",
        fontSize: scale(14),
        color: "#CD29FF",
        // fontFamily: getSemiBoldFont()
    },
    sortTextContainer: {
        width: "60%",
        marginTop: scale(10)
    },
    sortTypeList: {
        width: "100%"
    },
    sortTypeContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start"
    },
    sortTextStyle: {
        textAlign: "left",
        marginLeft: scale(20),
        fontSize: scale(16),
        margin: scale(8)
    },
    listTopMargin: {
        marginTop: scale(8),
        marginBottom: scale(8)
    },
    listItemMargin: {
        margin: scale(8),
        flexDirection: "row",
        width: scale(100),
        justifyContent: "flex-end"
    },
    checkIconImageStyle: {
        height: scale(14),
        width: scale(14),
        marginLeft: scale(8),
        marginTop: scale(2),
        resizeMode: "contain"
    }
})