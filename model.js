const model = {
    app: {
        currentPage: 'frontPage',
        isLoggedIn: false,

    },
    
    inputs: {
        loginForm: {
            username: null,
            password: null,
        },

        register: {
            name: null,
            lastName: null,
            email: null,
            username: null,
            password: null,
            repeatPassword: null,
        },
        searchField:{
            searchText: null,
        },
        
        ratingForm:{
            rating: null,
        },
        
        messages: {
            message: null,
        },

        notifications: {
            notification: null,
        },

    },

    data: {
        categories: {
            animals: ['katt', 'hund', 'fugl', 'hamster', 'slange'],
            counties: ['Akershus', 'Oslo', 'Vestland', 'Trøndelag', 'Innlandet', 'Agder', 'Østfold', 'Møre og Romsdal', 'Buskerud', 'Vestfold', 'Nordland', 'Telemark', 'Troms', 'Finnmark']
        },
        users: [
            {
                username: 'varinlinnea',
                password: '',
                email: 'varino@getacademy.no',
                name: 'Vårin',
                animalId: [],
                userId: 0,
                isAdmin: false,
                picture: '',
            },
        ],
        animals: [
            {
                animalId: 0,
                name: 'Magnus',
                age: 14,
                animal: 'katt',
                animalBreed: '',
                kg: '',
                sex: 'male',
                favouriteActivities: ['sove', 'spise'],
                location: 'Vestland',
                readyForPlay: true,
                healthInformation: 'frisk',
                availability: '',
                picture: 'noe.jpg',
                rating: 0,
            },
        ],

        messages: [
            {
                messageId: 0,
                sender: 'varinlinnea',
                receiver: 'anonym',
                message: 'Hei, vil gjerne sette opp en playdate med dere :)',
                date: '2021-05-24',
            },
        ],

        notifications: [
            {
                notificationId: 0,
                sender: 'anonym',
                receiver: 'varinlinnea',
                notification: 'Ok, la oss sette opp en playdate!',
                date: '2021-05-24',
            },
        ],

    },
};

function login(username, password) {
    const user = model.data.users.find(user => user.username === username);
    if (user) {
        model.app.isLoggedIn = true;
        model.app.currentPage = 'frontPage';
    } else {
        alert('Feil brukernavn eller passord');
    }
}

function register(name, lastName, email, username, password, repeatPassword) {
    if ( password != repeatPassword) {
        alert('Passordene er ikke like');
        return;
    }
    const existingUser = model.data.users.find(user => user.username === username);
    if (existingUser) {
        alert('Brukernavnet er allerede i bruk');
        return;
    }
    const newUser = {
        username,
        password,
        email,
        name,
        lastName,
        animalId: [],
        userId: model.data.users.length,
        isAdmin: false,
        picture: '',
    };
    model.data.users.push(newUser);
    alert('Bruker opprettet');
    model.app.currentPage = 'frontPage';
    updateView();
}