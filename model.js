const model = {
    app: {
        currentPage: 'frontPage',

        loggedInId: 2,
        mldFunk: false,
        recieverId: null,
        senderId: null,
    },
    
    inputs: {

editUser: {
    username: '',
    password: '',
    email: '',
    name: '',
    picture: '' ,
    
},

        filters: {
            selectedAnimals: [],
            selectedCounties: [],
        },

        loginForm: {
            username: '',
            password: '',
        },

        registerForm: {
            userId: null,
            name: '',
            lastName: '',
            email: '',
            username: '',
            password: '',
            repeatPassword: '',
            animal: [],
            animalId: [],
            isAdmin: false,
            picture: '',
            isLoggedIn: true,
        },

        messages: {
            messageStorage: null,
            messageBeeingOpened: null,
        },
        
        info: 
            {
                animal: null,
                rase: null,
                name: null,
                sex: null,
                age: null,
                favouriteActivity: null,
                kg: null,
                location: null,
                readyForPlay: null,
                healthInformation: null,
                availability: null,
                rating: null,
            },
        
        searchField:{
            searchText: null,
        },
        
        ratingForm:{
            rating: null,
            comment:``,
        },
        // messages: {
        //     sender:"",
        //     receiver: "",
        //     message: "",
        //     date: new Date().toISOString().split('T')[0], // Dagens dato
        // },
        

        notifications: {
            notification: null,
        },

        animalProfile: {
            name: '',
            id: 1        
        }


    },

    data: {
        categories: {
            animals: ['katt', 'hund', 'fugl', 'hamster', 'slange'],
            
            counties: [
                'Akershus', 'Oslo', 'Vestland', 
                'Trøndelag', 'Innlandet', 'Agder', 'Østfold', 
                'Møre og Romsdal', 'Buskerud', 'Vestfold', 
                'Nordland', 'Telemark', 'Troms', 'Finnmark'
            ]
        },

        users: [
            {
                username: 'varinlinnea',
                password: '',
                email: 'varino@getacademy.no',
                name: 'Vårin',
                animalId: [1],
                userId: 1,
                isAdmin: false,
                picture: '',
                animals: [
                    {
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
                        picture: 'animalPics/magnus.jpg',
                        rating: 0,
                    },
                ],
                isLoggedIn: false,
                message: [],
                messageSender: [],
            },
            {
                username: 'test',
                password: '123',
                email: 'testmail@test.no',
                name: 'testname',
                animalId: [1],
                userId: 2,
                isAdmin: false,
                picture: '',
                animals: [
                    {
                        name: 'Pettern',
                        age: 14,
                        animal: 'hund',
                        animalBreed: '',
                        kg: '',
                        sex: 'male',
                        favouriteActivities: ['sove', 'spise'],
                        location: 'Oslo',
                        readyForPlay: true,
                        healthInformation: 'frisk',
                        availability: '',
                        picture: null,
                        rating: 0,
                    },
                ],
                isLoggedIn: true,
                message: [],
                messageSender: [],
            },
            {
                username: 'Ronny',
                password: '',
                email: 'testmail@test.no',
                name: 'Ronny',
                animalId: [1],
                userId: 3,
                isAdmin: false,
                picture: '',
                animals: [  
                    {
                        name: 'Roar',
                        age: 14,
                        animal: 'fugl',
                        animalBreed: '',
                        kg: '',
                        sex: 'male',
                        favouriteActivities: ['sove', 'spise'],
                        location: 'Vestfold',
                        readyForPlay: true,
                        healthInformation: 'frisk',
                        availability: '',
                        picture: null,
                        rating: 0,
                    }, 
                ],
                isLoggedIn: false,
                message: [],
                messageSender: [],
            },
            {
                username: 'Anne',
                password: '',
                email: 'testmail@test.no',
                name: 'Anne',
                animalId: [1],
                userId: 4,
                isAdmin: false,
                picture: '',
                animals: [
                    {
                        name: 'Kjell',
                        age: 14,
                        animal: 'slange',
                        animalBreed: '',
                        kg: '',
                        sex: 'male',
                        favouriteActivities: ['sove', 'spise'],
                        location: 'Østfold',
                        readyForPlay: true,
                        healthInformation: 'frisk',
                        availability: '',
                        picture: null,
                        rating: 0,
                    },
                ],
                isLoggedIn: false,
                message: [],
                messageSender: [],
            },

        ],

        // messages: [
        //     {
        //         messageId: 0,
        //         sender: 'varinlinnea',
        //         receiver: 'anonym',
        //         message: 'Hei, vil gjerne sette opp en playdate med dere :)',
        //         date: '2021-05-24',
        //     },
        // ],

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

function showPreview(event) {      // Forhåndsvisning av bilde når du registrerer dyr
    const file = event.target.files[0];
    const previewContainer = document.querySelector('.preview');
    previewContainer.innerHTML = ''; // Clear previous content

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.alt = 'Uploaded Image';
            img.style.maxWidth = '200px';
            img.style.borderRadius = '5px';
            previewContainer.appendChild(img);
        };
        reader.readAsDataURL(file);
    } else {
        previewContainer.innerHTML = '<p>No image selected</p>';
    }
}
