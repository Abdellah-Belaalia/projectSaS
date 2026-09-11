const prompt = require("prompt-sync")();

const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 46
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 47
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 48
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 49
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 48
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 49
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];
let ticket = [
    {
        id: 1,
        passengerName: "ahmed",
        tripId: 1,
        seatNumber: 1,
        price: 25
    },
    {
        id: 2,
        passengerName: "hamza",
        tripId: 1,
        seatNumber: 2,
        price: 25
    },
    {
        id: 3,
        passengerName: "salah",
        tripId: 1,
        seatNumber: 3,
        price: 25
    },
    {
        id: 4,
        passengerName: "nezha",
        tripId: 2,
        seatNumber: 1,
        price: 90
    },
    {
        id: 5,
        passengerName: "hamid",
        tripId: 2,
        seatNumber: 2,
        price: 90
    },
    {
        id: 6,
        passengerName: "hafida",
        tripId: 2,
        seatNumber: 3,
        price: 90
    },
    {
        id: 7,
        passengerName: "malika",
        tripId: 3,
        seatNumber: 1,
        price: 140
    },
    {
        id: 8,
        passengerName: "souad",
        tripId: 3,
        seatNumber: 2,
        price: 140
    },
    {
        id: 9,
        passengerName: "aziz",
        tripId: 4,
        seatNumber: 1,
        price: 65
    },
    {
        id: 10,
        passengerName: "ahmed",
        tripId: 5,
        seatNumber: 1,
        price: 110
    },
    {
        id: 11,
        passengerName: "nouaal",
        tripId: 1,
        seatNumber: 4,
        price: 25
    },
    {
        id: 12,
        passengerName: "badr",
        tripId: 6,
        seatNumber: 1,
        price: 120
    },
    {
        id: 13,
        passengerName: "aya",
        tripId: 5,
        seatNumber: 2,
        price: 110
    },
];
let ticketId = ticket.length + 1;
function affichage() {
    console.log("=== TRAJETS DISPONIBLES ===")
    for (let traj of trips) {
        if (traj.availableSeats > 0) {
            console.log(
                "#", traj.id, traj.departure, "→", traj.destination, `\n`,
                "Départ : ", traj.departureTime, `\n`,
                "Arrivé : ", traj.arrivalTime, `\n`,
                "Prix : ", traj.price, "DH", `\n`,
                "Places disponibles : ", traj.availableSeats, "\n")
        }
    }
}
function acheter() {
    let passengerName = prompt("Nom de passager :")
    let traject = parseInt(prompt("Entrez le Id de trips : "));
    //le tableau commence par la longueur +1 car on a ajouté 13 ticket manuallement
    let trouve = false;
    for (let i = 0; i < trips.length; i++) {
        if (trips[i].id === traject && trips[i].availableSeats > 0) {  //si le trips id egale le nombre entré par l'utilsisateur *et* les placses disponibles supérieure à 0 le condition est true et on créer une ticket
            trouve = true;
            let seatNumber = 1 // on donne le nombre 1 au seatNumbre 
            let place = true // on cherche la première place disponible
            while (place) { // on utilise une boucle while parce que on ne sait pas combien des fois elle va tourne
                place = false;  // on pose que la première place n'a pas disponible
                for (let j = 0; j < ticket.length; j++) {
                    if (ticket[j].tripId == trips[i].id && ticket[j].seatNumber == seatNumber) { // on compare le trip ID de ticket avec le id de trip pour savoir si la place est disponible
                        place = true // si la place est n'a pas disponible 
                        seatNumber++  // on increment la valeur de seat Numbre definie ultérieurement avec 1 pour rechercher la deuxieme place maintenant
                        break;
                    }
                }
            }
            let newTicket = {
                id: ticketId++,
                passengerName: passengerName,
                tripId: trips[i].id,
                seatNumber: seatNumber,   //le nombre des places disponible est 50 ce qu'il fait on doit dimunier le nombre des places ajouté d'après les places disponible puis en ajouter 1 car l'index début d'après 0
                price: trips[i].price
            }
            ticket.push(newTicket) //ticket[ticket.length] = newTicket ; la longueur du tableau est à l'index 0 et ticket egal 1 après la première achate/newTicket 
            trips[i].availableSeats--
            console.log(`============Ticket acheté avec succès============\nTicket :${newTicket.id}\nPassenger :${passengerName}\nTraject : ${trips[i].departure} → ${trips[i].destination}\nPlace : ${newTicket.seatNumber}`)
            break;
        }
        else if (trips[i].id === traject && trips[i].availableSeats == 0) {
            trouve = true
            console.log("Train complet")
        }
    }
    if (trouve === false) {
        console.log("Trajet introuvable");
    }
}
function affichageTick() {
    console.log(`\n========== TICKETS ==========`)
    for (let i = 0; i < ticket.length; i++)
        console.log(`=================================\n        RAILWAY STATION\nTicket :${ticket[i].id}\nPassenger : ${ticket[i].passengerName}\nTraject : ${trips[i].departure} → ${trips[i].destination}\nPrix : ${trips[i].price}DH\n=================================`)
}
function annuler() {
    let trouve = false;
    let ticketId = parseInt(prompt("Saisissiez l\'Identifiant de ticket : "))
    for (let i = 0; i < ticket.length; i++) {
        if (ticket[i].id == ticketId) {
            console.log("Etes-vous sûr de supprimer cette ticket ?\n 1 . Oui\n 2 . Non")
            let confirm = Number(prompt("Entrez votre choix :"));
            trouve = true;
            if (confirm == 1) {
                ticket.splice(i, 1)
                console.log("Ticket annulé avec succès.")
                for (let j = 0; j < trips.length; j++) {
                    if (trips[j].id == ticket[i].tripId)
                        trips[j].availableSeats++
                }
            }
        }
    }

    if (trouve == false) {
        console.log("Ticket introuvable.")
    }
}
function rechercher() {
    let passagerName = prompt("Entrez le nom de passager : ")
    let trouve = false // on suppose que trouve = false avant que la boucle tourne 
    for (let i = 0; i < ticket.length; i++) {
        if (ticket[i].passengerName === passagerName) { // si le nom entré par l'utilisateur === le nom trouvé dans le tableau des ticket
            trouve = true; // on a trouvé la chaîne d'Caract cherchée 
            let departureCity = "";
            let destinationCity = "";
            for (let j = 0; j < trips.length; j++) { // on cherche maintenant dans le tableau des trips
                if (trips[j].id === ticket[i].tripId) { // si le trip ID === le nombre d'ID de trip dans le tableau de ticket
                    departureCity = trips[j].departure; // on remplaçe les "string" déjà saisi par la ville de départ
                    destinationCity = trips[j].destination;
                    break;
                }
            }
            console.log(`\n====================\n Ticket #${ticket[i].id}\n Trajet : ${departureCity} → ${destinationCity}\n Place : ${ticket[i].seatNumber}\n Prix : ${ticket[i].price}`)
        }
    }
    if (trouve === false) // si la chaîne d'Caract === false(pas trouvée)
        console.log("Il n'y a aucun ticket avec le nom suivant");
}
function filter() {
    let searchedDepart = prompt(`Entrez la ville de départ : `)
    let trouve = false // on suppose que "trouve" est faux avant de entrer dans la boucle de tableau 
    for (let i = 0; i < trips.length; i++) { //on tourne dans le tableau des trips 
        if (trips[i].departure.toLowerCase() === searchedDepart.toLowerCase()) { //pour trouve la ville de départ dans le tableau de trips
            trouve = true
            console.log(`\n${trips[i].departure} → ${trips[i].destination} : ${trips[i].price}DH\n`)
        }
    }
    if (trouve === false) {
        console.log(`\nIl n'y a aucun départ d\'après cette ville !!`)
    }
}
function trier() {
    for (let i = 0; i < trips.length; i++) {
        for (let j = i; j < trips.length; j++) {
            if (trips[i].price > trips[j].price) {
                let temp = trips[i];
                trips[i] = trips[j];
                trips[j] = temp;
            }
        }
    }
    console.log(`\nLes trajets après filtrage par Prix Croissant\n`)
    for (let i = 0; i < trips.length; i++) {
        console.log(`\n${i + 1} : ${trips[i].departure} → ${trips[i].destination} : ${trips[i].price}DH\n`)
    }
}
function statistique() {
    function ticketNumb() {
        console.log(`Le nombre des ticket vendus est : ${ticket.length}`)
    };
    function chiffreDaffaire() {
        let ticketTotNumb = 0
        for (let i = 0; i < ticket.length; i++) {
            ticketTotNumb = ticketTotNumb + ticket[i].price
        }
        console.log(`Le chiffre d\'affaire est : ${ticketTotNumb}DH.`)
    }
    // function plusVendus() {
    //     let tripIdPlus = 0
    //     for (let i = 0; i < trips.length; i++) {
    //         if (trips[i].availableSeats == ) {
    //             tripIdPlus = tripIdPlus + ticket[i].tripId
    //         }
    //         console.log(`${trips[i].departure} → ${trips[i].destination}\n${tripIdPlus} tickets vendus.`)
    //     }
    // }
    do {
        console.log(`\n1. Nombre total de tickets vendus \n2. Chiffre d'affaires total \n3. Trajet le plus vendu \n4. Quitter\n`)
        do {
            option = parseInt(prompt('Entrez votre choix : '))
            if (option < 1 || option > 4)
                console.log("Choix indisponible !! Essayer ultérierement")
        }
        while (option < 1 || option > 4);
        switch (option) {
            case 1:
                ticketNumb()
                break;
            case 2:
                chiffreDaffaire();
                break;
            // case 3:
            //     plusVendus();
            //     break;
            case 4:
                console.log("Vous avez quitter")
                break;
            default:
                console.log("Choix invalid");
        }
    }
    while (option !== 4);
}
let option;
do {
    console.log(`================================= 
        RAILWAY MANAGER 
================================= 
1. Afficher les trajets 
2. Acheter un ticket 
3. Afficher les tickets 
4. Annuler un ticket 
5. Rechercher un ticket 
6. Filtrer les trajets 
7. Trier les trajets 
8. Statistique
0. Quitter `);

    do {
        option = parseInt(prompt('Entrez votre choix : '))
        if (option < 0 || option > 8)
            console.log("Choix indisponible !! Essayer ultérierement")
    }
    while (option < 0 || option > 8);

    switch (option) {
        case 1:
            affichage()
            break;
        case 2:
            acheter();
            break;
        case 3:
            affichageTick();
            break;
        case 4:
            annuler();
            break;
        case 5:
            rechercher();
            break;
        case 6:
            filter();
            break;
        case 7:
            trier();
            break;
        case 8:
            statistique();
            break;
        case 0:
            console.log("Vous avez quitter")
            break;
        default:
            console.log("Choix invalid");
    }
} while (option !== 0)
