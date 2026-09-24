import { StyleSheet, Platform } from 'react-native';
import { colors, fonts } from '../screens/styles/BaseStyles';

const styles = StyleSheet.create({
    tabBar: {
        position: 'absolute',
        bottom: 16,
        left: 16,
        right: 16,
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        height: 64,
        paddingBottom: Platform.OS === 'ios' ? 0 : 8,
        paddingTop: 8,
        borderTopWidth: 0,
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
    },
    tabBarLabel: {
        fontFamily: fonts.SemiBold || 'System',
        fontSize: 11,
        marginTop: 2,
    },
    tabBarItem: {
        height: 48,
    },
    tabIcon: {
        fontSize: 20,
        opacity: 0.6,
    },
    tabIconActive: {
        opacity: 1,
        transform: [{ scale: 1.1 }],
    },

    placeholderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F8F9FA',
    },
    placeholderText: {
        fontSize: 15,
        fontFamily: fonts.Medium || 'System',
        color: colors.primary || '#1A1C1E',
    },
});

export default styles;