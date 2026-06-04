import { useState } from 'react';

export const useDatePicker = (route, navigation) => {
    const { professionalId, serviceId } = route.params || {};

    const [selectedDate, setSelectedDate] = useState('');
    const [selectedSlot, setSelectedSlot] = useState('');

    const handleContinue = () => {
        if (selectedDate && selectedSlot) {
           /* navigation.navigate('BookingSummary', {
                professionalId,
                serviceId,
                selectedDate,
                selectedSlot,
            });*/
                                navigation.navigate('Welcome');

        }
    };

    return {
        selectedDate,
        setSelectedDate,
        selectedSlot,
        setSelectedSlot,
        handleContinue,
    };
};