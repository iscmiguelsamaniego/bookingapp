import React, { useRef } from 'react';
import { View, Text, Animated, TextInput, StyleSheet } from 'react-native';

const CalendarScreen = () => {
    const scrollY = useRef(new Animated.Value(0)).current;

    // Animamos la altura
    const headerHeight = scrollY.interpolate({
        inputRange: [0, 120],
        outputRange: [200, 80],
        extrapolate: 'clamp',
    });

    // Animamos la opacidad del texto para un efecto más "pro"
    const opacity = scrollY.interpolate({
        inputRange: [0, 100],
        outputRange: [1, 0],
        extrapolate: 'clamp',
    });

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.header, { height: headerHeight }]}>
                <Animated.View style={{ opacity }}>
                    <Text style={styles.title}>Hey, Madhu 👋</Text>
                </Animated.View>
                <TextInput style={styles.search} placeholder="Buscar..." />
            </Animated.View>

            <Animated.ScrollView
                contentContainerStyle={{ paddingTop: 200 }}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: false }
                )}
            >
                {/* Generamos contenido suficiente para habilitar el scroll */}
                {Array.from({ length: 20 }).map((_, i) => (
                    <Text key={i} style={{ padding: 20, fontSize: 18 }}>
                        Servicio técnico #{i + 1}
                    </Text>
                ))}
            </Animated.ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f4f4f4' },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#FFF',
        zIndex: 10,
        paddingHorizontal: 20,
        paddingBottom: 15,
        justifyContent: 'flex-end',
        borderBottomWidth: 1,
        borderBottomColor: '#DDD'
    },
    title: { fontSize: 24, fontWeight: 'bold' },
    search: { backgroundColor: '#EEE', height: 45, marginTop: 10, borderRadius: 12, paddingHorizontal: 15 }
});

export default CalendarScreen;