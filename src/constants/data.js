import images from "./images"

const data = {
    user: {
        name: 'SAGID',
        img: images.avt
    },
    summary: [
        {
            title: 'Sales',
            subtitle: 'Total sales today',
            value: '$1.000',
            percent: 70
        },
        {
            title: 'Orders',
            subtitle: 'Total orders today',
            value: '3000',
            percent: 49
        },
        {
            title: 'Revenue',
            subtitle: 'Total revenue today',
            value: '$678',
            percent: 38
        },
        {
            title: 'Visits',
            subtitle: 'Total visits today',
            value: '2345',
            percent: 55
        }
    ],
    revenueSummary: {
        title: 'Revenue',
        value: '$678',
        chartData: {
            labels: ['May', 'Jun', 'July', 'Aug', 'May', 'Jun', 'July', 'Aug'],
            data: [300, 300, 280, 380, 200, 300, 280, 350]
        }
    },
    overall: [
        {
            value: '300K',
            title: 'Orders'
        },
        {
            value: '9.876K',
            title: 'Customers'
        },
        {
            value: '1.234K',
            title: 'Products'
        },
        {
            value: '$5678',
            title: 'Revenue'
        }
    ],
    revenueByChannel: [
        {
            title: 'Direct',
            value: 70
        },
        {
            title: 'External search',
            value: 40
        },
        {
            title: 'Referal',
            value: 60
        },
        {
            title: 'Social',
            value: 30
        }
    ],
    revenueByMonths: {
        labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
        data: [250, 200, 300, 280, 100, 220, 310, 190, 200, 120, 250, 350]
    },

    notes_ecosysteme: [
        { title : 'pour la capacité du réseau à fournir des services écosystémiques', value : 62 },
        { title : "pour l'impact de l'entretien sur la capacité", value : 28 },
    ],


    indicateurs_ecosysteme: [
        {
            title:'Fonction de maintien de la matière organique et de la qualité du sol',
            value: 'A'
        },
        {
            title:'Fonction de maintien de la biodiversité',
            value: 'B'
        },
        {
            title:'Fonction hydrologique',
            value: 'C'
        },
        {
            title:'Fonction brise-vent et diminution des températures',
            value: 'D'
        },
        {
            title:'Fonction de stockage du carbone',
            value: 'E'
        },
        {
            title:"Fonction de régulation de la qualité de l'air",
            value: 'F'
        },
        {
            title:'Fonction de régulation des nuisances et des risques naturels',
            value: 'G'
        }
    ],
    
    indicateurs_economiques: [
        {
            title:"de coûts d'entretien",
            value: 3261000 + "€"
        },
        {
            title:"par km entretenu",
            value: 344
        },
        {
            title:"de coûts liés au fauchage",
            value: 1845000 + "€"
        },
        {
            title:"de coûts de traitement des déchets",
            value: 421000 + "€"
        },
        {
            title:"de revenus dus à la valorisation des déchets",
            value: 781000 + "€"
        },
    ],

    indicateurs_ges: [
        {
            title:"émises lors de l'entretien des bords de route",
            subtitle: "soit l'équivalent de "+ 122 +" allers retours Paris - New York",
            value: 8642 + ' tCO2e'
        },
    ],

    plan_entretien_params: [
        {
            value: '300K',
            title: 'Orders'
        },
        {
            value: '9.876K',
            title: 'Customers'
        },
        {
            value: '1.234K',
            title: 'Products'
        },
        {
            value: '$5678',
            title: 'Revenue'
        }
    ],
    regions : [
        {
            region_name: "Auvergne-Rhône-Alpes",
            departments: [
                { num_dep: "01", dep_name: "Ain" },
                { num_dep: "03", dep_name: "Allier" },
                { num_dep: "07", dep_name: "Ardèche" },
                { num_dep: "15", dep_name: "Cantal" },
                { num_dep: "26", dep_name: "Drôme" },
                { num_dep: "38", dep_name: "Isère" },
                { num_dep: "42", dep_name: "Loire" },
                { num_dep: "43", dep_name: "Haute-Loire" },
                { num_dep: "63", dep_name: "Puy-de-Dôme" },
                { num_dep: "69", dep_name: "Rhône" },
                { num_dep: "73", dep_name: "Savoie" },
                { num_dep: "74", dep_name: "Haute-Savoie" }
            ]
        },
        {
            region_name: "Bourgogne-Franche-Comté",
            departments: [
                { num_dep: "21", dep_name: "Côte-d'Or" },
                { num_dep: "25", dep_name: "Doubs" },
                { num_dep: "39", dep_name: "Jura" },
                { num_dep: "58", dep_name: "Nièvre" },
                { num_dep: "70", dep_name: "Haute-Saône" },
                { num_dep: "71", dep_name: "Saône-et-Loire" },
                { num_dep: "89", dep_name: "Yonne" },
                { num_dep: "90", dep_name: "Territoire de Belfort" }
            ]
        },
        {
            region_name: "Bretagne",
            departments: [
                { num_dep: "22", dep_name: "Côtes-d'Armor" },
                { num_dep: "29", dep_name: "Finistère" },
                { num_dep: "35", dep_name: "Ille-et-Vilaine" },
                { num_dep: "56", dep_name: "Morbihan" }
            ]
        },
        {
            region_name: "Centre-Val de Loire",
            departments: [
                { num_dep: "18", dep_name: "Cher" },
                { num_dep: "28", dep_name: "Eure-et-Loir" },
                { num_dep: "36", dep_name: "Indre" },
                { num_dep: "37", dep_name: "Indre-et-Loire" },
                { num_dep: "41", dep_name: "Loir-et-Cher" },
                { num_dep: "45", dep_name: "Loiret" }
            ]
        },
        {
            region_name: "Corse",
            departments: [
                { num_dep: "2A", dep_name: "Corse-du-Sud" },
                { num_dep: "2B", dep_name: "Haute-Corse" }
            ]
        },
        {
            region_name: "Grand Est",
            departments: [
                { num_dep: "08", dep_name: "Ardennes" },
                { num_dep: "10", dep_name: "Aube" },
                { num_dep: "51", dep_name: "Marne" },
                { num_dep: "52", dep_name: "Haute-Marne" },
                { num_dep: "54", dep_name: "Meurthe-et-Moselle" },
                { num_dep: "55", dep_name: "Meuse" },
                { num_dep: "57", dep_name: "Moselle" },
                { num_dep: "67", dep_name: "Bas-Rhin" },
                { num_dep: "68", dep_name: "Haut-Rhin" },
                { num_dep: "88", dep_name: "Vosges" }
            ]
        },
        {
            region_name: "Hauts-de-France",
            departments: [
                { num_dep: "02", dep_name: "Aisne" },
                { num_dep: "59", dep_name: "Nord" },
                { num_dep: "60", dep_name: "Oise" },
                { num_dep: "62", dep_name: "Pas-de-Calais" },
                { num_dep: "80", dep_name: "Somme" }
            ]
        },
        {
            region_name: "Île-de-France",
            departments: [
                { num_dep: "75", dep_name: "Paris" },
                { num_dep: "77", dep_name: "Seine-et-Marne" },
                { num_dep: "78", dep_name: "Yvelines" },
                { num_dep: "91", dep_name: "Essonne" },
                { num_dep: "92", dep_name: "Hauts-de-Seine" },
                { num_dep: "93", dep_name: "Seine-Saint-Denis" },
                { num_dep: "94", dep_name: "Val-de-Marne" },
                { num_dep: "95", dep_name: "Val-d'Oise" }
            ]
        },
        {
            region_name: "Normandie",
            departments: [
                { num_dep: "14", dep_name: "Calvados" },
                { num_dep: "27", dep_name: "Eure" },
                { num_dep: "50", dep_name: "Manche" },
                { num_dep: "61", dep_name: "Orne" },
                { num_dep: "76", dep_name: "Seine-Maritime" }
            ]
        },
        {
            region_name: "Nouvelle-Aquitaine",
            departments: [
                { num_dep: "16", dep_name: "Charente" },
                { num_dep: "17", dep_name: "Charente-Maritime" },
                { num_dep: "19", dep_name: "Corrèze" },
                { num_dep: "23", dep_name: "Creuse" },
                { num_dep: "24", dep_name: "Dordogne" },
                { num_dep: "33", dep_name: "Gironde" },
                { num_dep: "40", dep_name: "Landes" },
                { num_dep: "47", dep_name: "Lot-et-Garonne" },
                { num_dep: "64", dep_name: "Pyrénées-Atlantiques" },
                { num_dep: "79", dep_name: "Deux-Sèvres" },
                { num_dep: "86", dep_name: "Vienne" },
                { num_dep: "87", dep_name: "Haute-Vienne" }
            ]
        },
        {
            region_name: "Occitanie",
            departments: [
                { num_dep: "09", dep_name: "Ariège" },
                { num_dep: "11", dep_name: "Aude" },
                { num_dep: "12", dep_name: "Aveyron" },
                { num_dep: "30", dep_name: "Gard" },
                { num_dep: "31", dep_name: "Haute-Garonne" },
                { num_dep: "32", dep_name: "Gers" },
                { num_dep: "34", dep_name: "Hérault" },
                { num_dep: "46", dep_name: "Lot" },
                { num_dep: "48", dep_name: "Lozère" },
                { num_dep: "65", dep_name: "Hautes-Pyrénées" },
                { num_dep: "66", dep_name: "Pyrénées-Orientales" },
                { num_dep: "81", dep_name: "Tarn" },
                { num_dep: "82", dep_name: "Tarn-et-Garonne" }
            ]
        },
        {
            region_name: "Pays de la Loire",
            departments: [
                { num_dep: "44", dep_name: "Loire-Atlantique" },
                { num_dep: "49", dep_name: "Maine-et-Loire" },
                { num_dep: "53", dep_name: "Mayenne" },
                { num_dep: "72", dep_name: "Sarthe" },
                { num_dep: "85", dep_name: "Vendée" }
            ]
        },
        {
            region_name: "Provence-Alpes-Côte d'Azur",
            departments: [
                { num_dep: "04", dep_name: "Alpes-de-Haute-Provence" },
                { num_dep: "05", dep_name: "Hautes-Alpes" },
                { num_dep: "06", dep_name: "Alpes-Maritimes" },
                { num_dep: "13", dep_name: "Bouches-du-Rhône" },
                { num_dep: "83", dep_name: "Var" },
                { num_dep: "84", dep_name: "Vaucluse" }
            ]
        },
        {
            region_name: "La Réunion",
            departments: [
                { num_dep: "974", dep_name: "La Réunion" }
            ]
        },
        {
            region_name: "Mayotte",
            departments: [
                { num_dep: "976", dep_name: "Mayotte" }
            ]
        },
        {
            region_name: "Guadeloupe",
            departments: [
                { num_dep: "971", dep_name: "Guadeloupe" }
            ]
        },
        {
            region_name: "Martinique",
            departments: [
                { num_dep: "972", dep_name: "Martinique" }
            ]
        },
        {
            region_name: "Guyane",
            departments: [
                { num_dep: "973", dep_name: "Guyane" }
            ]
        }
    ]
}

export default data