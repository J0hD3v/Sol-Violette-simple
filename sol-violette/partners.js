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
    new partner('22h04',
        'www.22h04.com',
        '22h04, c\’est l\’heure de vous révéler.',
        [1,2,3]
    ),
    new partner('ABEILLONS',
        'www.abeillons.fr',
        'Abeillons, enfin une alternative écologique et originale pour préserver vos aliments dans votre cuisine et lors de vos sorties..!!',
        [1]
    ),
    new partner('Adrien Felsmann Écosystèmes',
        'adrienfelsmann.fr',
        'Conception de paysages vivants et comestibles sur-mesure valorisant votre patrimoine et formation au jardin écologique et au design en permaculture.',
        [2]
    ),
    new partner('Akro PC',
        '',
        'Dépannage et formation informatique, pour particuliers et associations.',
        [3]
    )
]

const partnersContainer = document.getElementById('partners');

for (const partner of partners) {
    partnersContainer.insertAdjacentHTML('beforeend', partner.tag());
}

const filters = document.getElementById('filters').getElementsByClassName('filter');

for (let i=0; i<filters.length; i++) {
    filters[i].addEventListener('click', () => {
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

