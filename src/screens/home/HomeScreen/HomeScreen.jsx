import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Image, ScrollView, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import styles from './HomeStyles.jsx';
import bellLogo from "../../../../assets/images/bell.png";

const CATEGORIES = [
    { id: 'electricidad', label: 'Electricidad', iconName: 'flash-outline' },
    { id: 'remodelacion', label: 'Remodelación', iconName: 'home-outline' },
    { id: 'plomeria', label: 'Plomería', iconName: 'water-outline' },
    { id: 'pintura', label: 'Pintura', iconName: 'brush-outline' },
];

const PROMO_DATA = {
    title: 'Descuento 30% En Limpieza de Casas',
    subtitle: 'Obtenga un descuento en la limpieza de su casa y haga su casa brillar aun más.',
};

const PROFESSIONALS_DATA = [
    {
        id: 'p1',
        name: 'James Carter',
        category: 'electricidad',
        rating: 4.9,
        price: '$20/hr',
        description: 'Electrical Repair. Specializes in installations and full system repairs.',
        avatarUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=400'
    },
    {
        id: 'p4',
        name: 'Jacinto Flores',
        category: 'electricidad',
        rating: 4.5,
        price: '$20/hr',
        description: 'Electrical Repair. Guaranteed safety and professional diagnostic.',
        avatarUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=400'
    },
    {
        id: 'p2',
        name: 'Carlos Mendoza',
        category: 'plomeria',
        rating: 4.8,
        price: '$20/hr',
        description: 'Especialista en fugas de alta presión, grifos y tuberías residenciales.',
        avatarUrl: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=200'
    },
    {
        id: 'p3',
        name: 'Sofía Reyes',
        category: 'remodelacion',
        rating: 4.7,
        price: '$20/hr',
        description: 'Remodelaciones de interiores, tablaroca y acabados modernos.',
        avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200'
    },
];

const HomeScreen = () => {
    const navigation = useNavigation();
    const [selectedCategory, setSelectedCategory] = useState('electricidad');

    const filteredProfessionals = PROFESSIONALS_DATA.filter(
        (item) => item.category === selectedCategory
    );

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>

                {/* Header Estilo Material Moderno */}
                <View style={styles.headerRow}>
                    <View style={styles.userInfoRow}>
                        <Image
                            source={{ uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150' }}
                            style={styles.avatarThumbnail}
                        />
                        <View style={styles.userTextContainer}>
                            <Text style={styles.welcomeSubtitle}>Hola, Antonio</Text>
                            <Text style={styles.locationText}>📍 Metepec, Estado de México</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.notificationButton}>
                        <Image source={bellLogo} style={styles.bellIcon} />
                    </TouchableOpacity>
                </View>

                {/* Título Principal de la App */}
                <Text style={styles.mainHeading}>Servicios profesionales para el hogar</Text>

                {/* Barra de Búsqueda con Botón de Filtros */}
                <View style={styles.searchRow}>
                    <View style={styles.searchBarContainer}>
                        <Text style={styles.iconText}>🔍</Text>
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Buscar Servicios..."
                            placeholderTextColor="#9AA0A6"
                        />
                    </View>
                    <TouchableOpacity style={styles.filterButton}>
                        <Text style={styles.filterIconText}>⚙️</Text>
                    </TouchableOpacity>
                </View>

                {/* Banner Promocional Estilo Tarjeta con Fondo */}
                <ImageBackground
                    source={{ uri: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=600' }}
                    style={styles.promoBanner}
                    imageStyle={styles.promoImageStyle}
                >
                    <View style={styles.promoOverlay}>
                        <View style={styles.promoContent}>
                            <Text style={styles.promoTitle}>{PROMO_DATA.title}</Text>
                            <Text style={styles.promoSubtitle}>{PROMO_DATA.subtitle}</Text>
                            <TouchableOpacity style={styles.promoButton}>
                                <Text style={styles.promoButtonText}>Reservar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>

                {/* Sección de Categorías con botón See All */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Categorias</Text>
                    <TouchableOpacity onPress={() => console.log("Ver todo categorías")}>
                        <Text style={styles.viewAllButton}>Ver todo</Text>
                    </TouchableOpacity>
                </View>

                {/* Listado Horizontal de Categorías (Iconos tipo tarjeta) */}
                <View style={{ marginBottom: 16 }}>
                    <FlatList
                        horizontal
                        data={CATEGORIES}
                        keyExtractor={(item) => item.id}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => {
                            const isSelected = selectedCategory === item.id;
                            return (
                                <TouchableOpacity
                                    style={[styles.categoryCard, isSelected && styles.categoryCardSelected]}
                                    onPress={() => setSelectedCategory(item.id)}
                                >
                                    <View style={[styles.categoryIconWrapper, isSelected && styles.categoryIconWrapperSelected]}>
                                        <Ionicons
                                            name={item.iconName}
                                            size={22}
                                            color={isSelected ? '#FFFFFF' : '#1E90FF'}
                                        />
                                    </View>
                                    <Text style={[styles.categoryText, isSelected && styles.categoryTextSelected]}>
                                        {item.label}
                                    </Text>
                                </TouchableOpacity>
                            );
                        }}
                    />
                </View>

                {/* Sección de Servicios Populares */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Popular Services</Text>
                    <TouchableOpacity onPress={() => console.log("Ver todo servicios")}>
                        <Text style={styles.viewAllButton}>Ver todo</Text>
                    </TouchableOpacity>
                </View>

                <FlatList
                    horizontal
                    data={filteredProfessionals}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.galleryContainer}
                    ListEmptyComponent={
                        <Text style={styles.emptyText}>No hay servicios en esta categoría por ahora.</Text>
                    }
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.galleryCard}
                            onPress={() => navigation.navigate('ProfessionalDetail', { professional: item })}
                        >
                            <View style={styles.imageContainer}>
                                <Image source={{ uri: item.avatarUrl }} style={styles.cardImage} />
                                <View style={styles.ratingBadge}>
                                    <Text style={styles.cardRating}>⭐ {item.rating.toFixed(1)}</Text>
                                </View>
                            </View>
                            <View style={styles.cardInfo}>
                                <Text style={styles.cardTitle} numberOfLines={1}>{item.name}</Text>
                                <Text style={styles.cardDescription} numberOfLines={2}>
                                    {item.description}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />

            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;