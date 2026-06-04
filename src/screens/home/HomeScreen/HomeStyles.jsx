import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../styles/BaseStyles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EDEDED' // Un fondo gris claro nativo mucho más limpio
    },
    scrollContainer: {
        paddingHorizontal: 25, // El estándar nativo móvil es de 16px de margen lateral
        paddingTop: 25,
        paddingBottom: 45
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    },
    welcomeSubtitle: {
        fontSize: 13, // Más compacto
        color: colors.secondary,
        fontFamily: fonts.Medium,
        marginBottom: 2
    },
    welcomeTitle: {
        fontSize: 20, // Reducido para look nativo elegante
        color: colors.primary,
        fontFamily: fonts.Bold
    },
    avatarThumbnail: {
        width: 42, // Más estandarizado
        height: 42,
        borderRadius: 21,
        backgroundColor: colors.gray
    },

    // BUSCADOR NATIVO: Bordes suavizados, menos alto y sin look de píldora gigante
    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EFEFEF', // Fondo gris nativo tipo iOS SearchBar
        borderRadius: 12, // Esquinas nativas suavizadas
        paddingHorizontal: 12,
        height: 44, // Altura estándar nativa de Apple para campos de entrada
        marginBottom: 20
    },
    searchIconWrapper: {
        marginRight: 8
    },
    filterIconWrapper: {
        marginLeft: 8
    },
    iconText: {
        fontSize: 16
    },
    searchInput: {
        flex: 1,
        fontFamily: fonts.Regular,
        color: colors.primary,
        fontSize: 14,
        paddingVertical: 0 // Evita desfases en iOS
    },

    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12
    },
    sectionTitle: {
        fontSize: 16, // Tamaño nativo estándar para subtítulos de sección
        color: colors.primary,
        fontFamily: fonts.Bold
    },
    sectionTitleMargin: {
        fontSize: 16,
        color: colors.primary,
        fontFamily: fonts.Bold,
        marginTop: 20,
        marginBottom: 12
    },
    viewAllButton: {
        fontSize: 13,
        color: colors.blue,
        fontFamily: fonts.SemiBold
    },

    // CHIPS NATIVOS: Más compactos, limpios y con esquinas cuadradas/suaves
    chip: {
        paddingHorizontal: 14,
        paddingVertical: 6,
        borderRadius: 8, // Esquinas nativas comerciales
        backgroundColor: '#FFFFFF',
        marginRight: 8,
        borderWidth: 1,
        borderColor: '#EAEAEA',
        // Sombras nativas planas casi imperceptibles
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.03,
        shadowRadius: 2,
        elevation: 1
    },
    chipSelected: {
        backgroundColor: colors.blue,
        borderColor: colors.blue
    },
    chipText: {
        fontSize: 13,
        color: '#6c757d', // Texto secundario más suave si no está seleccionado
        fontFamily: fonts.Medium
    },
    chipTextSelected: {
        color: colors.white,
        fontFamily: fonts.Bold
    },

    galleryContainer: {
        paddingBottom: 15,
        paddingLeft: 2 // Evita que la sombra de la primera tarjeta se corte
    },

    // TARJETAS ESTILO GALERÍA NATIVAS: Menos anchas, esquinas de 12px y sombras muy finas
    galleryCard: {
        width: 210, // Más compacto para que se alcance a asomar la siguiente tarjeta nativamente
        backgroundColor: colors.white,
        borderRadius: 12, // Suavizado estándar de Apple/Material
        marginRight: 12,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#EAEAEA',
        // Sombras sutiles de alta calidad para que no se vea "pesado"
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.04,
        shadowRadius: 6,
        elevation: 2
    },
    cardImage: {
        width: '100%',
        height: 110, // Menos alto para que mantenga proporción
        backgroundColor: colors.gray
    },
    cardInfo: {
        padding: 10
    },
    cardTitle: {
        fontSize: 14, // Negritas limpias
        color: colors.primary,
        fontFamily: fonts.Bold
    },
    cardRating: {
        fontSize: 11,
        color: colors.orange,
        fontFamily: fonts.SemiBold,
        marginVertical: 2
    },
    cardDescription: {
        fontSize: 11,
        color: colors.secondary,
        fontFamily: fonts.Regular,
        lineHeight: 14
    },
    emptyText: {
        color: colors.secondary,
        fontFamily: fonts.Regular,
        textAlign: 'center',
        marginTop: 10,
        fontSize: 13
    }
});

export default styles;