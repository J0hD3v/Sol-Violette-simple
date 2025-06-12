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
        [1,2,3]
    ),
    new partner(
        'ABEILLONS',
        'www.abeillons.fr',
        'Abeillons, enfin une alternative écologique et originale pour préserver vos aliments dans votre cuisine et lors de vos sorties..!!',
        [1]
    ),
    new partner(
        'Adrien Felsmann Écosystèmes',
        'adrienfelsmann.fr',
        'Conception de paysages vivants et comestibles sur-mesure valorisant votre patrimoine et formation au jardin écologique et au design en permaculture.',
        [2]
    ),
    new partner(
        'Akro PC',
        '',
        'Dépannage et formation informatique, pour particuliers et associations.',
        [3]
    ),
    new partner(
        'ARASIA SHOP',
        'www.arasia-shop.com/fr/',
        'ARASIA vous propose : pantalons thaïlandais, sarouels, tentures, bijoux, artisanat asiatique, encens naturels, accessoires de massage et coffrets cadeaux.',
        []
    ),
    new partner(
        'ART D’AIMER (L’)',
        'www.art-aimer.com/',
        'Je suis Delphine Binet Colstoun, thérapeute familiale et thérapeute ICV (Intégration du cycle de la vie). Séances individuelles, couple, duo ou famille. Adolescent.e.s - Adultes - Enfants & bébés Pour vivre des relations harmonieuses, particulièrement dans vos transitions de vie..',
        []
    ),
    new partner(
        'Arto',
        'festivalramonville-arto.fr/',
        'ARTO porte un projet novateur et expérimental avec comme référentiels les droits culturels et, en son cœur, la création artistique et la créativité.',
        []
    ),
    new partner(
        'ASSOCIATION MITSA',
        'www.mitsa.fr/',
        'Mitsa cherche à promouvoir de nouvelles pratiques responsables participant à la diminution de nos déchets.',
        []
    ),
    new partner(
        'ATELIER MANDING’ART AudiES',
        'www.audies.fr/',
        'AUDIES est un cabinet d’expertise comptable dédiée à l’accompagnement des structures de l’Economie Sociale et Solidaire.',
        []
    ),
    new partner(
        'Basso Com’Pôtes',
        'www.facebook.com/BASSOCOMPOTES/',
        'Restaurant en circuit très court et au feu de bois.',
        []
    ),
    new partner(
        'Biocoop Le Perget Colomiers',
        'www.biocoop-leperget.com/',
        'Produits biologiques et éco produits pour la maison à Colomiers.',
        []
    ),
    new partner(
        'Binaire',
        'restaurant-binaire.fr/1/',
        'Une cuisine variée et généreuse valorisant les produits frais, de saison et locaux.',
        []
    ),
    new partner(
        'Biocoop Blagnac',
        'www.biocoop-blagnac.fr/',
        'Le plus grand magasin Bio du Grand Toulouse.',
        []
    ),
    new partner(
        'Biocoop Croix-Daurade',
        '',
        'Magasin Biocoop',
        []
    ),
    new partner(
        'Biocoop Jaurès',
        'www.biocoopjaures-toulouse.com/',
        'Magasin d’alimentation bio · Épicerie spécialisée.',
        []
    ),
    new partner(
        'Biocoop La Ramée',
        'www.biocoop-laramee.com/',
        'Groupement de cinq magasins Biocoop sur la région de Toulouse - Epicerie Bio',
        []
    ),
    new partner(
        'Biocoop Les Châtaignes - Bio Castanet-Tolosan',
        'castanet-tolosan.biocoop.net/',
        'Magasin de proximité de 168m2 en plein centre de Castanet Tolosan',
        []
    ),
    new partner(
        'Biocoop Minimes',
        'www.biominimes.fr/',
        'Partages d’informations autour du réseau coopératif Biocoop, ses valeurs et partenaires, les produits du magasin des Minimes et ses évènements.',
        []
    ),
    new partner(
        'Biocoop Montredon',
        'www.biocoop-montredon.com/',
        'Depuis Balma-Gramont, prendre le bus 20 ou 74 jusqu’à ZI Montredon (1 arrêt)',
        []
    ),
    new partner(
        'Biocoop Oustal',
        'www.bio-toulouse.com/',
        'Shopping et vente au détail',
        []
    ),
    new partner(
        'Biocoop Purpan',
        'www.biocoop-purpan.com/',
        'Distribution alimentaire biologique- Biocoop s’illustre par ses produits du commerce équitable et par un choix très étendu d’éco-produits et de cosmétiques',
        []
    ),
    new partner(
        'BIOCOOP Trinité',
        'www.biocooptrinite-toulouse.com/',
        'votre magasin Biocoop Trinité sera ouvert tous les dimanches matins de 9h30 à 12h30',
        []
    ),
    new partner(
        'BOUCHE A LOUCHE (Le)',
        'le-bouche-a-louche.eatbu.com/?lang=fr',
        'BRASSERIE VIEILLEDENT Brasserie artisanale de bières et sodas',
        []
    ),
    new partner(
        'CABINET DE SOPHROLOGIE TOULOUZEN',
        '',
        '',
        []
    ),
    new partner(
        'Camina flori',
        '',
        'Ferme florale éco responsable',
        []
    ),
    new partner(
        'Camion Colibri (Le)',
        'lecamioncolibri.fr/',
        '',
        []
    ),
    new partner(
        'Casta’DAL (Le)',
        'www.castacroute.fr/le-castadal',
        'Casta’DAL (Direct Agriculture Locale) est de un groupement d’achat qui rassemble les producteurs sur une même date de livraison, à raison de 4 à 5 fois dans l’année.',
        []
    ),
    new partner(
        'Céline Parker Psychologue',
        'www.doctolib.fr/psychologue/toulouse/celine-parker/booking?profile_skipped=true',
        'Psychologue psychothérapeute pour enfants, adolescents et adultes',
        []
    ),
    new partner(
        'CENTRE CULTUREL ESPERANTO',
        'occeo.net/',
        'Le Centre Culturel Espéranto est une association toulousaine qui a pour but de promouvoir les échanges interculturels et la solidarité internationale au moyen de la langue espéranto.',
        []
    ),
    new partner(
        'CHEZ NENETTE',
        'www.cheznenette.fr/',
        'Tout CHEZ NENETTE, traiteur alternatif végétarien sur Toulouse.',
        []
    ),
    new partner(
        'CHOUETTE COOP (LA)',
        'lachouettecoop.fr/',
        'Epicerie coopérative à Toulouse, rue René Leduc ',
        []
    ),
    new partner(
        'CITIZ MOBILIB',
        'toulouse.citiz.coop/',
        'En Sol-Violette uniquement sur partenariats particuliers ! Une voiture personnelle en ville- c’est coûteux et contraignant.» La coopérative MOBILIB a décidé de changer la donne ! Découvrez les voitures Citiz et Yea! accessibles 24/7 en toute autonomie.',
        []
    ),
    new partner(
        'CLARA PERTUIS ARTS ET THÉRAPIES',
        '',
        '',
        []
    ),
    new partner(
        'Cocipro',
        'www.panier-des-producteurs.com/',
        '',
        []
    ),
    new partner(
        'Collectif la Maison',
        '',
        '',
        []
    ),
    new partner(
        'Compte test',
        '',
        '',
        []
    ),
    new partner(
        'Confinature',
        '',
        'Fabrication et vente de confitures artisanales, miels de pays et millas, depuis 1992.',
        []
    ),
    new partner(
        'CRÉDIT COOPÉRATIF',
        'www.credit-cooperatif.coop/',
        'Institutionnel. Une autre banque est possible',
        []
    ),
    new partner(
        'CREPI 31',
        '',
        '',
        []
    ),
    new partner(
        'CYCLES-RE (Les)',
        'www.lescycles-re.fr/',
        'Les «Cycles Re» est une marque toulousaine de vélos relookés fabriqués à partir de cycles de récup’. Des vélos 100% uniques et personnalisables',
        []
    ),
    new partner(
        'CycloStand',
        'www.cyclostand.fr/lieux-et-dates/',
        'Atelier vélo nomade',
        []
    ),
    new partner(
        'DANS LA RAMURE DU FEUILLAGE',
        'www.dlrdf.fr/',
        'Elagage et entretien des espaces verts à Toulouse et ses environs.',
        []
    ),
    new partner(
        'Didier Bonnin Conseil',
        'didier-bonnin-ergonomie-efc-conseil.fr/',
        'Conseil en performance durable (élargie) et globale - Economie de la Fonctionnalité et de la Coopération et Ergonomie',
        []
    ),
    new partner(
        'DIRE DONNÉES INFORMATION RELAIS ENVIRONNEMENT',
        '',
        '',
        []
    ),
    new partner(
        'Docteur Conso',
        'www.docteur-conso.fr/',
        'Le guide du consommateur responsable !',
        []
    ),
    new partner(
        'ELEMENTERRE',
        'www.elemen-terre.org',
        'Instagram : @elementerreoc',
        []
    ),
    new partner(
        'EMATOPIE',
        '',
        '',
        []
    ),
    new partner(
        'ENFANT SCOP’FORMATION (L’)',
        'www.lenfantscop-formation.fr/',
        'La coopérative itinérante de Formation-Action Petite Enfance. Des prestations personnalisées dans l’environnement professionnel ou familial.',
        []
    ),
    new partner(
        'EPICURIEUX (L’)',
        'www.lepicurieux.net/',
        'Depuis 2015, vous pouvez payez votre bagel ou votre smoothie maison en Sol Violette',
        []
    ),
    new partner(
        'Escalire',
        'www.escalire.fr/',
        'Librairie généraliste indépendante',
        []
    ),
    new partner(
        'ETHIC&CHIC GAMBETTA',
        'www.ethicetchic.com/',
        'Ethic & chic propose des vêtements- chaussures et accessoires alliant style respect de l’Homme et de l’environnement.',
        []
    ),
    new partner(
        'ETHIC&CHIC Peyrolières',
        'www.ethicetchic.com/',
        'Ethic & chic propose des vêtements- chaussures et accessoires alliant style respect de l’Homme et de l’environnement.',
        []
    ),
    new partner(
        'Etic Emballages',
        'www.enboiteleplat.fr/',
        'Les temps changent, vos emballages aussi : passez du jetable aux boîtes en verre consignées !',
        []
    ),
    new partner(
        'ETRE MOBILE C’EST PERMIS - AUTO-ÉCOLE SOCIALE',
        '',
        '',
        []
    ),
    new partner(
        'FATHI-BERRADA Karim PSYCHOLOGUE PSYCHOTHÉRAPEUTE',
        '',
        '',
        []
    ),
    new partner(
        'Favoris Boutique Vintage',
        'www.favorisboutiquevintage.com/',
        'Je vous y propose une sélection pointue de pièces uniques chinées en Europe. Vêtements, bijoux et accessoires pour cultiver votre style !',
        []
    ),
    new partner(
        'Ferme Attitude Saint-Cyprien',
        'www.fermeattitude.fr/',
        'Magasin de producteurs.',
        []
    ),
    new partner(
        'Ferme Attitude Saint-Georges',
        'www.fermeattitude.fr/',
        'Magasin de producteurs.',
        []
    ),
    new partner(
        'Ferme de BordeBio',
        'www.lafermedebordebio.fr/',
        'Producteur de légumes bio à Toulouse en vente directe, ouvert du lundi au samedi.',
        []
    ),
    new partner(
        'FOLLES SAISONS',
        'www.follessaisons.com',
        'Une jolie toulousaine à l’ouest de Toulouse vous propose une cuisine traditionnelle faite maison. En été venez profitez de la terrasse ombragée et fleurie.',
        []
    ),
    new partner(
        'FORÊT Thémis orthophoniste',
        'perfactive.fr/list/themis-foret',
        'Cabinet d’orthophonie.',
        []
    ),
    new partner(
        'Françoise Farenc Vieussens psychologue clinicienne',
        '',
        '',
        []
    ),
    new partner(
        'Garage de la Terre',
        'www.garage-de-la-terre.blogspot.com/',
        'Entretien et réparation de véhicules automobiles légers.',
        []
    ),
    new partner(
        'GESMIP',
        'gesmip.fr/',
        'Groupement d’épiceries solidaires.',
        []
    ),
    new partner(
        'Gestes',
        'www.ateliergestes.com/',
        'Association d’artisans créateurs/ créatrices céramiste, potière, sculteur.',
        []
    ),
    new partner(
        'GLANERIE (LA)',
        '',
        'Ressourcerie toulousaine : collecte, valorisation, vente, sensibilisation.',
        []
    ),
    new partner(
        'GREENSAT',
        'greensatagrobiopol.wixsite.com/',
        'greensat Greensat est une assocation étudiante de l’agrobiopôle d’Auzeville.',
        []
    ),
    new partner(
        'GRENIER (Le)',
        'legrenier.cafe/',
        'Le Grenier est un éco-tiers-lieux, café associatif et espace de coworking.',
        []
    ),
    new partner(
        'Jardins de Girou (Les)',
        'cocagnehautegaronne.org/nouscontacter/les-jardins-du-girou-3/',
        'Réinsertion de personnes en difficulté.',
        []
    ),
    new partner(
        'Joachim Labouret accompagnement',
        '',
        'Accompagnement de projets de transition : vie associative / ESS / monnaies locales / RSE',
        []
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
        []
    ),
    new partner(
        'Laiterie Toulousaine (La)',
        'www.lalaiterietoulousaine.fr/',
        'Fromagerie et crémerie artisanale en plein coeur de Toulouse. Le jardin aux bourdons Légumes bios tous les lundis de 18h à 20h à la Base.',
        []
    ),
    new partner(
        'Le Pain des Clotasses',
        'www.lepaindesclotasses.com/',
        'Boulangerie artisanale sur les marchés et en commande sur le sud de Toulouse.',
        []
    ),
    new partner(
        'Les 1001 vins',
        '',
        'Vins fins, bières & spiritueux',
        []
    ),
    new partner(
        'Les Fripouilles Boutique Associative',
        '',
        'Boutique associative de revalorisation d’articles bébé enfants',
        []
    ),
    new partner(
        'Les Tarées du Vrac',
        'www.instagram.com/lestareesduvrac/?hl=fr',
        'Epicerie vrac/zéro déchet - produits locaux et ateliers DIY en plein coeur de Toulouse.',
        []
    ),
    new partner(
        'LIBELULA',
        'www.libelula.fr/',
        'Votre déjeuner livré à vélo.',
        []
    ),
    new partner(
        'Librairie Ellipses',
        'librairie-ellipses.com/',
        'Librairie indépendante de Toulouse.',
        []
    ),
    new partner(
        'Locaterre',
        '',
        'Groupement d’achat de produits biologiques et actions en faveur de l’environnement.',
        []
    ),
    new partner(
        'Madeleine de Proust (La)',
        'www.madeleinedeproust.com/',
        'Plongez vous le temps d’un repas dans vos souvenirs d’enfance !',
        []
    ),
    new partner(
        'MAISON DU VÉLO / STATION V',
        'www.maisonduvelotoulouse.com/',
        'La Maison du Vélo Toulouse et la Station V Labège sont une association encourageant la pratique régulière de la bicyclette comme une solution efficace- écologique et saine pour nos déplacements quotidiens.',
        []
    ),
    new partner(
        'Mamzelle Wash',
        'www.instagram.com/mamzell_ wash/?fbclid=IwAR11Hpw-U0DjSviONtpTqyGiFNjkjHHbziXX4W3X9FuEymbtmcYRR6sA2yI',
        'Atelier de coiffure et de créations textiles.',
        []
    ),
    new partner(
        'MÉCANICYCLE',
        'www.mecanicycle.fr/',
        'MÉCANICYCLE, DÉPANNE & RÉPARE VOTRE VÉLO À TOULOUSE DEPUIS 2013.',
        []
    ),
    new partner(
        'MERLES MOQUEURS (Les)',
        'les-merles-moqueurs.eatbu.com/?lang=fr',
        'Les Merles Moqueurs c’est un bistrot toulousain à côté du métro Patte d’Oie Cuisine le midi- de quoi grignoter entre ami.e.s le soir- concerts- expos.',
        []
    ),
    new partner(
        'MES Occitanie',
        'mes-occitanie.org/',
        'Mouvement pour l’Economie Solidaire Occitanie.',
        []
    ),
    new partner(
        'NET SOL ECO',
        'www.netsoleco.coop/',
        'Société de Nettoyage écologique sur Toulouse pour les entreprises et les copropriétés.',
        []
    ),
    new partner(
        'P’TITS PLATS D’EVA (Les)',
        'ptits-plats.com/',
        'Mets d’ici- Mets d’ailleurs.',
        []
    ),
    new partner(
        'PHILIPPE MICHELOT CABINET D’ÉNERGIQUE DE LA ROSERAIE',
        '',
        '',
        []
    ),
    new partner(
        'PIZZA FÉLIX',
        'pizzafelix.com/',
        'Pate a Pizza Bio au levain naturel.',
        []
    ),
    new partner(
        'PRASADHANA YOGA',
        'prasadhana.org/faq-yoga-toulouse.php#contact',
        'Votre cours de yoga à Toulouse quartier St Cyprien/Patte d’oie.',
        []
    ),
    new partner(
        'Pro-Portion',
        'www.pro-portion.fr/',
        'L’accompagnement pour réduire le gaspillage alimentaire durablement.',
        []
    ),
    new partner(
        'Rafistolerie (La)',
        'larafistolerie.org/',
        'Ressourcerie de Castanet Tolosan.',
        []
    ),
    new partner(
        'RECANTOU (Le)',
        '',
        'Epicerie paysanne à Toulouse, 47 rue des 7 troubadours.',
        []
    ),
    new partner(
        'Recup Occitanie',
        'www.recup-compostage-urbain.fr/',
        'Système de compostage pour appartement.',
        []
    ),
    new partner(
        'ROQUETTE & JULIENNE',
        'www.roquetteetjulienne.fr/',
        'Cuisine fait maison- gourmande et de saison. Pour vos repas de groupe le soir en semaine- contactez-nous- nous organiserons ensemble votre soirée.',
        []
    ),
    new partner(
        'SABINE NGOAGOUNI ENERGETICIENNE',
        '',
        '',
        []
    ),
    new partner(
        'SAVEURS D’EXIL',
        'saveursdexil.wixsite.com/association/',
        'Saveurs d’Exil est un Traiteur associatif et une Cantine Solidaire réalisée avec des personnes exilées sur Toulouse.',
        []
    ),
    new partner(
        'SAVEURS ET HARMONIE',
        'www.saveursetharmonie.com/',
        'Comptoir de thé indépendant de Toulouse, fondé en 1998. Venez découvrir l’univers du thé, son histoire, ses coutumes, ses arômes et ses fragrances.',
        []
    ),
    new partner(
        'SEMALOU (Le)',
        'www.cave-lesemalou.fr/',
        'Votre caviste à Castanet Tolosan.',
        []
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
        []
    ),
    new partner(
        'SIXTA',
        'sixta-toulouse.fr/',
        'Restaurant végétarien. Salon de thé. Espace de sieste.',
        []
    ),
    new partner(
        'So âme coiffure',
        'www.instagram.com/so.ame.coiffure/',
        'Coiffeuse à domicile en centre ville de Toulouse.',
        []
    ),
    new partner(
        'SOL VIOLETTE',
        'www.sol-violette.fr/',
        'monnaie locale, citoyenne et complémentaire de la région toulousaine.',
        []
    ),
    new partner(
        'Sophro Fly',
        'sophrofly.fr/',
        'Je vous accompagne par la sophrologie: Fermez les yeux… révélez-vous…',
        []
    ),
    new partner(
        'Sublim’Aromes',
        '',
        'Grossiste qui commercialise des produits locaux, bio et équitable',
        []
    ),
    new partner(
        'SYMBIOSPHERE',
        '',
        '',
        []
    ),
    new partner(
        'TERRA NOVA',
        'librairie-terranova.fr/',
        'Terra Nova vous invite à parcourir et à interroger le monde à travers ses écrivains- ses réalisateurs- ses artistes- ses penseurs- ses luttes.',
        []
    ),
    new partner(
        'Tête au Carreau (La)',
        'www.lateteaucarreau.fr/',
        'Nettoyage de surfaces vitrées.',
        []
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
        []
    ),
    new partner(
        'Toulouse Espace Couture',
        'www.toulouseespacecouture.fr/',
        'Tiers lieu autour de l’outil couture.',
        []
    ),
    new partner(
        'VEGETALOCAL',
        '',
        'Aide au compostage et broyage.',
        []
    ),
    new partner(
        'VÉLO SENTIMENTAL (Le)',
        'www.maisonduvelotoulouse.com/',
        'Vous recherchez de quoi faire plaisir à vos papilles dans un cadre authentique, tout près de la gare Matabiau ? Ne cherchez plus !',
        []
    ),
    new partner(
        'VÉLO VÉGÉ',
        '',
        'Vélo Végé vous donne rendezvous devant l’entrée du jardin des plantes de Toulouse. Au menu : Des hot-dogs et un ou plusieurs choix de desserts, le tout, 100 % végétalien.',
        []
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

