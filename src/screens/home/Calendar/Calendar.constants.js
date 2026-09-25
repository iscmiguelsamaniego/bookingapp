export const WEEK_DAYS = [
    { day: 'Mon', date: '21', index: 1 },
    { day: 'Tue', date: '22', index: 2 },
    { day: 'Wed', date: '23', index: 3, isSelected: true },
    { day: 'Thu', date: '24', index: 4 },
    { day: 'Fri', date: '25', index: 5 },
    { day: 'Sat', date: '26', index: 6 },
    { day: 'Sun', date: '20', index: 0 },
];

export const HOURS = [
    '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM'
];

export const INITIAL_EVENTS = [
    {
        id: 'e1',
        dayIndex: 1,
        startHour: '4 PM',
        title: 'Albañil',
        type: 'masonry',
    },
    {
        id: 'e2',
        dayIndex: 3,
        startHour: '3 PM',
        title: 'Plomero',
        type: 'plumbing',
    },
    {
        id: 'e3',
        dayIndex: 2,
        startHour: '6 PM',
        title: 'Carpintero',
        type: 'carpentry',
    },
];