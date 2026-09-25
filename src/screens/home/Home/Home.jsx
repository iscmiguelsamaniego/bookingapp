import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Image, ScrollView, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import styles from './HomeStyles';
import { colors } from '../../styles/BaseStyles';
import { CATEGORIES, PROMO_DATA, PROFESSIONALS_DATA } from './Home.constants';
import bellLogo from "../../../../assets/images/bell.png";

const Home = () => {
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
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2 }}>
                                <Ionicons name="location-outline" size={14} color={colors.secondary} style={{ marginRight: 4 }} />
                                <Text style={styles.locationText}>Miguel Hidalgo, CDMX</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.notificationButton}>
                        <Image source={bellLogo} style={styles.bellIcon} />
                    </TouchableOpacity>
                </View>

                {/* Barra de Búsqueda con Icono Vectorial */}
                <View style={styles.searchRow}>
                    <View style={styles.searchBarContainer}>
                        <Ionicons name="search-outline" size={20} color={colors.secondary} style={{ marginRight: 8 }} />
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Buscar Servicios..."
                            placeholderTextColor={colors.secondary}
                        />
                    </View>
                    <TouchableOpacity style={styles.filterButton}>
                        <Ionicons name="options-outline" size={20} color={colors.primary} />
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
                                            color={isSelected ? colors.white : colors.blue}
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
                                    <Ionicons name="star" size={12} color={colors.orange} style={{ marginRight: 4 }} />
                                    <Text style={styles.cardRating}>{item.rating.toFixed(1)}</Text>
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

export default Home;