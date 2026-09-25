import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../styles/BaseStyles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 12,
    },
    headerTitle: {
        fontSize: 26,
        fontFamily: fonts.Bold,
        fontWeight: 'bold',
        color: colors.primary,
    },
    headerActions: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    actionIcon: {
        marginLeft: 16,
    },
    tabsRow: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    tabButton: {
        marginRight: 20,
        paddingBottom: 6,
    },
    tabButtonActive: {
        borderBottomWidth: 2,
        borderBottomColor: colors.blue,
    },
    tabText: {
        fontSize: 15,
        fontFamily: fonts.SemiBold,
        fontWeight: '600',
        color: colors.secondary,
    },
    tabTextActive: {
        color: colors.primary,
    },
    chatItem: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 12,
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: colors.gray,
    },
    avatar: {
        width: 52,
        height: 52,
        borderRadius: 26,
        backgroundColor: colors.gray,
    },
    chatInfo: {
        flex: 1,
        marginLeft: 14,
    },
    chatTopRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 4,
    },
    chatName: {
        fontSize: 16,
        fontFamily: fonts.Bold,
        fontWeight: 'bold',
        color: colors.primary,
    },
    chatTime: {
        fontSize: 12,
        fontFamily: fonts.Regular,
        color: colors.secondary,
    },
    chatBottomRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    chatMessage: {
        fontSize: 13,
        fontFamily: fonts.Regular,
        color: colors.secondary,
        flex: 1,
        marginRight: 10,
    },
    missedCallWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    missedCallText: {
        fontSize: 13,
        fontFamily: fonts.Medium,
        fontWeight: '500',
        color: colors.error,
        marginLeft: 4,
    },
});

export default styles;