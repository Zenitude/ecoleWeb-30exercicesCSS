// Récupération du body
const body = document.body;

// Création du container
const container = document.createElement('div');
container.setAttribute('class', 'containerIndex');
body.appendChild(container);

// Création de la liste des exercices
const liste = document.createElement('ul');
liste.setAttribute('class', 'listeIndex');
container.appendChild(liste);

// Création de l'objet exercices
class exercices
{
    constructor(nom, liens)
    {
        this.nom = nom,
        this.liens = liens
    }
}

// Création des exercices
const exercice1 = new exercices('Exercice 1 : Alignement', ['01-Exercice_Alignement/alignement.html']);
const exercice2 = new exercices('Exercice 2 : NavBar', ['02-Exercice_NavBar/navBar.html']);
const exercice3 = new exercices('Exercice 3 : Section accueil', ['03-Exercice_SectionAccueil/sectionAccueil.html']);
const exercice4 = new exercices('Exercice 4 : Positions', ['04-Exercice_Positions/positions_exo1.html', '04-Exercice_Positions/positions_exo2.html', '04-Exercice_Positions/positions_exo3.html', '04-Exercice_Positions/positions_exo4.html']);
const exercice5 = new exercices('Exercice 5 : Display', ['05-Exercice_Display/display.html']);
const exercice6 = new exercices('Exercice 6 : Selecteurs', ['06-Exercice_Selecteurs/selecteurs.html']);
const exercice7 = new exercices('Exercice 7 : Video background', ['07-Exercice_VideoBackground/videoBackground.html']);
const exercice8 = new exercices('Exercice 8 : Texte clignotant', ['08-Exercice_TexteClignotant/index.html']);
const exercice9 = new exercices('Exercice 9 : Cache cache', ['09-Exercice_CacheCache/index.html']);
const exercice10 = new exercices('Exercice 10 : Fusion', ['10-Exercice_Fusion/index.html']);
const exercice11 = new exercices('Exercice 11 : Texte responsive', ['11-Exercice_TexteResponsive/index.html']);
const exercice12 = new exercices('Exercice 12 : Loader', ['12-Exercice_Loader/index.html']);
const exercice13 = new exercices('Exercice 13 : Transition', ['13-Exercice_Transition/index.html']);
const exercice14 = new exercices('Exercice 14 : Galerie responsive avev Flexbox et Grid', ['14-Exercice_GalerieResponsiveFlexGrid/flex-galery.html', '14-Exercice_GalerieResponsiveFlexGrid/grid-galery.html']);
const exercice15 = new exercices('Exercice 15 : Flex time', ['15-Exercice_FlexTime/index.html']);
const exercice16 = new exercices('Exercice 16 : Grid time', ['16-Exercice_GridTime/index.html']);
const exercice17 = new exercices('Exercice 17 : Pseudo éléments', ['17-Exercice_PseudoElements/index.html']);
const exercice18 = new exercices('Exercice 18 : Entraînements responsive', ['18-Exercice_EntrainementsResponsive/exercice1.html', '18-Exercice_EntrainementsResponsive/exercice2.html', '18-Exercice_EntrainementsResponsive/exercice3.html']);
const exercice19 = new exercices('Exercice 19 : Perspective', ['19-Exercice_Perspective/index.html']);
const exercice20 = new exercices('Exercice 20 : Parallax', ['20-Exercice_Parallax/index.html']);
const exercice21 = new exercices('Exercice 21 : Maître des ombres', ['21-Exercice_MaitreDesOmbres/index.html']);
const exercice22 = new exercices('Exercice 22 : Créer des formes CSS', ['22-Exercice_CreerDesFormesCSS/index.html']);
const exercice23 = new exercices('Exercice 23 : Unités de mesures', ['23-Exercice_UnitesDeMesures/index.html']);
const exercice24 = new exercices('Exercice 24 : Carousel CSS', ['24-Exercice_CarouselCss/index.html']);
const exercice25 = new exercices('Exercice 25 : Formulaire complet', ['25-Exercice_FormulaireComplet/index.html']);
const exercice26 = new exercices('Exercice 26 : Animation couleurs', ['26-Exercice_AnimationCouleurs/index.html']);
const exercice27 = new exercices('Exercice 27 : Checkbox trick', ['27-Exercice_CheckboxTrick/index.html']);
const exercice28 = new exercices('Exercice 28 : Sass time', ['28-Exercice_SassTime/index.html']);
const exercice29 = new exercices('Exercice 29 : Footer complexe', ['29-Exercice_FooterComplexe/index.html']);
const exercice30 = new exercices('Exercice 30 : Marquee', ['30-Exercice_Marquee/index.html']);

// Création du tableau qui contiendra les exercices
let tabExos = 
[
    exercice1, exercice2, exercice3, exercice4, exercice5,
    exercice6, exercice7, exercice8, exercice9, exercice10,
    exercice11, exercice12, exercice13, exercice14, exercice15,
    exercice16, exercice17, exercice18, exercice19, exercice20,
    exercice21, exercice22, exercice23, exercice24, exercice25,
    exercice26, exercice27, exercice28, exercice29, exercice30
];

// Ajout des exercices à la liste
tabExos.forEach(exo =>
{
    // Création de l'item
    let item = document.createElement('li');
    item.innerHTML = `${exo.nom} - `;
        
    // Création des liens vers les exercices
    if(exo.liens.length < 2)
    {
        // 1 seul lien
        let lien = document.createElement('a');
        lien.setAttribute('href', exo.liens[0]);
        lien.innerHTML = `Lien`;
        item.appendChild(lien);
    }
    else
    {
        // 2 liens et plus
        for(let i = 0 ; i < exo.liens.length ; i++)
        {
            let lien = document.createElement('a');
            lien.setAttribute('href', exo.liens[i]);
            lien.innerHTML = `Lien${i+1}`;
            item.appendChild(lien);
        }
    }

    // ajout de l'item à la liste
    liste.appendChild(item);

});
