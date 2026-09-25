import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../styles/BaseStyles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    scrollContainer: {
        paddingBottom: 150
    },
    coverContainer: {
        position: 'relative',
        width: '100%',
        height: 280,
    },
    coverImage: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.gray
    },
    imageOverlay: {
        position: 'absolute',
        top: 0, bottom: 0, left: 0, right: 0,
        backgroundColor: colors.overlayBg,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    floatingHeaderContent: {
        width: '100%',
        zIndex: 2,
    },
    floatingTitle: {
        fontSize: 24,
        color: colors.white,
        fontFamily: fonts.Bold,
        letterSpacing: -0.5,
        marginBottom: 6,
    },
    floatingMetaRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    metaItemInline: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    floatingMetaText: {
        fontSize: 13,
        color: colors.white,
        fontFamily: fonts.Medium,
        opacity: 0.95,
    },
    floatingRatingText: {
        fontSize: 13,
        color: colors.white,
        fontFamily: fonts.Bold,
    },
    backButton: {
        position: 'absolute',
        top: 18,
        left: 20,
        width: 38,
        height: 38,
        borderRadius: 19,
        backgroundColor: colors.errorBg,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10
    },
    backButtonText: {
        color: colors.white,
        fontSize: 16,
        fontFamily: fonts.Bold,
    },

    infoWrapper: {
        paddingHorizontal: 20,
        paddingTop: 16
    },
    sectionTitle: {
        fontSize: 16,
        color: colors.textDark,
        fontFamily: fonts.Bold,
        marginTop: 24,
        marginBottom: 8
    },
    description: {
        fontSize: 14,
        color: colors.primary,
        fontFamily: fonts.Regular,
        lineHeight: 22,
        opacity: 0.9
    },
    policyText: {
        fontSize: 13,
        color: colors.secondary,
        fontFamily: fonts.Regular,
        marginBottom: 8,
        lineHeight: 18
    },
    checklistContainer: {
        marginTop: 4,
    },
    checkRowInteractive: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.white,
        padding: 12,
        borderRadius: 12,
        marginBottom: 8,
        borderWidth: 1,
        borderColor: colors.borderLight,
    },
    checkRowActive: {
        borderColor: colors.blue,
        backgroundColor: colors.backgroundLight,
    },
    checkTextDynamic: {
        flex: 1,
        fontSize: 13,
        color: colors.textDark,
        fontFamily: fonts.Regular,
    },
    checkTextActive: {
        fontFamily: fonts.Bold,
        color: colors.blue,
    },
    taskPriceText: {
        fontSize: 13,
        fontFamily: fonts.Bold,
        color: colors.textDark,
    },
    providerCardEnhanced: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.white,
        borderRadius: 20,
        padding: 16,
        borderWidth: 1,
        borderColor: colors.borderLight,
        marginTop: 10,
        elevation: 2,
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 6,
    },
    providerAvatarEnhanced: {
        width: 52,
        height: 52,
        borderRadius: 26,
        backgroundColor: colors.gray,
    },
    providerInfoEnhanced: {
        flex: 1,
        marginLeft: 14,
    },
    providerNameEnhanced: {
        fontSize: 16,
        fontFamily: fonts.Bold,
        color: colors.textDark,
    },
    verifiedRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 2,
    },
    providerRoleEnhanced: {
        fontSize: 12,
        fontFamily: fonts.Medium,
        color: colors.secondary,
    },
    providerActionsEnhanced: {
        flexDirection: 'row',
    },
    // ◄ Fusionado: Reemplaza contenedores de iconos repetitivos
    actionIconBoxEnhanced: {
        width: 40,
        height: 40,
        borderRadius: 14,
        backgroundColor: colors.backgroundLight,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 8,
        borderWidth: 1,
        borderColor: colors.borderLight,
    },

    // Footer
    footer: {
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 14,
        paddingBottom: 52,
        backgroundColor: colors.white,
        borderTopWidth: 0,
        elevation: 12,
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.08,
        shadowRadius: 6
    },
    priceContainer: {
        justifyContent: 'center',
    },
    priceLabel: {
        fontSize: 11,
        fontFamily: fonts.Regular,
        color: colors.secondary,
    },
    priceValue: {
        fontSize: 16,
        fontFamily: fonts.Bold,
        color: colors.textDark,
    },
    bookingButton: {
        backgroundColor: colors.blue,
        paddingVertical: 12,
        paddingHorizontal: 28,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        height: 48,
        elevation: 2
    },
    bookingButtonText: {
        color: colors.white,
        fontSize: 15,
        fontFamily: fonts.Bold,
        letterSpacing: 0.2
    }
});

export default styles;