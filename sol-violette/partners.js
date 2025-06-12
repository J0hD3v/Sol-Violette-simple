class partner {
    constructor(name, website, description, filters = []) {
        this.name = name;
        this.website = website;
        this.description = description;
        this.filters = filters;
    }

    tag() {
        const name = `<p>${this.name} </p>`;
        const website = `<a href="https://${this.website}">${this.website}</a>`;
        const description = `<p>${this.description}</p>`;
        const className = this.filters.toString().replace(/,/g,' ');
        return `<article class="partner ${className}"> ${name} ${website} ${description} </article>`;
    }
}

const partners =
[
    new partner(
        '22h04',
        'www.22h04.com',
        '22h04, c\’est l\’heure de vous révéler.',
        [7]
    ),
    new partner(
        'ABEILLONS',
        'www.abeillons.fr',
        'Abeillons, enfin une alternative écologique et originale pour préserver vos aliments dans votre cuisine et lors de vos sorties..!!',
        [3]
    ),
    new partner(
        'Adrien Felsmann Écosystèmes',
        'adrienfelsmann.fr',
        'Conception de paysages vivants et comestibles sur-mesure valorisant votre patrimoine et formation au jardin écologique et au design en permaculture.',
        [7]
    ),
    new partner(
        'Akro PC',
        '',
        'Dépannage et formation informatique, pour particuliers et associations.',
        [7]
    ),
    new partner(
        'ARASIA SHOP',
        'www.arasia-shop.com/fr/',
        'ARASIA vous propose : pantalons thaïlandais, sarouels, tentures, bijoux, artisanat asiatique, encens naturels, accessoires de massage et coffrets cadeaux.',
        [3]
    ),
    new partner(
        'ART D’AIMER (L’)',
        'www.art-aimer.com/',
        'Je suis Delphine Binet Colstoun, thérapeute familiale et thérapeute ICV (Intégration du cycle de la vie). Séances individuelles, couple, duo ou famille. Adolescent.e.s - Adultes - Enfants & bébés Pour vivre des relations harmonieuses, particulièrement dans vos transitions de vie..',
        [4]
    ),
    new partner(
        'Arto',
        'festivalramonville-arto.fr/',
        'ARTO porte un projet novateur et expérimental avec comme référentiels les droits culturels et, en son cœur, la création artistique et la créativité.',
        [5,6]
    ),
    new partner(
        'ASSOCIATION MITSA',
        'www.mitsa.fr/',
        'Mitsa cherche à promouvoir de nouvelles pratiques responsables participant à la diminution de nos déchets.',
        [6]
    ),
    new partner(
        'ATELIER MANDING’ART ',
        '',
        '',
        [5,6]
    ),
    new partner(
        'AudiES',
        'www.audies.fr/',
        'AUDIES est un cabinet d’expertise comptable dédiée à l’accompagnement des structures de l’Economie Sociale et Solidaire.',
        [7]
    ),
    new partner(
        'Basso Com’Pôtes',
        'www.facebook.com/BASSOCOMPOTES/',
        'Restaurant en circuit très court et au feu de bois.',
        [5]
    ),
    new partner(
        'Biocoop Le Perget Colomiers',
        'www.biocoop-leperget.com/',
        'Produits biologiques et éco produits pour la maison à Colomiers.',
        [1]
    ),
    new partner(
        'Binaire',
        'restaurant-binaire.fr/1/',
        'Une cuisine variée et généreuse valorisant les produits frais, de saison et locaux.',
        [1,5]
    ),
    new partner(
        'Biocoop Blagnac',
        'www.biocoop-blagnac.fr/',
        'Le plus grand magasin Bio du Grand Toulouse.',
        [1]
    ),
    new partner(
        'Biocoop Croix-Daurade',
        '',
        'Magasin Biocoop',
        [1]
    ),
    new partner(
        'Biocoop Jaurès',
        'www.biocoopjaures-toulouse.com/',
        'Magasin d’alimentation bio · Épicerie spécialisée.',
        [1]
    ),
    new partner(
        'Biocoop La Ramée',
        'www.biocoop-laramee.com/',
        'Groupement de cinq magasins Biocoop sur la région de Toulouse - Epicerie Bio',
        [1]
    ),
    new partner(
        'Biocoop Les Châtaignes - Bio Castanet-Tolosan',
        'castanet-tolosan.biocoop.net/',
        'Magasin de proximité de 168m2 en plein centre de Castanet Tolosan',
        [1]
    ),
    new partner(
        'Biocoop Minimes',
        'www.biominimes.fr/',
        'Partages d’informations autour du réseau coopératif Biocoop, ses valeurs et partenaires, les produits du magasin des Minimes et ses évènements.',
        [1]
    ),
    new partner(
        'Biocoop Montredon',
        'www.biocoop-montredon.com/',
        'Depuis Balma-Gramont, prendre le bus 20 ou 74 jusqu’à ZI Montredon (1 arrêt)',
        [1]
    ),
    new partner(
        'Biocoop Oustal',
        'www.bio-toulouse.com/',
        'Shopping et vente au détail',
        [1]
    ),
    new partner(
        'Biocoop Purpan',
        'www.biocoop-purpan.com/',
        'Distribution alimentaire biologique- Biocoop s’illustre par ses produits du commerce équitable et par un choix très étendu d’éco-produits et de cosmétiques',
        [1]
    ),
    new partner(
        'BIOCOOP Trinité',
        'www.biocooptrinite-toulouse.com/',
        'votre magasin Biocoop Trinité sera ouvert tous les dimanches matins de 9h30 à 12h30',
        [1]
    ),
    new partner(
        'BOUCHE A LOUCHE (Le)',
        'le-bouche-a-louche.eatbu.com/?lang=fr',
        '',
        [1,5]
    ),
    new partner(
        'BRASSERIE VIEILLEDENT',
        '',
        'Brasserie artisanale de bières et sodas',
        [1]
    ),
    new partner(
        'CABINET DE SOPHROLOGIE TOULOUZEN',
        '',
        '',
        [4]
    ),
    new partner(
        'Camina flori',
        '',
        'Ferme florale éco responsable',
        [1,3]
    ),
    new partner(
        'Camion Colibri (Le)',
        'lecamioncolibri.fr/',
        '',
        [1]
    ),
    new partner(
        'Casta’DAL (Le)',
        'www.castacroute.fr/le-castadal',
        'Casta’DAL (Direct Agriculture Locale) est de un groupement d’achat qui rassemble les producteurs sur une même date de livraison, à raison de 4 à 5 fois dans l’année.',
        [1]
    ),
    new partner(
        'Céline Parker Psychologue',
        'www.doctolib.fr/psychologue/toulouse/celine-parker/booking?profile_skipped=true',
        'Psychologue psychothérapeute pour enfants, adolescents et adultes',
        [4]
    ),
    new partner(
        'CENTRE CULTUREL ESPERANTO',
        'occeo.net/',
        'Le Centre Culturel Espéranto est une association toulousaine qui a pour but de promouvoir les échanges interculturels et la solidarité internationale au moyen de la langue espéranto.',
        [6]
    ),
    new partner(
        'CHEZ NENETTE',
        'www.cheznenette.fr/',
        'Tout CHEZ NENETTE, traiteur alternatif végétarien sur Toulouse.',
        [1]
    ),
    new partner(
        'CHOUETTE COOP (LA)',
        'lachouettecoop.fr/',
        'Epicerie coopérative à Toulouse, rue René Leduc ',
        [1]
    ),
    new partner(
        'CITIZ MOBILIB',
        'toulouse.citiz.coop/',
        'En Sol-Violette uniquement sur partenariats particuliers ! Une voiture personnelle en ville- c’est coûteux et contraignant.» La coopérative MOBILIB a décidé de changer la donne ! Découvrez les voitures Citiz et Yea! accessibles 24/7 en toute autonomie.',
        [7,8]
    ),
    new partner(
        'CLARA PERTUIS ARTS ET THÉRAPIES',
        '',
        '',
        [4]
    ),
    new partner(
        'Cocipro',
        'www.panier-des-producteurs.com/',
        '',
        [1]
    ),
    new partner(
        'Collectif la Maison',
        '',
        '',
        [3,5,6,7]
    ),
    new partner(
        'Compte test',
        '',
        '',
        [1]
    ),
    new partner(
        'Confinature',
        '',
        'Fabrication et vente de confitures artisanales, miels de pays et millas, depuis 1992.',
        [1]
    ),
    new partner(
        'CRÉDIT COOPÉRATIF',
        'www.credit-cooperatif.coop/',
        'Institutionnel. Une autre banque est possible',
        [9]
    ),
    new partner(
        'CREPI 31',
        '',
        '',
        [7]
    ),
    new partner(
        'CYCLES-RE (Les)',
        'www.lescycles-re.fr/',
        'Les «Cycles Re» est une marque toulousaine de vélos relookés fabriqués à partir de cycles de récup’. Des vélos 100% uniques et personnalisables',
        [8]
    ),
    new partner(
        'CycloStand',
        'www.cyclostand.fr/lieux-et-dates/',
        'Atelier vélo nomade',
        [7,8]
    ),
    new partner(
        'DANS LA RAMURE DU FEUILLAGE',
        'www.dlrdf.fr/',
        'Elagage et entretien des espaces verts à Toulouse et ses environs.',
        [7,9]
    ),
    new partner(
        'Didier Bonnin Conseil',
        'didier-bonnin-ergonomie-efc-conseil.fr/',
        'Conseil en performance durable (élargie) et globale - Economie de la Fonctionnalité et de la Coopération et Ergonomie',
        [7]
    ),
    new partner(
        'DIRE DONNÉES INFORMATION RELAIS ENVIRONNEMENT',
        '',
        '',
        [6]
    ),
    new partner(
        'Docteur Conso',
        'www.docteur-conso.fr/',
        'Le guide du consommateur responsable !',
        [7]
    ),
    new partner(
        'ELEMENTERRE',
        'www.elemen-terre.org',
        'Instagram : @elementerreoc',
        [7]
    ),
    new partner(
        'EMATOPIE',
        '',
        '',
        [7]
    ),
    new partner(
        'ENFANT SCOP’FORMATION (L’)',
        'www.lenfantscop-formation.fr/',
        'La coopérative itinérante de Formation-Action Petite Enfance. Des prestations personnalisées dans l’environnement professionnel ou familial.',
        [7]
    ),
    new partner(
        'EPICURIEUX (L’)',
        'www.lepicurieux.net/',
        'Depuis 2015, vous pouvez payez votre bagel ou votre smoothie maison en Sol Violette',
        [1,5,7]
    ),
    new partner(
        'Escalire',
        'www.escalire.fr/',
        'Librairie généraliste indépendante',
        [6]
    ),
    new partner(
        'ETHIC&CHIC GAMBETTA',
        'www.ethicetchic.com/',
        'Ethic & chic propose des vêtements- chaussures et accessoires alliant style respect de l’Homme et de l’environnement.',
        [3]
    ),
    new partner(
        'ETHIC&CHIC Peyrolières',
        'www.ethicetchic.com/',
        'Ethic & chic propose des vêtements- chaussures et accessoires alliant style respect de l’Homme et de l’environnement.',
        [3]
    ),
    new partner(
        'Etic Emballages',
        'www.enboiteleplat.fr/',
        'Les temps changent, vos emballages aussi : passez du jetable aux boîtes en verre consignées !',
        [7]
    ),
    new partner(
        'ETRE MOBILE C’EST PERMIS - AUTO-ÉCOLE SOCIALE',
        '',
        '',
        [8]
    ),
    new partner(
        'FATHI-BERRADA Karim PSYCHOLOGUE PSYCHOTHÉRAPEUTE',
        '',
        '',
        [4]
    ),
    new partner(
        'Favoris Boutique Vintage',
        'www.favorisboutiquevintage.com/',
        'Je vous y propose une sélection pointue de pièces uniques chinées en Europe. Vêtements, bijoux et accessoires pour cultiver votre style !',
        [3]
    ),
    new partner(
        'Ferme Attitude Saint-Cyprien',
        'www.fermeattitude.fr/',
        'Magasin de producteurs.',
        [1]
    ),
    new partner(
        'Ferme Attitude Saint-Georges',
        'www.fermeattitude.fr/',
        'Magasin de producteurs.',
        [1]
    ),
    new partner(
        'Ferme de BordeBio',
        'www.lafermedebordebio.fr/',
        'Producteur de légumes bio à Toulouse en vente directe, ouvert du lundi au samedi.',
        [1]
    ),
    new partner(
        'FOLLES SAISONS',
        'www.follessaisons.com',
        'Une jolie toulousaine à l’ouest de Toulouse vous propose une cuisine traditionnelle faite maison. En été venez profitez de la terrasse ombragée et fleurie.',
        [1,5]
    ),
    new partner(
        'FORÊT Thémis orthophoniste',
        'perfactive.fr/list/themis-foret',
        'Cabinet d’orthophonie.',
        [4]
    ),
    new partner(
        'Françoise Farenc Vieussens psychologue clinicienne',
        '',
        '',
        [4]
    ),
    new partner(
        'Garage de la Terre',
        'www.garage-de-la-terre.blogspot.com/',
        'Entretien et réparation de véhicules automobiles légers.',
        [7,8]
    ),
    new partner(
        'GESMIP',
        'gesmip.fr/',
        'Groupement d’épiceries solidaires.',
        [1,7]
    ),
    new partner(
        'Gestes',
        'www.ateliergestes.com/',
        'Association d’artisans créateurs/ créatrices céramiste, potière, sculteur.',
        [3]
    ),
    new partner(
        'GLANERIE (LA)',
        '',
        'Ressourcerie toulousaine : collecte, valorisation, vente, sensibilisation.',
        [3,7]
    ),
    new partner(
        'GREENSAT',
        'greensatagrobiopol.wixsite.com/',
        'greensat Greensat est une assocation étudiante de l’agrobiopôle d’Auzeville.',
        [6,7]
    ),
    new partner(
        'GRENIER (Le)',
        'legrenier.cafe/',
        'Le Grenier est un éco-tiers-lieux, café associatif et espace de coworking.',
        [5]
    ),
    new partner(
        'Jardins de Girou (Les)',
        'cocagnehautegaronne.org/nouscontacter/les-jardins-du-girou-3/',
        'Réinsertion de personnes en difficulté.',
        [7]
    ),
    new partner(
        'Joachim Labouret accompagnement',
        '',
        'Accompagnement de projets de transition : vie associative / ESS / monnaies locales / RSE',
        [7]
    ),
    new partner(
        'La Base',
        '',
        '',
        []
    ),
    new partner(
        'La Yourte Nature',
        'www.eminescences.fr/',
        'Un lieu rond pour se sentir relié.',
        [4]
    ),
    new partner(
        'Laiterie Toulousaine (La)',
        'www.lalaiterietoulousaine.fr/',
        'Fromagerie et crémerie artisanale en plein coeur de Toulouse.',
        [1,3]
    ),
    new partner(
        'Le jardin aux bourdons',
        '',
        'Légumes bios tous les lundis de 18h à 20h à la Base.',
        [1]
    ),
    new partner(
        'Le Pain des Clotasses',
        'www.lepaindesclotasses.com/',
        'Boulangerie artisanale sur les marchés et en commande sur le sud de Toulouse.',
        [1]
    ),
    new partner(
        'Les 1001 vins',
        '',
        'Vins fins, bières & spiritueux',
        [1]
    ),
    new partner(
        'Les Fripouilles Boutique Associative',
        '',
        'Boutique associative de revalorisation d’articles bébé enfants',
        [3,6,7]
    ),
    new partner(
        'Les Tarées du Vrac',
        'www.instagram.com/lestareesduvrac/?hl=fr',
        'Epicerie vrac/zéro déchet - produits locaux et ateliers DIY en plein coeur de Toulouse.',
        [1]
    ),
    new partner(
        'LIBELULA',
        'www.libelula.fr/',
        'Votre déjeuner livré à vélo.',
        [1,5,7]
    ),
    new partner(
        'Librairie Ellipses',
        'librairie-ellipses.com/',
        'Librairie indépendante de Toulouse.',
        [6]
    ),
    new partner(
        'Locaterre',
        '',
        'Groupement d’achat de produits biologiques et actions en faveur de l’environnement.',
        [6]
    ),
    new partner(
        'Madeleine de Proust (La)',
        'www.madeleinedeproust.com/',
        'Plongez vous le temps d’un repas dans vos souvenirs d’enfance !',
        [1,5]
    ),
    new partner(
        'MAISON DU VÉLO / STATION V',
        'www.maisonduvelotoulouse.com/',
        'La Maison du Vélo Toulouse et la Station V Labège sont une association encourageant la pratique régulière de la bicyclette comme une solution efficace- écologique et saine pour nos déplacements quotidiens.',
        [8]
    ),
    new partner(
        'Mamzelle Wash',
        'www.instagram.com/mamzell_ wash/?fbclid=IwAR11Hpw-U0DjSviONtpTqyGiFNjkjHHbziXX4W3X9FuEymbtmcYRR6sA2yI',
        'Atelier de coiffure et de créations textiles.',
        [7]
    ),
    new partner(
        'MÉCANICYCLE',
        'www.mecanicycle.fr/',
        'MÉCANICYCLE, DÉPANNE & RÉPARE VOTRE VÉLO À TOULOUSE DEPUIS 2013.',
        [8]
    ),
    new partner(
        'MERLES MOQUEURS (Les)',
        'les-merles-moqueurs.eatbu.com/?lang=fr',
        'Les Merles Moqueurs c’est un bistrot toulousain à côté du métro Patte d’Oie Cuisine le midi- de quoi grignoter entre ami.e.s le soir- concerts- expos.',
        [1,5]
    ),
    new partner(
        'MES Occitanie',
        'mes-occitanie.org/',
        'Mouvement pour l’Economie Solidaire Occitanie.',
        [7]
    ),
    new partner(
        'NET SOL ECO',
        'www.netsoleco.coop/',
        'Société de Nettoyage écologique sur Toulouse pour les entreprises et les copropriétés.',
        [7]
    ),
    new partner(
        'P’TITS PLATS D’EVA (Les)',
        'ptits-plats.com/',
        'Mets d’ici- Mets d’ailleurs.',
        [1,5]
    ),
    new partner(
        'PHILIPPE MICHELOT CABINET D’ÉNERGIQUE DE LA ROSERAIE',
        '',
        '',
        [7]
    ),
    new partner(
        'PIZZA FÉLIX',
        'pizzafelix.com/',
        'Pate a Pizza Bio au levain naturel.',
        [1,5]
    ),
    new partner(
        'PRASADHANA YOGA',
        'prasadhana.org/faq-yoga-toulouse.php#contact',
        'Votre cours de yoga à Toulouse quartier St Cyprien/Patte d’oie.',
        [4]
    ),
    new partner(
        'Pro-Portion',
        'www.pro-portion.fr/',
        'L’accompagnement pour réduire le gaspillage alimentaire durablement.',
        [6,7]
    ),
    new partner(
        'Rafistolerie (La)',
        'larafistolerie.org/',
        'Ressourcerie de Castanet Tolosan.',
        [6]
    ),
    new partner(
        'RECANTOU (Le)',
        '',
        'Epicerie paysanne à Toulouse, 47 rue des 7 troubadours.',
        [1]
    ),
    new partner(
        'Recup Occitanie',
        'www.recup-compostage-urbain.fr/',
        'Système de compostage pour appartement.',
        [7]
    ),
    new partner(
        'ROQUETTE & JULIENNE',
        'www.roquetteetjulienne.fr/',
        'Cuisine fait maison- gourmande et de saison. Pour vos repas de groupe le soir en semaine- contactez-nous- nous organiserons ensemble votre soirée.',
        [1,5]
    ),
    new partner(
        'SABINE NGOAGOUNI ENERGETICIENNE',
        '',
        '',
        [4]
    ),
    new partner(
        'SAVEURS D’EXIL',
        'saveursdexil.wixsite.com/association/',
        'Saveurs d’Exil est un Traiteur associatif et une Cantine Solidaire réalisée avec des personnes exilées sur Toulouse.',
        [1,5,6]
    ),
    new partner(
        'SAVEURS ET HARMONIE',
        'www.saveursetharmonie.com/',
        'Comptoir de thé indépendant de Toulouse, fondé en 1998. Venez découvrir l’univers du thé, son histoire, ses coutumes, ses arômes et ses fragrances.',
        [1]
    ),
    new partner(
        'SEMALOU (Le)',
        'www.cave-lesemalou.fr/',
        'Votre caviste à Castanet Tolosan.',
        [1]
    ),
    new partner(
        'SENS ACTIFS',
        '',
        '',
        []
    ),
    new partner(
        'SERENDIPITY YOGA & PILATES',
        '',
        '',
        [4]
    ),
    new partner(
        'SIXTA',
        'sixta-toulouse.fr/',
        'Restaurant végétarien. Salon de thé. Espace de sieste.',
        [1,5]
    ),
    new partner(
        'So âme coiffure',
        'www.instagram.com/so.ame.coiffure/',
        'Coiffeuse à domicile en centre ville de Toulouse.',
        [7]
    ),
    new partner(
        'SOL VIOLETTE',
        'www.sol-violette.fr/',
        'monnaie locale, citoyenne et complémentaire de la région toulousaine.',
        [7,9]
    ),
    new partner(
        'Sophro Fly',
        'sophrofly.fr/',
        'Je vous accompagne par la sophrologie: Fermez les yeux… révélez-vous…',
        [4]
    ),
    new partner(
        'Sublim’Aromes',
        '',
        'Grossiste qui commercialise des produits locaux, bio et équitable',
        [1,7]
    ),
    new partner(
        'SYMBIOSPHERE',
        '',
        '',
        [2]
    ),
    new partner(
        'TERRA NOVA',
        'librairie-terranova.fr/',
        'Terra Nova vous invite à parcourir et à interroger le monde à travers ses écrivains- ses réalisateurs- ses artistes- ses penseurs- ses luttes.',
        [6]
    ),
    new partner(
        'Tête au Carreau (La)',
        'www.lateteaucarreau.fr/',
        'Nettoyage de surfaces vitrées.',
        [7]
    ),
    new partner(
        'TIPII ATELIER',
        'www.tipii-atelier.fr/',
        '',
        []
    ),
    new partner(
        'TOPINA (La)',
        'latopina.com/',
        'La Topina est un café restaurant qui fait la promotion de la culture occitane à travers une cuisine d’inspiration traditionnelle et de nombreux événements !',
        [1,5]
    ),
    new partner(
        'Toulouse Espace Couture',
        'www.toulouseespacecouture.fr/',
        'Tiers lieu autour de l’outil couture.',
        [6]
    ),
    new partner(
        'VEGETALOCAL',
        '',
        'Aide au compostage et broyage.',
        [7]
    ),
    new partner(
        'VÉLO SENTIMENTAL (Le)',
        'www.maisonduvelotoulouse.com/',
        'Vous recherchez de quoi faire plaisir à vos papilles dans un cadre authentique, tout près de la gare Matabiau ? Ne cherchez plus !',
        [1,5]
    ),
    new partner(
        'VÉLO VÉGÉ',
        '',
        'Vélo Végé vous donne rendezvous devant l’entrée du jardin des plantes de Toulouse. Au menu : Des hot-dogs et un ou plusieurs choix de desserts, le tout, 100 % végétalien.',
        [1,5]
    ),
]

const partnersContainer = document.getElementById('partners');

for (const partner of partners) {
    partnersContainer.insertAdjacentHTML('beforeend', partner.tag());
}

const filters = document.getElementById('filters').getElementsByClassName('filter');

for (let i=0; i<filters.length; i++) {
    filters[i].addEventListener('click', () => {
        Array.prototype.slice.call(filters).forEach(filter => {
            filter.style.backgroundColor = 'white';
            filter.style.color = 'red';
        });
        filters[i].style.backgroundColor = 'red';
        filters[i].style.color = 'white';
        const partners = document.getElementsByClassName('partner');
        for (const partner of partners) {
            if ((i) == 0) {
                partner.style.display = 'flex';
            } else if (partner.className.includes(i)) {
                partner.style.display = 'flex';
            } else {
                partner.style.display = 'none';
            }
        }
    });
}

