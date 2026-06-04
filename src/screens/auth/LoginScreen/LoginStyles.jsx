import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../styles/BaseStyles';

export const styles = StyleSheet.create({
    containerBackgroundImg: { flex: 1, resizeMode: 'cover', justifyContent: 'center' },
    scrollViewContainer: { flexGrow: 1, justifyContent: 'center', padding: 20 },
    textContainer: { marginVertical: 30 },
    formContainer: { marginTop: 10 },
    iconWrapper: { height: 40, width: 40, borderRadius: 20, backgroundColor: colors.white, justifyContent: 'center', alignItems: 'center' },
    primaryButton: { backgroundColor: colors.blue, borderRadius: 100, marginTop: 10 },
    headingText: { fontSize: 32, color: colors.white, fontFamily: fonts.SemiBold },
    bodyText: { fontSize: 16, color: colors.white, fontFamily: fonts.Regular },
    linkText: { fontSize: 14, color: colors.orange, fontFamily: fonts.SemiBold, textAlign: 'right', marginVertical: 10 },
    buttonText: { color: colors.white, fontSize: 16, fontFamily: fonts.Medium, textAlign: 'center', padding: 10 },
    inputContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.30)', borderWidth: 0, borderColor: colors.white, borderRadius: 100, paddingHorizontal: 20, padding: 12, marginVertical: 10 },
    textInput: { flex: 1, paddingHorizontal: 10, fontFamily: fonts.Light, color: colors.white, fontSize: 18, },
    errorContainer: { backgroundColor: 'rgba(0, 0, 0, 0.6)', paddingVertical: 6, paddingHorizontal: 12, borderRadius: 8, marginTop: 6, marginBottom: 4, borderLeftWidth: 4, borderLeftColor: '#FF4D4D', alignSelf: 'stretch' },
    errorText: { color: '#D32F2F', fontSize: 12, fontWeight: '600' },
    iconBack: { width: 25, height: 25, tintColor: colors.primary },
    iconWhite: { width: 25, height: 25, tintColor: colors.white },
    footerContainer: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: 20, gap: 5 },
});