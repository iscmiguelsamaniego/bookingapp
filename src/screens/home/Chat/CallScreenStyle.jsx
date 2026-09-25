import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../styles/BaseStyles';

const styles = StyleSheet.create({
    callContainer: {
        flex: 1,
        backgroundColor: colors.darkBackground,
        justifyContent: 'space-between',
        paddingVertical: 20,
    },
    reactionsRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    optionsButton: {
        position: 'absolute',
        right: 20,
    },
    callerCenterContent: {
        alignItems: 'center',
    },
    callerImageWrapper: {
        position: 'relative',
        marginBottom: 16,
    },
    callerAvatar: {
        width: 110,
        height: 110,
        borderRadius: 55,
        borderWidth: 2,
        borderColor: colors.darkSurface,
    },
    speakerBadge: {
        position: 'absolute',
        bottom: 2,
        right: 4,
        backgroundColor: colors.tertiary,
        width: 26,
        height: 26,
        borderRadius: 13,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: colors.darkBackground,
    },
    callerName: {
        fontSize: 22,
        fontFamily: fonts.Bold,
        fontWeight: 'bold',
        color: colors.white,
        marginBottom: 6,
    },
    callDuration: {
        fontSize: 14,
        fontFamily: fonts.Regular,
        color: colors.secondary,
    },
    controlsGrid: {
        paddingHorizontal: 30,
    },
    controlRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 24,
    },
    controlButton: {
        alignItems: 'center',
        width: 75,
    },
    controlLabel: {
        color: colors.white,
        fontSize: 12,
        fontFamily: fonts.Medium,
        marginTop: 8,
    },
    endCallButton: {
        alignItems: 'center',
        width: 75,
        backgroundColor: colors.error,
        borderRadius: 30,
        paddingVertical: 10,
    },
    collapseBar: {
        alignItems: 'center',
    },
    collapseText: {
        color: colors.secondary,
        fontSize: 13,
        fontFamily: fonts.Medium,
        marginBottom: 4,
    },
});

export default styles;