import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import styles from './HomeStyles.jsx';
import { colors } from '../../styles/BaseStyles.jsx';

const CATEGORIES = [
    { id: 'electricidad', label: 'Electricidad' },
    { id: 'remodelacion', label: 'Remodelación' },
    { id: 'plomeria', label: 'Plomería' },
    { id: 'pintura', label: 'Pintura' },
];

const PROFESSIONALS_DATA = [
    { id: 'p1', name: 'James Carter', category: 'electricidad', rating: 4.9, description: 'Electrical Repair. He specializes in installations, full system repairs with guaranteed safety.', avatarUrl: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?q=80&w=200' },
    { id: 'p2', name: 'Carlos Mendoza', category: 'plomeria', rating: 4.8, description: 'Especialista en fugas de alta presión, grifos y tuberías residenciales.', avatarUrl: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=200' },
    { id: 'p3', name: 'Sofía Reyes', category: 'remodelacion', rating: 4.7, description: 'Remodelaciones de interiores, tablaroca y acabados modernos.', avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200' },
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

                {/* Cabecera: Perfil y Miniatura circular */}
                <View style={styles.headerRow}>
                    <View>
                        <Text style={styles.welcomeSubtitle}>Hey, Madhu 👋</Text>
                        <Text style={styles.welcomeTitle}>Good Morning</Text>
                    </View>
                    <Image
                        source={{ uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150' }}
                        style={styles.avatarThumbnail}
                    />
                </View>

                {/* Barra de búsqueda transparente con botones en los extremos */}
                <View style={styles.searchBarContainer}>
                    <TouchableOpacity style={styles.searchIconWrapper}>
                        <Text style={styles.iconText}>🔍</Text>
                    </TouchableOpacity>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="What Service Do You Need?..."
                        placeholderTextColor="rgba(69, 72, 74, 0.4)"
                    />
                    <TouchableOpacity style={styles.filterIconWrapper}>
                        <Text style={styles.iconText}>🎛️</Text>
                    </TouchableOpacity>
                </View>

                {/* Sección de Categorías con botón Ver Todo */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Categorías</Text>
                    <TouchableOpacity onPress={() => console.log("Ver todo")}>
                        <Text style={styles.viewAllButton}>Ver todo</Text>
                    </TouchableOpacity>
                </View>

                {/* Listado Horizontal de Chips */}
                <View style={{ marginBottom: 15 }}>
                    <FlatList
                        horizontal
                        data={CATEGORIES}
                        keyExtractor={(item) => item.id}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => {
                            const isSelected = selectedCategory === item.id;
                            return (
                                <TouchableOpacity
                                    style={[styles.chip, isSelected && styles.chipSelected]}
                                    onPress={() => setSelectedCategory(item.id)}
                                >
                                    <Text style={[styles.chipText, isSelected && styles.chipTextSelected]}>
                                        {item.label}
                                    </Text>
                                </TouchableOpacity>
                            );
                        }}
                    />
                </View>

                {/* Galería de Tarjetas Horizontales */}
                <Text style={styles.sectionTitleMargin}>Our Services</Text>
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
                            <Image source={{ uri: item.avatarUrl }} style={styles.cardImage} />
                            <View style={styles.cardInfo}>
                                <Text style={styles.cardTitle}>{item.name}</Text>
                                <Text style={styles.cardRating}>⭐ {item.rating.toFixed(1)}</Text>
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