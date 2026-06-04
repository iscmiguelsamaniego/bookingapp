import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../../styles/BaseStyles';

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        padding: 16,
        backgroundColor: colors.white || '#FFFFFF',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
        marginBottom: 16,
    },
    avatar: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: colors.gray || '#E1E9EE',
    },
    infoContainer: {
        flex: 1,
        marginLeft: 16,
        justifyContent: 'center',
    },
    name: {
        fontSize: 18,
        color: colors.primary || '#1A1C1E',
        fontFamily: fonts.Bold || 'Poppins-Bold',
    },
    specialty: {
        fontSize: 14,
        color: colors.secondary || '#6C757D',
        marginTop: 4,
        fontFamily: fonts.Regular || 'Poppins-Regular',
    },
    ratingContainer: {
        marginTop: 6,
        alignSelf: 'flex-start',
    },
    ratingText: {
        fontSize: 12,
        color: colors.orange || '#FFC107',
        fontFamily: fonts.SemiBold || 'Poppins-SemiBold',
    },
});

export default styles;