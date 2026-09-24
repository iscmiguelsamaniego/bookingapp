import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../styles/BaseStyles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FA' // Fondo ligeramente más limpio tipo Material
    },
    scrollContainer: {
        paddingHorizontal: 20,
        paddingTop: 16,
        paddingBottom: 40
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16
    },
    userInfoRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    userTextContainer: {
        marginLeft: 10
    },
    welcomeSubtitle: {
        fontSize: 14,
        color: colors.secondary || '#6c757d',
        fontFamily: fonts.Regular,
    },
    locationText: {
        fontSize: 12,
        color: colors.primary || '#1A1C1E',
        fontFamily: fonts.Medium,
        marginTop: 2
    },
    avatarThumbnail: {
        width: 45,
        height: 45,
        borderRadius: 22.5,
        backgroundColor: colors.gray
    },
    notificationButton: {
        width: 45,
        height: 45,
        borderRadius: 22.5,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#EAEAEA',
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2
    },
    bellIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },
    mainHeading: {
        fontSize: 24,
        color: '#1A1C1E',
        fontFamily: fonts.Bold,
        lineHeight: 32,
        marginBottom: 16,
        letterSpacing: -0.3
    },
    searchRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    searchBarContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 14,
        paddingHorizontal: 14,
        height: 50,
        borderWidth: 1,
        borderColor: '#EAEAEA',
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.03,
        shadowRadius: 3
    },
    iconText: {
        fontSize: 16,
        marginRight: 10
    },
    searchInput: {
        flex: 1,
        fontFamily: fonts.Regular,
        color: '#1A1C1E',
        fontSize: 14,
        paddingVertical: 0
    },
    filterButton: {
        width: 50,
        height: 50,
        borderRadius: 14,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        borderWidth: 1,
        borderColor: '#EAEAEA',
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.03,
        shadowRadius: 3
    },
    filterIconText: {
        fontSize: 18
    },
    promoBanner: {
        height: 160,
        marginBottom: 24,
        borderRadius: 20,
        overflow: 'hidden', // ◄ Obligatorio para recortar la imagen con los bordes
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6
    },
    promoImageStyle: {
        borderRadius: 20 // ◄ Asegura que la imagen respete las esquinas en iOS y Android
    },
    promoOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.45)', // ◄ Oscurece la foto para resaltar el texto
        padding: 20,
        justifyContent: 'center'
    },
    promoContent: {
        width: '80%'
    },
    promoTitle: {
        fontSize: 18,
        fontFamily: fonts.Bold,
        color: '#FFFFFF', // ◄ Texto en blanco para alto contraste
        marginBottom: 6
    },
    promoSubtitle: {
        fontSize: 12,
        fontFamily: fonts.Regular,
        color: '#F3F4F6',
        marginBottom: 14,
        lineHeight: 18
    },
    promoButton: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 10,
        alignSelf: 'flex-start'
    },
    promoButtonText: {
        color: '#1E1B4B',
        fontFamily: fonts.Bold,
        fontSize: 13
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12
    },
    sectionTitle: {
        fontSize: 18,
        color: '#1A1C1E',
        fontFamily: fonts.Bold,
        letterSpacing: -0.2
    },
    viewAllButton: {
        fontSize: 13,
        color: '#1E90FF',
        fontFamily: fonts.SemiBold
    },
    categoryCard: {
        alignItems: 'center',
        marginRight: 14,
        backgroundColor: '#FFFFFF',
        paddingVertical: 12,
        paddingHorizontal: 14,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#EAEAEA',
        minWidth: 80,
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.03,
        shadowRadius: 2
    },
    categoryCardSelected: {
        backgroundColor: '#1E90FF',
        borderColor: '#1E90FF'
    },
    categoryIconWrapper: {
        width: 44,
        height: 44,
        borderRadius: 12,
        backgroundColor: '#F3F4F6',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8
    },
    categoryIconWrapperSelected: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)'
    },
    categoryText: {
        fontSize: 12,
        color: '#4B5563',
        fontFamily: fonts.Medium
    },
    categoryTextSelected: {
        color: '#FFFFFF',
        fontFamily: fonts.Bold
    },
    galleryContainer: {
        paddingBottom: 10
    },
    galleryCard: {
        width: 175,
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        marginRight: 14,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#EAEAEA',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 6
    },
    imageContainer: {
        position: 'relative'
    },
    cardImage: {
        width: '100%',
        height: 120,
        backgroundColor: colors.gray
    },
    ratingBadge: {
        position: 'absolute',
        top: 8,
        right: 8,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8
    },
    cardRating: {
        fontSize: 11,
        color: '#FBBF24',
        fontFamily: fonts.Bold
    },
    cardInfo: {
        padding: 12
    },
    cardTitle: {
        fontSize: 14,
        color: '#1A1C1E',
        fontFamily: fonts.Bold,
        marginBottom: 4
    },
    cardDescription: {
        fontSize: 11,
        color: '#6B7280',
        fontFamily: fonts.Regular,
        lineHeight: 15
    },
    emptyText: {
        color: '#6B7280',
        fontFamily: fonts.Regular,
        textAlign: 'center',
        marginTop: 10,
        fontSize: 13
    }
});

export default styles;