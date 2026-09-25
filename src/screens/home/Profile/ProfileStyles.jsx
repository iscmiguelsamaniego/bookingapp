import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../styles/BaseStyles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.screenBackground || colors.backgroundLight,
    },
    scrollContainer: {
        paddingHorizontal: 20,
        paddingTop: 16,
        paddingBottom: 120, // Espacio holgado para las pestañas inferiores
    },

    // Cabecera del Perfil
    profileHeader: {
        alignItems: 'center',
        marginBottom: 28,
        paddingVertical: 10,
    },
    avatar: {
        width: 90,
        height: 90,
        borderRadius: 45,
        backgroundColor: colors.gray,
        marginBottom: 12,
        borderWidth: 2,
        borderColor: colors.white,
    },
    profileName: {
        fontSize: 20,
        color: colors.textDark,
        fontFamily: fonts.Bold,
        marginBottom: 2,
    },
    profileEmail: {
        fontSize: 14,
        color: colors.secondary,
        fontFamily: fonts.Regular,
        marginBottom: 14,
    },
    editButton: {
        paddingVertical: 8,
        paddingHorizontal: 20,
        backgroundColor: colors.white,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: colors.cardBorder || colors.borderLight,
        elevation: 1,
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
    },
    editButtonText: {
        fontSize: 13,
        color: colors.primary,
        fontFamily: fonts.SemiBold,
    },

    // Secciones y Tarjetas de Menú
    sectionLabel: {
        fontSize: 14,
        color: colors.secondary,
        fontFamily: fonts.SemiBold,
        textTransform: 'uppercase',
        letterSpacing: 0.8,
        marginBottom: 10,
        marginLeft: 4,
    },
    cardGroup: {
        backgroundColor: colors.white,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: colors.cardBorder || colors.borderLight,
        marginBottom: 24,
        overflow: 'hidden',
        elevation: 1,
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.03,
        shadowRadius: 6,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 14,
        paddingHorizontal: 16,
        backgroundColor: colors.white,
    },
    menuLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconBox: {
        width: 36,
        height: 36,
        borderRadius: 10,
        backgroundColor: colors.backgroundLight,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 14,
    },
    logoutIconBox: {
        backgroundColor: colors.error || colors.overlayBg,
    },
    menuText: {
        fontSize: 15,
        color: colors.textDark,
        fontFamily: fonts.Medium,
    },
    logoutText: {
        fontSize: 15,
        color: colors.error,
        fontFamily: fonts.Medium,
    },
    menuRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    badge: {
        backgroundColor: colors.blue,
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    badgeText: {
        fontSize: 11,
        color: colors.white,
        fontFamily: fonts.Bold,
    },
    separator: {
        height: 1,
        backgroundColor: colors.cardBorder || colors.borderLight,
        marginLeft: 66, // Alineado perfectamente para que el divisor comience después del icono
    },
});

export default styles;