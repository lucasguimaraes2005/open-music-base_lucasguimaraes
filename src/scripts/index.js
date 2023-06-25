/* Desenvolva sua lógica aqui ... */
import {categories, products} from './productsData.js';
import {renderDarkMode} from './theme.js'


function createCard (product) {
    const cardContainer = document.createElement('li')
    const cardImg = document.createElement('img')
    const cardParagraph = document.createElement('p')
    const cardTittle = document.createElement('h2')
    const cardSpan = document.createElement('span')
    const cardSpanParagraph = document.createElement('p')
    const cardButton = document.createElement('button')

    cardContainer.classList.add('card__container')

    cardImg.src = product.img;
    cardImg.alt = product.title;
    cardImg.classList.add('card__image')

    cardParagraph.classList.add('card__paragraph')
    cardParagraph.innerText = product.band + ' ' + product.year;

    cardTittle.classList.add('card__tittle')
    cardTittle.innerText = product.title; 

    cardSpanParagraph.classList.add('card__paragraph')
    cardSpanParagraph.innerText = `R$ ${product.price}.00`;

    cardButton.classList.add('card__button')
    cardButton.innerText = 'Comprar';
    
    cardSpan.classList.add('card__span')

    cardSpan.append(cardSpanParagraph, cardButton)

    cardContainer.append(cardImg, cardParagraph, cardTittle, cardSpan)

    return cardContainer;
}

const renderCard = (array) => {
    const mainList = document.querySelector('.albuns__list');

    mainList.innerHTML = ''

    array.forEach(product => {
        const card = createCard(product);

        mainList.appendChild(card);
    })
}

const renderButtons = (array) => {
    
    const buttonsList = document.querySelector('.filters__buttons');
    
    for (var i = 0; i < array.length; i++) {
        const button = document.createElement('button');

        button.classList.add('filter__button')
        button.textContent = array[i];

        buttonsList.appendChild(button)
    }
}

const filterByType = (array) => {
    const buttons = document.querySelectorAll('.filter__button')

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const buttonText = event.target.innerText;

            if(buttonText == 'Todos') {
                renderCard(array)
            } else if (buttonText == "Pop") {
                const filtered = array.filter(products => {
                    return products.category == 1;
                })

                renderCard(filtered)
            } else if (buttonText == "MPB") {
                const filtered = array.filter(products => {
                    return products.category == 2;
                })

                renderCard(filtered)
            } else if (buttonText == "Forró") {
                const filtered = array.filter(products => {
                    return products.category == 3;
                })

                renderCard(filtered)
            } else if (buttonText == "Samba") {
                const filtered = array.filter(products => {
                    return products.category == 4;
                })

                renderCard(filtered)
            } else if (buttonText == "Baião") {
                const filtered = array.filter(products => {
                    return products.category == 5;
                })

                renderCard(filtered)
            } else if (buttonText == "Rap") {
                const filtered = array.filter(products => {
                    return products.category == 6;
                })

                renderCard(filtered)
            } else if (buttonText == "Hip-Hop") {
                const filtered = array.filter(products => {
                    return products.category == 7;
                })

                renderCard(filtered)
            } else if (buttonText == "Rock") {
                const filtered = array.filter(products => {
                    return products.category == 8;
                })

                renderCard(filtered)
            } else if (buttonText == "Reggae") {
                const filtered = array.filter(products => {
                    return products.category == 9;
                })

                renderCard(filtered)
            } else if (buttonText == "Country") {
                const filtered = array.filter(products => {
                    return products.category == 10;
                })

                renderCard(filtered)
            } else if (buttonText == "Gospel") {
                const filtered = array.filter(products => {
                    return products.category == 11;
                })

                renderCard(filtered)
            } 
        })
    })
}

const filterByRange = (array) => {
    const inputRange = document.querySelector('#inputRange')

    inputRange.addEventListener('input', () => {
        const paragraph = document.querySelector('.range__paragraph')

        paragraph.innerText = `Até R$ ${inputRange.value}`

        const arrayFilter = array.filter((product) => {
            return product.price >= inputRange.value
        })

        renderCard(arrayFilter)
    })
}

renderCard(products)
renderButtons(categories)
filterByType(products)
filterByRange(products)
renderDarkMode()

