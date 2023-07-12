var fauchage_classique = {
    "mandatory" : {
        "nombre_passes" : 2,
        "nombre_agents" : 1,
        "nombre_tracteurs" : 1,
        "nombre_rotofaucheuses" : 0,
        "nombre_vsv" : 0,
        "nombre_bras_hydrauliques" : 1,
        "nombre_broyages" : 1
    },
    "modifiable" : {
        "prix_carburant" : 2,   // 2€/L
        "cout_horaire_personnel" : 20 // 20€/h
    },
    "fixed" : {
        "cout_ammortissement_tracteur" : 8.57, // 8.57€/h
        "cout_ammortissement_rotofaucheuse" : 0.95, // 0.95€/h
        "cout_ammortissement_vsv" : 34.29, // 34.29€/h
        "cout_ammortissement_bras_hydraulique" : 5.29, // 5.29€/h
        "cout_ammortissement_broyage" : 0.80,   // 0.80€/h
        "consommation_horaire_tracteur_chantier" : 15, // 15L/h
        "consommation_horaire_tracteur_transport" : 8, // 8L/h
        "consommation_horaire_vsv_chantier" : 15, // 15L/h
        "consommation_horaire_vsv_transport" : 8, // 8L/h   
    }
}

var couts = {
    "economique_total" : 0,
    "environnemental_total" : 0,
    "main_d_oeuvre_total" : 0,
    "chantier_total" : 0,
    "amortissement_total" : 0,
    "economique_unitaire" : [],
    "environnemental_unitaire" : [],
    "main_d_oeuvre_unitaire" : [],
    "chantier_unitaire" : [],
    "amortissement_unitaire" : [],
    "environnement_chantier" : 0,
    "environnement_transport" : 0,
};


function calculCoutFauchageClassique(activite, route){

    // <---- Calcul du cout de main d'oeuvre ---->
    var cout_main_d_oeuvre = 0;

        // <---- Calcul du temps de transport ---->
        var temps_transport = (route.distanceAtelier * 2) / 25.0; // 25km/h

        // <---- Calcul du temps de chantier ---->
        var temps_chantier = route.lineaire.route * activite.mandatory.nombre_passes / (
            6 * activite.mandatory.nombre_broyages +
            6 * activite.mandatory.nombre_rotofaucheuses
        );

        cout_main_d_oeuvre = (temps_transport + temps_chantier) * activite.mandatory.nombre_agents * activite.modifiable.cout_horaire_personnel;
  
    
    // <---- Calcul du cout de chantier ---->
    var cout_chantier = 0;

        // <---- Calcul du cout de carburant de transport ---->
        var cout_carburant_transport = temps_transport * (
            activite.mandatory.nombre_tracteurs * activite.fixed.consommation_horaire_tracteur_transport +
            activite.mandatory.nombre_vsv * activite.fixed.consommation_horaire_vsv_transport
        );

        // <---- Calcul du cout de carburant de chantier ---->  
        var cout_carburant_chantier = temps_chantier * (
            activite.mandatory.nombre_tracteurs * activite.fixed.consommation_horaire_tracteur_chantier +
            activite.mandatory.nombre_vsv * activite.fixed.consommation_horaire_vsv_chantier 
        );

        cout_chantier = activite.modifiable.prix_carburant * (cout_carburant_transport + cout_carburant_chantier);

    // <---- Calcul du cout de l'ammortissement ---->
    var cout_ammortissement = 0;

        // <---- Calcul du cout de l'ammortissement du transport ---->
        var cout_ammortissement_transport = 
            activite.mandatory.nombre_tracteurs * activite.fixed.cout_ammortissement_tracteur +
            activite.mandatory.nombre_vsv * activite.fixed.cout_ammortissement_vsv
        ;

        // <---- Calcul du cout de l'ammortissement du chantier ---->
        var cout_ammortissement_chantier = 
            activite.mandatory.nombre_tracteurs * activite.fixed.cout_ammortissement_tracteur +
            activite.mandatory.nombre_rotofaucheuses * activite.fixed.cout_ammortissement_rotofaucheuse +
            activite.mandatory.nombre_vsv * activite.fixed.cout_ammortissement_vsv +
            activite.mandatory.nombre_bras_hydrauliques * activite.fixed.cout_ammortissement_bras_hydraulique +
            activite.mandatory.nombre_broyages * activite.fixed.cout_ammortissement_broyage
        ;

        cout_ammortissement = temps_transport * cout_ammortissement_transport + temps_chantier * cout_ammortissement_chantier;    

    cout_main_d_oeuvre = Math.round(cout_main_d_oeuvre * 100) / 100;
    cout_chantier = Math.round(cout_chantier * 100) / 100;
    cout_ammortissement = Math.round(cout_ammortissement * 100) / 100;

    couts.main_d_oeuvre_unitaire.push(cout_main_d_oeuvre);
    couts.chantier_unitaire.push(cout_chantier);
    couts.amortissement_unitaire.push(cout_ammortissement);
    couts.economique_unitaire.push(cout_main_d_oeuvre + cout_chantier + cout_ammortissement);

    couts.main_d_oeuvre_total += cout_main_d_oeuvre;
    couts.chantier_total += cout_chantier;
    couts.amortissement_total += cout_ammortissement;
    couts.economique_total += cout_main_d_oeuvre + cout_chantier + cout_ammortissement;

    couts.main_d_oeuvre_total = Math.round(couts.main_d_oeuvre_total * 100) / 100;
    couts.chantier_total = Math.round(couts.chantier_total * 100) / 100;
    couts.amortissement_total = Math.round(couts.amortissement_total * 100) / 100;
    couts.economique_total = Math.round(couts.economique_total * 100) / 100;


    // <---- Calcul du cout environnemental ---->
    var cout_environnemental = 0;

        // <---- Calcul du cout environnemental du transport ---->
        var cout_environnemental_transport = temps_transport * 3.16 * ( 
            activite.fixed.consommation_horaire_tracteur_transport +
            activite.fixed.consommation_horaire_vsv_transport
        );

        // <---- Calcul du cout environnemental du chantier ---->
        var cout_environnemental_chantier = temps_chantier * 3.16 * (
            activite.fixed.consommation_horaire_tracteur_chantier +
            activite.fixed.consommation_horaire_vsv_chantier
        );

        cout_environnemental = cout_environnemental_transport + cout_environnemental_chantier;

    couts.environnement_chantier +=  cout_environnemental_chantier
    couts.environnement_chantier = Math.round(couts.environnement_chantier * 100) / 100;

    couts.environnement_transport += cout_environnemental_transport;
    couts.environnement_transport = Math.round(couts.environnement_transport * 100) / 100;        

    couts.environnemental_total += cout_environnemental;
    couts.environnemental_total = Math.round(couts.environnemental_total * 100) / 100;
    cout_environnemental = Math.round(cout_environnemental * 100) / 100;
    couts.environnemental_unitaire.push(cout_environnemental);
     
    return couts;
}

