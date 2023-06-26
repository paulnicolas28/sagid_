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

}

export default data