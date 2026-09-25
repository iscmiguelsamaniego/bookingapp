import { StyleSheet, Platform } from 'react-native';
import { colors, fonts } from '../screens/styles/BaseStyles';

const TAB_METRICS = {
    tabBarHeight: 64,
    iconSize: 22,
};

const styles = StyleSheet.create({
    metrics: TAB_METRICS,

    tabBar: {
        position: 'absolute',
        bottom: 16,
        left: 16,
        right: 16,
        backgroundColor: colors.white,
        borderRadius: 24,
        height: TAB_METRICS.tabBarHeight,
        paddingBottom: Platform.OS === 'ios' ? 0 : 8,
        paddingTop: 8,
        borderTopWidth: 0,
        elevation: 8,
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
    },
    tabBarLabel: {
        fontFamily: fonts.SemiBold,
        fontSize: 11,
        marginTop: 2,
    },
    tabBarItem: {
        height: 48,
    },
    placeholderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.backgroundLight,
    },
    placeholderText: {
        fontSize: 15,
        fontFamily: fonts.Medium,
        color: colors.primary,
    },
});

export default styles;