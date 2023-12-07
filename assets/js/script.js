//Propiedades en Venta = sale// Declaracion de info en venta//

const prop_sale = [
    {
        name: 'Simple and non conspicuous home',
        src: 'https://i.pinimg.com/originals/be/df/b7/bedfb7dbe443427334f9da08d74b39f4.png',
        description: 'A regular home with hidden defence mechanisms',
        location: 'Dimension 173, USA',
        rooms: 4,
        bathrooms: 3,
        price: 100000000,
        smoke: false,
        pets: false
    },
    {
        name: 'A home of flint',
        src: 'https://static.wikia.nocookie.net/the-flintstones-wiki/images/d/db/The_Flintstones_-_Flintstone_House.png/revision/latest?cb=20200325224247',
        description: 'Old Solid home with a lot of history',
        location: 'Sometime in the past, Pangea',
        rooms: 3,
        bathrooms: 1,
        price: 120000000,
        smoke: true,
        pets: true
    },
    {
        name: 'Family home in small town',
        src: 'https://upload.wikimedia.org/wikipedia/en/c/ca/742_Evergreen_Terrace.png',
        description: 'Pink home with a yellow interior',
        location: 'Springfield, USA',
        rooms: 4,
        bathrooms: 3,
        price: 330000000,
        smoke: false,
        pets: true
    },
    {
        name: 'American Home',
        src: 'https://static.wikia.nocookie.net/familyguyfanon/images/3/3c/The_Griffin_House.png/revision/latest/scale-to-width-down/1200?cb=20180405011745',
        description: 'Famntastic home with characteristicd from out of this world',
        location: 'Quahog, USA',
        rooms: 4,
        bathrooms: 3,
        price: 2000000,
        smoke: true,
        pets: true
    },
    {
        name: 'Power Puff house',
        src: 'https://static.wikia.nocookie.net/warner-bros-entertainment/images/d/df/Professor_Utonium%27s_House.jpeg/revision/latest?cb=20210923005645',
        description: 'Power Puff house (with a spice of substance X)',
        location: 'Townsville, USA',
        rooms: 3,
        bathrooms: 2,
        price: 3000000,
        smoke: false,
        pets: false
    }
]

//Propiedades en Alquiler = prop_alq// Declaracion de info en alquiler//

const prop_alq = [
    {
        name: 'Lonely property with ample space and no ghosts',
        src: 'https://i.pinimg.com/originals/a9/54/84/a954847d9beefce654db167f73cbeef2.jpg',
        description: 'Nothing to see except lots of courage',
        location: 'Middle of nowhere, USA',
        rooms: 2,
        bathrooms: 3,
        price: 100000,
        smoke: true,
        pets: true
    },
    {
        name: 'Modest house with a spirit for adventure',
        src: 'https://static.wikia.nocookie.net/disney/images/4/40/Carl%27s_house_New.jpg/revision/latest?cb=20120721140601',
        description: 'Floating property',
        location: 'Sometimes in the US and sometimes in Venezuela',
        rooms: 2,
        bathrooms: 3,
        price: 1350000,
        smoke: false,
        pets: true
    },
    {
        name: 'House in the hole!',
        src: 'https://www.standout-cabin-designs.com/images/hobbit-house-designs2.jpg',
        description: 'Surrounded by second breakfast',
        location: 'The Shire, Middle Earth',
        rooms: 2,
        bathrooms: 3,
        price: 150000,
        smoke: true,
        pets: false
    },
    {
        name: 'Family home with odd shaped heads',
        src: 'https://static.wikia.nocookie.net/phineasandferb/images/3/3e/Flynn-Fletcher_House_2.jpg/revision/latest?cb=20110615161050',
        description: 'The place where there is always something to do in the Summer',
        location: 'Danville, USA',
        rooms: 4,
        bathrooms: 3,
        price: 100000000,
        smoke: false,
        pets: true
    },
    {
        name: 'Transformed Factory to be home and workplace',
        src: 'https://static.wikia.nocookie.net/enfuturama/images/0/0e/The_Luck_of_the_Fryrish_%28Main_Episode%29_-_319.png/revision/latest?cb=20210808214405',
        description: 'The home and office of the future where you can fit 3 humans, 1 mutant, 1 robot, and 1 alien',
        location: 'Year 3000 in New New York, USA',
        rooms: 8,
        bathrooms: 3,
        price: 900000000,
        smoke: true,
        pets: false
    }
]

//declaracion para el index de que buscar sobre las 3 propiedades en venta//
//Propiedad Venta = div_prop_sale// //permitPetStyle, permitPetText, permitPetIcon, permitSmokeStyle, permitSmokeText, permitSmokeIcon

let div_prop_sale = document.getElementById('div_prop_sale')

if (div_prop_sale != null) {
    for (let index = 0; index < 3; index++) {
        let permitPetStyle, permitPetText, permitPetIcon, permitSmokeStyle, permitSmokeText, permitSmokeIcon;

        if (prop_sale[index].pets == true) {
            permitPetStyle = 'text-success'
            permitPetText = 'Pets allowed'
            permitPetIcon = 'fas fa-paw'
        } else {
            permitPetStyle = 'text-danger'
            permitPetText = 'No pets allowed'
            permitPetIcon = 'fas fa-ban'
        }

        if (prop_sale[index].smoke == true) {
            permitSmokeStyle = 'text-success'
            permitSmokeText = 'Smoking allowed'
            permitSmokeIcon = 'fas fa-smoking'
        } else {
            permitSmokeStyle = 'text-danger'
            permitSmokeText = 'No moking allowed'
            permitSmokeIcon = 'fas fa-smoking-ban'
        }

        div_prop_sale.innerHTML += `
        <div class="col-md-4 mb-4">
            <div class="card">
            <img
                src="${prop_sale[index].src}"
                class="card-img-top"
                alt="Imagen del departamento"
            />
            <div class="card-body">
                <h5 class="card-title">
                    ${prop_sale[index].name}
                </h5>
                <p class="card-text">
                    ${prop_sale[index].description}
                </p>
                <p>
                <i class="fas fa-map-marker-alt"></i> ${prop_sale[index].location}
                </p>
                <p>
                <i class="fas fa-bed"></i> ${prop_sale[index].rooms} Rooms |
                <i class="fas fa-bath"></i> ${prop_sale[index].bathrooms} Bathrooms
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${prop_sale[index].price}</p>
                <p class="${permitSmokeStyle}">
                <i class="${permitSmokeIcon}"></i> ${permitSmokeText}
                </p>
                <p class="${permitPetStyle}">
                <i class="${permitPetIcon}"></i> ${permitPetText}
                </p>
            </div>
            </div>
        </div>`

    }
}

//declaracion para el index de que buscar sobre las 3 propiedades en alquiler//
//Propiedades en Alquiler = prop_alq//

let div_prop_alq = document.getElementById('div-prop-alq')

if (div_prop_alq != null) {
    for (let index = 0; index < 3; index++) {
        let permitPetStyle, permitPetText, permitPetIcon, permitSmokeStyle, permitSmokeText, permitSmokeIcon;

        if (prop_sale[index].pets == true) {
            permitPetStyle = 'text-success'
            permitPetText = 'Pets allowed'
            permitPetIcon = 'fas fa-paw'
        } else {
            permitPetStyle = 'text-danger'
            permitPetText = 'No Pets allowed'
            permitPetIcon = 'fas fa-ban'
        }

        if (prop_sale[index].smoke == true) {
            permitSmokeStyle = 'text-success'
            permitSmokeText = 'Smoking allowed'
            permitSmokeIcon = 'fas fa-smoking'
        } else {
            permitSmokeStyle = 'text-danger'
            permitSmokeText = 'No Smoking allowed'
            permitSmokeIcon = 'fas fa-smoking-ban'
        }

        div_prop_alq.innerHTML += `
        <div class="col-md-4 mb-4">
            <div class="card">
            <img
                src="${prop_alq[index].src}"
                class="card-img-top"
                alt="Imagen del departamento"
            />
            <div class="card-body">
                <h5 class="card-title">
                    ${prop_alq[index].name}
                </h5>
                <p class="card-text">
                    ${prop_alq[index].description}
                </p>
                <p>
                <i class="fas fa-map-marker-alt"></i> ${prop_alq[index].location}
                </p>
                <p>
                <i class="fas fa-bed"></i> ${prop_alq[index].rooms} Rooms |
                <i class="fas fa-bath"></i> ${prop_alq[index].bathrooms} Bathrooms
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${prop_alq[index].price}</p>
                <p class="${permitSmokeStyle}">
                <i class="${permitSmokeIcon}"></i> ${permitSmokeText}
                </p>
                <p class="${permitPetStyle}">
                <i class="${permitPetIcon}"></i> ${permitPetText}
                </p>
            </div>
            </div>
        </div>`

    }
}


////Propiedades en Venta = prop_sale, total_prop_sale////

let total_prop_sale = document.getElementById('total_prop_sale')

if (total_prop_sale != null) {
    for (let index = 0; index < prop_sale.length; index++) {
        let permitPetStyle, permitPetText, permitPetIcon, permitSmokeStyle, permitSmokeText, permitSmokeIcon;

        if (prop_sale[index].pets == true) {
            permitPetStyle = 'text-success'
            permitPetText = 'Pets allowed'
            permitPetIcon = 'fas fa-paw'
        } else {
            permitPetStyle = 'text-danger'
            permitPetText = 'No Pets allowed'
            permitPetIcon = 'fas fa-ban'
        }

        if (prop_sale[index].smoke == true) {
            permitSmokeStyle = 'text-success'
            permitSmokeText = 'Smoking allowed'
            permitSmokeIcon = 'fas fa-smoking'
        } else {
            permitSmokeStyle = 'text-danger'
            permitSmokeText = 'No Smoking allowed'
            permitSmokeIcon = 'fas fa-smoking-ban'
        }

        total_prop_sale.innerHTML += `
    <div class="col-md-4 mb-4">
        <div class="card">
        <img
            src="${prop_sale[index].src}"
            class="card-img-top"
            alt="Imagen del departamento"
        />
        <div class="card-body">
            <h5 class="card-title">
                ${prop_sale[index].name}
            </h5>
            <p class="card-text">
                ${prop_sale[index].description}
            </p>
            <p>
            <i class="fas fa-map-marker-alt"></i> ${prop_sale[index].location}
            </p>
            <p>
            <i class="fas fa-bed"></i> ${prop_sale[index].rooms} Rooms |
            <i class="fas fa-bath"></i> ${prop_sale[index].bathrooms} Bathrooms
            </p>
            <p><i class="fas fa-dollar-sign"></i> ${prop_sale[index].price}</p>
            <p class="${permitSmokeStyle}">
            <i class="${permitSmokeIcon}"></i> ${permitSmokeText}
            </p>
            <p class="${permitPetStyle}">
            <i class="${permitPetIcon}"></i> ${permitPetText}
            </p>
        </div>
        </div>
    </div>`

    }
}

////Propiedades en Alquiler = alquiler, total_prop_alq//

let total_prop_alq = document.getElementById('total-prop-alq')

if (total_prop_alq != null) {
    for (let index = 0; index < prop_alq.length; index++) {
        let permitPetStyle, permitPetText, permitPetIcon, permitSmokeStyle, permitSmokeText, permitSmokeIcon;

        if (prop_alq[index].pets == true) {
            permitPetStyle = 'text-success'
            permitPetText = 'Pets allowed'
            permitPetIcon = 'fas fa-paw'
        } else {
            permitPetStyle = 'text-danger'
            permitPetText = 'No pets allowed'
            permitPetIcon = 'fas fa-ban'
        }

        if (prop_alq[index].smoke == true) {
            permitSmokeStyle = 'text-success'
            permitSmokeText = 'Smoking allowed'
            permitSmokeIcon = 'fas fa-smoking'
        } else {
            permitSmokeStyle = 'text-danger'
            permitSmokeText = 'No Smoking allowed'
            permitSmokeIcon = 'fas fa-smoking-ban'
        }

        total_prop_alq.innerHTML += `
    <div class="col-md-4 mb-4">
        <div class="card">
        <img
            src="${prop_alq[index].src}"
            class="card-img-top"
            alt="Imagen del departamento"
        />
        <div class="card-body">
            <h5 class="card-title">
                ${prop_alq[index].name}
            </h5>
            <p class="card-text">
                ${prop_alq[index].description}
            </p>
            <p>
            <i class="fas fa-map-marker-alt"></i> ${prop_alq[index].location}
            </p>
            <p>
            <i class="fas fa-bed"></i> ${prop_alq[index].rooms} Rooms |
            <i class="fas fa-bath"></i> ${prop_alq[index].bathrooms} Bathrooms
            </p>
            <p><i class="fas fa-dollar-sign"></i> ${prop_alq[index].price}</p>
            <p class="${permitSmokeStyle}">
            <i class="${permitSmokeIcon}"></i> ${permitSmokeText}
            </p>
            <p class="${permitPetStyle}">
            <i class="${permitPetIcon}"></i> ${permitPetText}
            </p>
        </div>
        </div>
    </div>`

    }
}
