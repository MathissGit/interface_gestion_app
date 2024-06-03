import FabriceEboue from '../assets/profil.jpg';

export const plan = [
    {
        id: '1',
        name: 'P1',
        description: 'description plan 1',
        cost: '1000€',
        duration: '1 months',
    },
    {
        id: '2',
        name: 'P2',
        description: 'description plan 2',
        cost: '2000€',
        duration: '2 months',
    },
    {
        id: '3',
        name: 'P3',
        description: 'description plan 3',
        cost: '3000€',
        duration: '3 months',
    } 
]

export const cours = [
    {
        id: '1',
        coachName: 'Nahim Benbahloulie',
        name: 'Introduction to Fitness',
        description: 'A beginner course on basic fitness routines and principles.',
        duration: 4,//mois
        cost: 50,//euros 
        certification: 'Active',
    },
    {
        id: '2',
        coachName: 'Nahim Benbahloulie',
        name: 'Advanced Strength Training',
        description: 'An advanced course focused on building muscle strength.',
        duration: 1,
        cost: 100,
        certification: 'Active',
    },
    {
        id: '3',
        coachName: 'Pierre Roche',
        name: 'Yoga for Beginners',
        description: 'An introductory course to yoga for beginners.',
        duration: 6,
        cost: 60,
        certification: 'Inactive',
    },
    {
        id: '4',
        coachName: 'Pierre Roche',
        name: 'Mindfulness and Meditation',
        description: 'Learn the basics of mindfulness and meditation techniques.',
        duration: 4,
        cost: 40,
        certification: 'Inactive',
    },
    {
        id: '5',
        coachName: 'Paul Lefevre',
        name: 'Basic Nutrition',
        description: 'Understanding the basics of nutrition and healthy eating.',
        duration: 3,
        cost: 30,
        certification: 'None',
    },
    {
        id: '6',
        coachName: 'Thomas Blanc',
        name: 'Cardio Workouts',
        description: 'Intensive cardio workouts to improve cardiovascular health.',
        duration: 5,
        cost: 70,
        certification: 'Active',
    },
    {
        id: '7',
        coachName: 'Thomas Blanc',
        name: 'HIIT Training',
        description: 'High-Intensity Interval Training for quick and effective results.',
        duration: 6,
        cost: 80,
        certification: 'Active',
    }
];

export const users = [
    {
        id: '1',
        lastname: 'Eboué',
        firstname: 'Fabrice',
        datebirth: '01/02/1990',
        email: 'fabrice@eboue.com',
        plan: 'P1',
        role: 'patient',
        avatar: FabriceEboue,
        dateRegistration: '28/05/2024'
    },
    {
        id: '2',
        lastname: 'Benbahloulie',
        firstname: 'Nahim',
        datebirth: '05/07/1800',
        email: 'nahim@nahim.com',
        certification: 'Active',
        role: 'Coach',
        avatar: FabriceEboue,
        dateRegistration: '28/05/2024'
    },
    {
        id: '3',
        lastname: 'Sineux',
        firstname: 'Mathis',
        datebirth: '20/01/2003',
        email: 'mathis@mathis.com',
        plan: 'P1',
        role: 'patient',
        avatar: FabriceEboue,
        dateRegistration: '28/05/2024'
    },
    {
        id: '4',
        lastname: 'Werquin',
        firstname: 'Lucien',
        datebirth: '01/02/1990',
        email: 'lucien@lucien.com',
        plan: 'P3',
        role: 'patient',
        avatar: FabriceEboue,
        dateRegistration: '28/05/2024'
    },
    {
        id: '5',
        lastname: 'Lamonier',
        firstname: 'Alexis',
        datebirth: '01/02/1990',
        email: 'alexis@alexis.com',
        plan: 'P2',
        role: 'patient',
        avatar: FabriceEboue,
        dateRegistration: '28/05/2024'
    },
    {
        id: '6',
        lastname: 'admin',
        firstname: 'admin',
        datebirth: '01/02/1990',
        email: 'admin@admin.com',
        role: 'admin',
        avatar: FabriceEboue,
        dateRegistration: '28/05/2024'
    },
    {
        id: '7',
        lastname: 'Durand',
        firstname: 'Marie',
        datebirth: '15/04/1985',
        email: 'marie@durand.com',
        plan: 'P1',
        role: 'patient',
        avatar: FabriceEboue,
        dateRegistration: '28/05/2024'
    },
    {
        id: '8',
        lastname: 'Dupont',
        firstname: 'Jean',
        datebirth: '22/11/1978',
        email: 'jean@dupont.com',
        plan: 'P3',
        role: 'patient',
        avatar: FabriceEboue,
        dateRegistration: '28/05/2024'
    },
    {
        id: '9',
        lastname: 'Martin',
        firstname: 'Sophie',
        datebirth: '30/08/1995',
        email: 'sophie@martin.com',
        plan: 'P2',
        role: 'patient',
        avatar: FabriceEboue,
        dateRegistration: '28/05/2024'
    },
    {
        id: '10',
        lastname: 'Roche',
        firstname: 'Pierre',
        datebirth: '12/12/1960',
        email: 'pierre@roche.com',
        certification: 'Inactive',
        role: 'Coach',
        avatar: FabriceEboue,
        dateRegistration: '28/05/2024'
    },
    {
        id: '11',
        lastname: 'Bernard',
        firstname: 'Lucie',
        datebirth: '09/07/1988',
        email: 'lucie@bernard.com',
        plan: 'P1',
        role: 'patient',
        avatar: FabriceEboue,
        dateRegistration: '28/05/2024'
    },
    {
        id: '12',
        lastname: 'Petit',
        firstname: 'Hugo',
        datebirth: '14/03/1992',
        email: 'hugo@petit.com',
        plan: 'P2',
        role: 'patient',
        avatar: FabriceEboue,
        dateRegistration: '28/05/2024'
    },
    {
        id: '13',
        lastname: 'Girard',
        firstname: 'Emma',
        datebirth: '18/01/2000',
        email: 'emma@girard.com',
        plan: 'P3',
        role: 'patient',
        avatar: FabriceEboue,
        dateRegistration: '28/05/2024'
    },
    {
        id: '14',
        lastname: 'Lefevre',
        firstname: 'Paul',
        datebirth: '22/10/1982',
        email: 'paul@lefevre.com',
        certification: 'None',
        role: 'Coach',
        avatar: FabriceEboue,
        dateRegistration: '28/05/2024'
    },
    {
        id: '15',
        lastname: 'Moreau',
        firstname: 'Chloe',
        datebirth: '02/06/1996',
        email: 'chloe@moreau.com',
        plan: 'P1',
        role: 'patient',
        avatar: FabriceEboue,
        dateRegistration: '28/05/2024'
    },
    {
        id: '16',
        lastname: 'Fournier',
        firstname: 'Louis',
        datebirth: '25/12/1975',
        email: 'louis@fournier.com',
        plan: 'P2',
        role: 'patient',
        avatar: FabriceEboue,
        dateRegistration: '28/05/2024'
    },
    {
        id: '17',
        lastname: 'Rousseau',
        firstname: 'Julie',
        datebirth: '05/11/1987',
        email: 'julie@rousseau.com',
        plan: 'P3',
        role: 'patient',
        avatar: FabriceEboue,
        dateRegistration: '28/05/2024'
    },
    {
        id: '18',
        lastname: 'Blanc',
        firstname: 'Thomas',
        datebirth: '17/09/1993',
        email: 'thomas@blanc.com',
        certification: 'Active',
        role: 'Coach',
        avatar: FabriceEboue,
        dateRegistration: '28/05/2024'
    },
    {
        id: '19',
        lastname: 'Garnier',
        firstname: 'Camille',
        datebirth: '11/02/2001',
        email: 'camille@garnier.com',
        plan: 'P1',
        role: 'patient',
        avatar: FabriceEboue,
        dateRegistration: '28/05/2024'
    },
    {
        id: '20',
        lastname: 'Duval',
        firstname: 'Antoine',
        datebirth: '24/07/1980',
        email: 'antoine@duval.com',
        plan: 'P2',
        role: 'patient',
        avatar: FabriceEboue,
    }
]