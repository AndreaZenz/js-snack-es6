// Snack 1:
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal


const bici = [
    {
        nome: "mountain bike",
        peso: 60
    },
    {
        nome: "bici da città",
        peso: 40
    },
    {
        nome: "bmx",
        peso: 50
    },
    {
        nome: "bici elettrica",
        peso: 90
    }
]

// const findLighterBike = (arrayList) => {
//     let lighterBike;

//     for (let i = 0; i < arrayList.length; i++) {
//         const{name, weight} = arrayList[i];

//         if(!lighterBike || weight < lighterBike.weight) {
//             lighterBike = {
//                 name,
//                 weight
//             }
//         }
//     }
//     return lighterBike
// }
// const foundLighterBike = findLighetrBike(bicycleList);

bici.sort((a, b) => parseFloat(a.peso) - parseFloat(b.peso));

console.log(`la bicicletta ${bici[0].nome} pesa ${bici[0].peso}kg ed è la bicicletta piu leggera`);


// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


const squadreDiCalcio = [
    {
        nome:"roma",
        punti_fatti:0,
        falli_subiti:0,
    },
    {
        nome: "real Madrid",
        punti_fatti: 0,
        falli_subiti: 0,
    },
    {
        nome:"juventus",
        punti_fatti:0,
        falli_subiti:0,
    },
    {
        nome:"lazio",
        punti_fatti:0,
        falli_subiti: 0,
    },
    {
        nome:"milan",
        punti_fatti: 0,
        falli_subiti: 0,
    }
]

let datiSquadreDiCalcio = [ ]

for (let i = 0; i < squadreDiCalcio.length; i++) {
    squadreDiCalcio[i].punti_fatti = numeroRandom(1, 100)
    squadreDiCalcio[i].falli_subiti = numeroRandom(1, 30)
    // datiSquadreDiCalcio.push(squadreDiCalcio[i].nome)
    // datiSquadreDiCalcio.push(squadreDiCalcio[i].falli_subiti)
}

for (const {nome, falli_subiti} of squadreDiCalcio){
    datiSquadreDiCalcio.push({nome, falli_subiti})
}


console.log(squadreDiCalcio);


console.log(datiSquadreDiCalcio);


function numeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}





























