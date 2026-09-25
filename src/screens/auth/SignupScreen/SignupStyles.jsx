import { StyleSheet } from "react-native";
import { colors, fonts, dimensions } from '../../styles/BaseStyles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        padding: 20,
        height: dimensions.fullHeight,
        width: dimensions.fullWidth,
    },
    backButtonWrapper: {
        height: 40,
        width: 40,
        backgroundColor: colors.gray,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    iconBackLarge: {
        width: 30,
        height: 30,
    },
    inputIcon: {
        width: 25,
        height: 25,
    },
    textContainer: {
        marginVertical: 10,
    },
    headingText: {
        fontSize: 32,
        color: colors.primary,
        fontFamily: fonts.SemiBold,
    },
    formContainer: {
        marginTop: 20,
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: colors.secondary,
        borderRadius: 100,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        padding: 12,
        marginVertical: 10,
        backgroundColor: colors.white,
    },
    textInput: {
        flex: 1,
        paddingHorizontal: 10,
        fontFamily: fonts.Light,
        color: colors.primary,
    },
    forgotPasswordText: {
        textAlign: "right",
        color: colors.primary,
        fontFamily: fonts.SemiBold,
        marginVertical: 10,
    },
    primaryButton: {
        backgroundColor: colors.orange,
        borderRadius: 100,
        marginTop: 20,
    },
    primaryButtonText: {
        color: colors.white,
        fontSize: 14,
        fontFamily: fonts.SemiBold,
        textAlign: "center",
        padding: 10,
        letterSpacing: 1,
    },
    continueText: {
        textAlign: "center",
        marginVertical: 20,
        fontSize: 14,
        fontFamily: fonts.Regular,
        color: colors.primary,
    },
    googleButtonContainer: {
        flexDirection: "row",
        borderWidth: 2,
        borderColor: colors.primary,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        gap: 10,
    },
    googleImage: {
        height: 20,
        width: 20,
    },
    googleText: {
        fontSize: 14,
        fontFamily: fonts.SemiBold,
        color: colors.primary,
    },
    footerContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
        gap: 5,
    },
    accountText: {
        color: colors.primary,
        fontFamily: fonts.Regular,
    },
    signupText: {
        color: colors.blue,
        fontFamily: fonts.Bold,
        letterSpacing: 0.5,
    },
});

export default styles;