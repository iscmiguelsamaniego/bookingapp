import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../styles/BaseStyles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    scrollContainer: {
        paddingBottom: 130 // ◄ Aumentado para que el texto de las políticas libre el footer por completo
    },
    coverImage: {
        width: '100%',
        height: 280,
        backgroundColor: colors.gray
    },
    backButton: {
        position: 'absolute',
        top: 18,
        left: 20,
        width: 38,
        height: 38,
        borderRadius: 19,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10
    },
    backButtonText: {
        color: colors.white,
        fontSize: 16,
        fontWeight: 'bold'
    },

    infoWrapper: {
        paddingHorizontal: 20, // Regresamos a tus 20px que dan mejor aire visual
        paddingTop: 24
    },

    // ◄ CORRECCIÓN: Nombre más imponente, oscuro y limpio
    name: {
        fontSize: 26,
        color: '#1A1C1E', // Un tono más oscuro y nativo
        fontFamily: fonts.Bold,
        letterSpacing: -0.5
    },

    // ◄ CORRECCIÓN: Ajuste de padding exacto para que el badge no se vea gigante ni deforme
    categoryBadge: {
        alignSelf: 'flex-start',
        paddingHorizontal: 12, // Controla el ancho del chip
        paddingVertical: 6,    // Controla el alto del chip
        backgroundColor: 'rgba(3, 169, 244, 0.12)', // Azul sutil translúcido
        color: colors.ligthblue || '#03A9F4',
        borderRadius: 6,
        fontSize: 11,
        fontFamily: fonts.Bold,
        marginTop: 10,
        marginBottom: 4,
        letterSpacing: 0.8
    },

    rating: {
        fontSize: 14,
        color: '#FFB300', // Un amarillo/naranja más vivo estilo estrella de Google
        fontFamily: fonts.SemiBold,
        marginTop: 6
    },

    sectionTitle: {
        fontSize: 16,
        color: '#1A1C1E',
        fontFamily: fonts.Bold,
        marginTop: 26,
        marginBottom: 8
    },
    description: {
        fontSize: 14,
        color: '#45484A',
        fontFamily: fonts.Regular,
        lineHeight: 22,
        opacity: 0.9
    },
    policyText: {
        fontSize: 13,
        color: '#AEB5BB',
        fontFamily: fonts.Regular,
        marginBottom: 8,
        lineHeight: 18
    },

    // ◄ CORRECCIÓN: Separación de la barra de navegación del sistema y sombra real
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 20,
        paddingTop: 12,
        paddingBottom: 34, // ◄ Clave: Crea la zona segura arriba de los botones triangulo/círculo/cuadrado de Android
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderTopColor: '#F0F0F0',
        // Sombra premium Material Design para que se note la división con el scroll
        elevation: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.08,
        shadowRadius: 6
    },

    // ◄ CORRECCIÓN: Ajuste de bordes redondeados intermedios (Look 100% Nativo de Aplicación)
    bookingButton: {
        backgroundColor: colors.blue || '#1E90FF',
        paddingVertical: 14,
        borderRadius: 16, // Ni óvalo extremo (100) ni cuadrado rígido (4). 16px es el sweet spot nativo.
        alignItems: 'center',
        justifyContent: 'center',
        height: 52,
        // Sombra sutil exclusiva para el botón principal
        elevation: 2
    },
    bookingButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: fonts.Bold,
        letterSpacing: 0.2
    }
});

export default styles;