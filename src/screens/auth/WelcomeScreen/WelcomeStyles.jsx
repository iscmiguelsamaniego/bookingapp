import { StyleSheet } from "react-native";
import { colors, fonts, dimensions } from '../../styles/BaseStyles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: "center",
        width: dimensions.fullWidth,
        height: dimensions.fullHeight,
    },
    logo: {
        height: 60,
        width: 200,
        marginVertical: 15,
    },
    bannerImage: {
        marginVertical: 10,
        height: 160,
        width: 200,
    },
    title: {
        fontSize: 28,
        fontFamily: fonts.SemiBold,
        paddingHorizontal: 10,
        textAlign: "center",
        color: colors.primary,
        marginTop: 20,
    },
    subTitle: {
        fontSize: 16,
        paddingHorizontal: 10,
        textAlign: "center",
        color: colors.secondary,
        fontFamily: fonts.Medium,
        marginVertical: 10,
    },
    buttonsInRowContainer: {
        padding: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    loginButton: {
        backgroundColor: colors.blue,
        width: '49%',
        height: 50,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    registerButton: {
        width: '49%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        borderWidth: 2,
        borderColor: colors.ligthblue,
    },
    loginText: {
        color: colors.white,
        fontSize: 16,
        fontFamily: fonts.Bold,
    },
    registerText: {
        color: colors.primary,
        fontSize: 16,
        fontFamily: fonts.Bold,
    },
    continueText: {
        textAlign: "center",
        marginVertical: 10,
        fontSize: 14,
        fontFamily: fonts.Regular,
        color: colors.primary,
    },
    googleButtonContainer: {
        flexDirection: "row",
        borderWidth: 2,
        borderColor: colors.orange,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        gap: 10,
        width: '95%',
        height: 50,
    },
    googleImage: {
        height: 20,
        width: 20,
    },
    googleText: {
        fontSize: 14,
        fontFamily: fonts.SemiBold,
    },
});

export default styles;