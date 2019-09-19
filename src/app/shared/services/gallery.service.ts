import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  fruits: any = [
    {
      id: 1,
      name: 'Apple',
      imageUrl: 'assets/images/fruits/apples.jpg'
    },
    {
      id: 2,
      name: 'Apricot',
      imageUrl: 'assets/images/fruits/apricots.jpg'
    },
    {
      id: 3,
      name: 'Avocado',
      imageUrl: 'assets/images/fruits/avocados.jpg'
    },
    {
      id: 4,
      name: 'Banana',
      imageUrl: 'assets/images/fruits/bananas.jpg'
    },
    {
      id: 5,
      name: 'Blackberry',
      imageUrl: 'assets/images/fruits/blackberries.jpg'
    },
    {
      id: 6,
      name: 'Blueberry',
      imageUrl: 'assets/images/fruits/blueberries.jpg'
    },
    {
      id: 7,
      name: 'Cherries',
      imageUrl: 'assets/images/fruits/cherries.jpg'
    },
    {
      id: 8,
      name: 'Dates',
      imageUrl: 'assets/images/fruits/dates.jpg'
    },
    {
      id: 9,
      name: 'Dragon Fruit',
      imageUrl: 'assets/images/fruits/dragonfruit.jpg'
    },
    {
      id: 10,
      name: 'Fig',
      imageUrl: 'assets/images/fruits/figs.jpg'
    },
    {
      id: 11,
      name: 'Gooseberry',
      imageUrl: 'assets/images/fruits/gooseberry.jpg'
    },
    {
      id: 12,
      name: 'Grape Fruit',
      imageUrl: 'assets/images/fruits/grapefruit.jpg'
    },
    {
      id: 13,
      name: 'Black Grape',
      imageUrl: 'assets/images/fruits/grapes-black.jpg'
    },
    {
      id: 14,
      name: 'Red Grape',
      imageUrl: 'assets/images/fruits/grapes-red.jpg'
    },
    {
      id: 15,
      name: 'White Grape',
      imageUrl: 'assets/images/fruits/grapes-white.jpg'
    },
    {
      id: 16,
      name: 'Jack Fruit',
      imageUrl: 'assets/images/fruits/jackfruit.png'
    },
    {
      id: 17,
      name: 'Kiwi',
      imageUrl: 'assets/images/fruits/kiwi.jpg'
    },
    {
      id: 18,
      name: 'Lemon',
      imageUrl: 'assets/images/fruits/lemons.jpg'
    },
    {
      id: 19,
      name: 'Lychee',
      imageUrl: 'assets/images/fruits/lychee.jpg'
    },
    {
      id: 20,
      name: 'Mango',
      imageUrl: 'assets/images/fruits/mangoes.jpg'
    },
    {
      id: 21,
      name: 'Mangosteen',
      imageUrl: 'assets/images/fruits/mangosteen.jpg'
    },
    {
      id: 22,
      name: 'Mosambi',
      imageUrl: 'assets/images/fruits/mosambi.jpg'
    },
    {
      id: 23,
      name: 'Mulberry',
      imageUrl: 'assets/images/fruits/mulberries.jpg'
    },
    {
      id: 24,
      name: 'Olive',
      imageUrl: 'assets/images/fruits/olives.jpg'
    },
    {
      id: 25,
      name: 'Orange',
      imageUrl: 'assets/images/fruits/oranges.jpg'
    },
    {
      id: 26,
      name: 'Papaya',
      imageUrl: 'assets/images/fruits/papaya.jpg'
    },
    {
      id: 27,
      name: 'Passion Fruit',
      imageUrl: 'assets/images/fruits/passionfruit.jpg'
    },
    {
      id: 28,
      name: 'Peach',
      imageUrl: 'assets/images/fruits/peach.jpg'
    },
    {
      id: 29,
      name: 'Pear',
      imageUrl: 'assets/images/fruits/pears.jpg'
    },
    {
      id: 30,
      name: 'Pineapple',
      imageUrl: 'assets/images/fruits/pineapples.jpg'
    },
    {
      id: 31,
      name: 'Plums',
      imageUrl: 'assets/images/fruits/plums.jpg'
    },
    {
      id: 32,
      name: 'Pomegranate',
      imageUrl: 'assets/images/fruits/pomegranates.jpg'
    },
    {
      id: 33,
      name: 'Rambutan',
      imageUrl: 'assets/images/fruits/rambutan.jpg'
    },
    {
      id: 34,
      name: 'Raspberry',
      imageUrl: 'assets/images/fruits/raspberries.jpg'
    },
    {
      id: 35,
      name: 'Sapota',
      imageUrl: 'assets/images/fruits/sapota.jpg'
    },
    {
      id: 36,
      name: 'shamam',
      imageUrl: 'assets/images/fruits/shamam.jpg'
    },
    {
      id: 37,
      name: 'Strawberry',
      imageUrl: 'assets/images/fruits/strawberries.jpg'
    },
    {
      id: 38,
      name: 'Watermelon',
      imageUrl: 'assets/images/fruits/watermelon.jpg'
    }
  ]

  constructor() { }

  getFruits() {
    return this.fruits;
  }

}

