const data = {
            
    indicateurs_economiques: [
        {
            title:"de coûts d'entretien",
            unit: "€",
        },
        {
            title:"par km entretenu",
            value: 344,
            value_after : 344,
            unit: "€/km",
        },
        {
            title:"de coûts liés au fauchage",
            value: 1845000,
            value_after : 1845000,
            unit: "€",
        },
        {
            title:"de coûts de traitement des déchets",
            value: 421000,
            value_after : 421000,
            unit: "€",
        },
        {
            title:"de revenus dus à la valorisation des déchets",
            value: 781000,
            value_after : 781000,
            unit: "€",
        },
    ],

    indicateurs_ecosysteme: [
        {
            title:'Qualité du sol', //'Fonction de maintien de la matière organique et de la qualité du sol',
            value: 1,
            value_after : 1,
            text:"La fonction de maintien de la matière organique intègre à la fois la stabilisation des sols, le contrôle de l’érosion et la capacité de structuration des sols. Il s’agit d’évaluer la capacité du bord de route à stabiliser et structurer les sols et à contrôler l’érosion. Le contrôle de l’érosion s’intéresse au flux de matières arrachées et transportées, ce qui consiste à évaluer ce qui empêche la perte de sol fertile. La structuration du sol conditionne les capacités de stockage, de filtration et de rétention du sol et détermine la pénétrabilité des racines et la constitution de la biomasse végétale.  ",
            advices: {
                positifs : ["Peut-être amélioré en utilisant des techniques d’entretien plus respectueuse"],
                negatifs : ["Est négligée lorsque l’entretien est trop fréquent ou trop intensif"]
            },
            analyse: {
                good: "Le sol est stable et structuré, il n’y a pas d’érosion.",
                medium: "Le sol est stable et structuré, il y a une érosion modérée.",
                bad: "Le sol est instable et non structuré, il y a une érosion importante."
            }
        },
        {
            title:'Maintien de la biodiversité', //'Fonction de maintien de la biodiversité',
            value: 2,
            value_after : 2,
            text:"La fonction de maintien de la biodiversité est complexe, car les bords de route jouent à la fois un rôle de corridor écologique et de réservoir de la biodiversité. Il s’agit d’évaluer la capacité des bords de route à fournir un espace propice à la présence, au maintien et au développement de la faune et de la flore locale. Le maintien des populations animales et végétales dépend des interactions entre les différents espaces permettant le brassage génétique, l’accès aux ressources, à des milieux de reproduction et de vie. Les interactions spatiales se font ente les réservoirs de biodiversité (lieux de vie et reproduction des espèces) grâce aux corridors écologiques (lieux de déplacement, de dispersion et d’accueil des espèces). Ces corridors sont les haies, talus, bandes enherbées, cours d’eau (Le Guillou 2020). ",
            advices: {
                positifs : ["Peut-être amélioré en utilisant des techniques d’entretien plus respectueuse"],
                negatifs : ["Est négligée lorsque l’entretien est trop fréquent ou trop intensif"]
            },
            analyse: {
                good: "La biodiversité est présente et diversifiée, les corridors écologiques sont fonctionnels.",
                medium: "La biodiversité est présente mais peu diversifiée, les corridors écologiques sont peu fonctionnels.",
                bad: "La biodiversité est absente ou peu présente, les corridors écologiques sont inexistants."
            }
        },
        {
            title:'Fonction hydrologique', //'Fonction hydrologique',
            value: 3,
            value_after : 3,
            text:"La fonction hydrologique intègre des processus d’épuration de l’eau et de diminution du ruissellement. Il s’agit d’évaluer la capacité des bords de route à stocker et évacuer l’eau et à retarder le ruissellement vers les autres écosystèmes et leur capacité à restaurer/remédier l’eau. La capacité des bords de route à stocker et évacuer l’eau fait référence à la réserve utile des sols, il s’agit d’évaluer leur capacité à contenir et restituer l’eau aux racines (rétention de l’eau) pour la vie végétale. La capacité des bords de route porte sur la purification de l’eau, notamment par le biais du recyclage des nutriments et à la filtration des particules d’impuretés. ",
            advices: {
                positifs : ["Peut-être amélioré en utilisant des techniques d’entretien plus respectueuse"],
                negatifs : ["Est négligée lorsque l’entretien est trop fréquent ou trop intensif"]
            },
            analyse: {
                good: "Les bords de route stockent et évacuent l’eau, ils ont une capacité de rétention et de filtration de l’eau.",
                medium: "Les bords de route stockent et évacuent l’eau, ils ont une capacité de rétention mais pas de filtration de l’eau.",
                bad: "Les bords de route ne stockent pas l’eau, ils n’ont pas de capacité de rétention et de filtration de l’eau."
            }

        },
        {
            title:'Microclimat ', //'Fonction brise-vent et diminution des températures',
            value: 1,
            value_after : 1,
            text:"Les végétaux, les sols et l’eau présents au sein de l’écosystème urbain peuvent jouer un rôle significatif dans l’abaissement des températures locales et la végétation ligneuse des bords de route joue un rôle de brise-vent. Cette fonction est très dépendante du recouvrement arboré (formation ligneuse) du bord de route, i.e. la proportion d’arbres et d’arbustes sur la portion concernée (Le Guillou 2020).  ",
            advices: {
                positifs : ["Peut-être amélioré en utilisant des techniques d’entretien plus respectueuse"],
                negatifs : ["Est négligée lorsque l’entretien est trop fréquent ou trop intensif"]
            },  
            analyse: {
                good: "Les bords de route ont un recouvrement arboré important, ils ont un rôle de brise-vent et d’abaissement des températures.",
                medium: "Les bords de route ont un recouvrement arboré moyen, ils ont un rôle de brise-vent mais pas d’abaissement des températures.",
                bad: "Les bords de route ont un recouvrement arboré faible, ils n’ont pas de rôle de brise-vent et d’abaissement des températures."
            }
        },
        {
            title:'Stockage du carbone', //'Fonction de stockage du carbone',
            value: 5,
            value_after : 5,
            text:"La fonction de stockage du carbone représente la capacité du bord de route à accumuler du carbone dans le sol et dans la végétation luttant ainsi contre le réchauffement climatique. Cette fonction est principalement dépendante du type de sol ainsi que du type de végétation présente sur le bord de route. ",
            advices: {
                positifs : ["Peut-être amélioré en utilisant des techniques d’entretien plus respectueuse"],
                negatifs : ["Est négligée lorsque l’entretien est trop fréquent ou trop intensif"]
            },
            analyse: {
                good: "Les bords de route ont une capacité de stockage du carbone importante.",
                medium: "Les bords de route ont une capacité de stockage du carbone moyenne.",
                bad: "Les bords de route ont une capacité de stockage du carbone faible."
            }
        },
        {
            title:"Atténuation des risques naturels", //"Fonction de régulation de la qualité de l'air",
            value: 2,
            value_after : 2,
            text:"L’atténuation des risques naturels concernent en majeur partie les risques d’inondations et d’incendie. L’aménagement du bord de route mais aussi son entretien vont avoir un impact sur sa capacité à limiter ces risques. ",
            advices: {
                positifs : ["Peut-être amélioré en utilisant des techniques d’entretien plus respectueuse"],
                negatifs : ["Est négligée lorsque l’entretien est trop fréquent ou trop intensif"]
            },
            analyse: {
                good: "Les bords de route ont une capacité à atténuer les risques naturels.",
                medium: "Les bords de route ont une capacité moyenne à atténuer les risques naturels.",
                bad: "Les bords de route n’ont pas de capacité à atténuer les risques naturels."
            }
        },
        {
            title:'Sécurité ', //'Fonction de régulation des nuisances et des risques naturels',
            value: 4,
            value_after : 4,
            text:"L’entretien des bords de route a un impact sur la sécurité des usagers de la route. Il peut aussi bien s’agir d’automobilistes, de cyclistes que de piétons. La sécurité est assurée en limitant la hauteur de la végétation afin d’assurer la visibilité des usagers en particulier dans les zones à risque comme les virages et les intersections. L’entretien des bords de route permet également de permettre à tout usager d’emprunter le bas-côté en cas de nécessité. ",
            advices: {
                positifs : ["Peut-être amélioré en utilisant des techniques d’entretien plus respectueuse"],
                negatifs : ["Est négligée lorsque l’entretien est trop fréquent ou trop intensif"]
            },
            analyse: {
                good: "Les bords de route sont entretenus de manière à assurer la sécurité des usagers.",
                medium: "Les bords de route sont entretenus de manière à assurer la sécurité des usagers mais peuvent être améliorés.",
                bad: "Les bords de route ne sont pas entretenus de manière à assurer la sécurité des usagers."
            }
        }
    ],

    indicateurs_ges: [
        {
            title:"émises lors de l'entretien des bords de route",
            new_york: 1000,
            subtitle: "soit l'équivalent de" ,
            subtitle_2: "allers retours Paris - New York",
            unit: "kg CO2e",
        },
        {
            title:"émises lors de la valorisation des déchets",
            value: 500,
            value_after : 500,
            unit: "kg CO2e",
        },
        {
            title:"émises lors du fauchage en damier",
            value: 1500,
            value_after : 1500,
            unit: "kg CO2e",
        },
        {
            title:"émises lors du fauchage avec collecte",
            value: 6642,
            value_after : 6642,
            unit: "kg CO2e",
        },
    ],

    notes_ecosysteme: [
        { title : 'pour la capacité du réseau à fournir des services écosystémiques', 
        value : 20,
        value_after : 20
        },
        { title : "pour l'impact de l'entretien sur la capacité", 
        value : 50,
        value_after : 50
        },
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


//const jsonData = JSON.stringify(data, null, 2);
//const fs = require('fs');
//fs.writeFileSync('data.json', jsonData);