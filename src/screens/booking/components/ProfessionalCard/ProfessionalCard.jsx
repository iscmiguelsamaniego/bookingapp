import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './ProfessionalCardStyles';

const ProfessionalCard = ({ name, specialty, rating, avatarUrl }) => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: avatarUrl }} style={styles.avatar} />
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.specialty}>{specialty}</Text>
                <View style={styles.ratingContainer}>
                    <Text style={styles.ratingText}>⭐ {Number(rating).toFixed(1)}</Text>
                </View>
            </View>
        </View>
    );
};

export default ProfessionalCard;