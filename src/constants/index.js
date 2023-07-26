import{
    kayak,
    rent,
    booking,
    planning,
    itiwit,
    kissp,
    sevlor,
    attack
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
export {services,products}