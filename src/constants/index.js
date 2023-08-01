import{
    kayak,
    rent,
    booking,
    planning,
    itiwit,
    kissp,
    sevlor,
    attack,
    sun,
    rain,
    cloudy
} from "../assets"


export const navLinks = [
    {
        id:"about", 
        title:"About"
    },
    {
        id:"kayak", 
        title:"Kayak"
    },
    {
        id:"booking", 
        title:"Booking"
    }
];

    const services = [
        {
            title: "Kayak and Equipement Rental",
            icon: kayak,
            parag:"ohdqbspmqkncnqdnfmldojeflfnqkdflqdnfdeihfid"

        },
        {
            title: "Online Booking",
            icon: booking,
            parag:"ohdqbspmqkncnqdnfmldojeflfnqkdflqdnfdeihfid"


        },
        {
            title:"Rental And Payement Informations",
            icon:rent,
            parag:"ohdqbspmqkncnqdnfmldojeflfnqkdflqdnfdeihfid"

        },
        {
            title: "Guided Tours And Safety Instructions",
            icon: planning,
            parag:"ohdqbspmqkncnqdnfmldojeflfnqkdflqdnfdeihfid"

        }

    ];


    const products = [
        {
            name:"ITIWIT",
            description:"Kayak gonflable randonnee x100+ 4 places",
            image:sevlor

        },
        {
            name:"ITIWIT",
            description:"Canoe kayak gonflable randonnee fond haute pression drop stitch x100+ 2 places",
            image:kissp
        },
        {
            name:"ITIWIT",
            description:"Canoë gonflable drop stitch haute pression x500 4 places (2 adultes + 2 enfants)",
            image:sevlor,
        }
    ];

    const bookingproducts=[
        {
            name:"ITIWIT",
            description:"Kayak gonflable randonnee x100+ 4 places",
            image:sevlor,
            price:"2000DZD"
        },
        {
            name:"ITIWIT",
            description:"Kayak gonflable randonnee x100+ 4 places",
            image:sevlor,
            price:"2000DZD"
        },
        {
            name:"ITIWIT",
            description:"Kayak gonflable randonnee x100+ 4 places",
            image:sevlor,
            price:"2000DZD"
        },
        {
            name:"ITIWIT",
            description:"Kayak gonflable randonnee x100+ 4 places",
            image:sevlor,
            price:"2000DZD"
        }
    ];

    const weatherState =[
        {
            state:"It's A Beautiful Day For an outdoor activity!",
            icon:sun,
        },
        {
            state:"Rrrrr You should stay safe today and avoid outdoor activities",
            icon:rain
        },
        {
            state:"A little bit cloudy but the waves will be gentle",
            icon:sun
        },
    ]
export {services,products,bookingproducts,weatherState}