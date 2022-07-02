const instrumentsArray = [
  {
    'id': 1,
    'webp': 'img/instrument-4.webp',
    'webp2x': 'img/instrument-4@2x.webp 2x',
    'photo': 'img/instrument-4.jpg',
    'photo2x': 'img/instrument-4@2x.jpg 2x',
    'title': 'Дрель',
    'text': 'Супер дрель для сверления отверстий в стенах по утрам в выходные. Бесшумная',
  },
  {
    'id': 2,
    'webp': 'img/instrument-4.webp',
    'webp2x': 'img/instrument-4@2x.webp 2x',
    'photo': 'img/instrument-4.jpg',
    'photo2x': 'img/instrument-4@2x.jpg 2x',
    'title': 'Дрель',
    'text': 'Супер дрель для сверления отверстий в стенах по утрам в выходные. Бесшумная',
  },
  {
    'id': 3,
    'webp': 'img/instrument-4.webp',
    'webp2x': 'img/instrument-4@2x.webp 2x',
    'photo': 'img/instrument-4.jpg',
    'photo2x': 'img/instrument-4@2x.jpg 2x',
    'title': 'Дрель',
    'text': 'Супер дрель для сверления отверстий в стенах по утрам в выходные. Бесшумная',
  },
  {
    'id': 4,
    'webp': 'img/instrument-4.webp',
    'webp2x': 'img/instrument-4@2x.webp 2x',
    'photo': 'img/instrument-4.jpg',
    'photo2x': 'img/instrument-4@2x.jpg 2x',
    'title': 'Дрель',
    'text': 'Супер дрель для сверления отверстий в стенах по утрам в выходные. Бесшумная',
  },
  {
    'id': 5,
    'webp': 'img/instrument-4.webp',
    'webp2x': 'img/instrument-4@2x.webp 2x',
    'photo': 'img/instrument-4.jpg',
    'photo2x': 'img/instrument-4@2x.jpg 2x',
    'title': 'Дрель',
    'text': 'Супер дрель для сверления отверстий в стенах по утрам в выходные. Бесшумная',
  },
  {
    'webp': 'img/instrument-4.webp',
    'webp2x': 'img/instrument-4@2x.webp 2x',
    'photo': 'img/instrument-4.jpg',
    'photo2x': 'img/instrument-4@2x.jpg 2x',
    'title': 'Дрель',
    'text': 'Супер дрель для сверления отверстий в стенах по утрам в выходные. Бесшумная',
  }

];

const cardsWrapper = document.querySelector('.cards-list');

const createCards = () => {

  const createCard = (item) => {
    const newCard = document.createElement('li');
    newCard.classList.add('catalog-card');
    newCard.innerHTML = `
      <picture class="catalog-card__picture">
        <source type="image/webp" srcset="${item.webp}, ${item.webp2x}" />
        <img class="catalog-card__image" src="${item.photo}" srcset="${item.photo2x}" alt="employer card" width="300" height="300">
      </picture>
      <div class="catalog-card__details">
        <p class="title title--medium catalog-card__title">${item.title}</p>
        <p class="catalog-card__text">${item.text}</p>
      </div>
      <a href="#" class="link catalog-card__link" aria-label="ссылка на инструмент" target="_blank"></a>`;
    cardsWrapper.append(newCard);
  };

  const fillCardsList = (array) => {
    array.forEach((item) => {
      createCard(item);
    });
  };
  fillCardsList(instrumentsArray);
};

export {createCards};


