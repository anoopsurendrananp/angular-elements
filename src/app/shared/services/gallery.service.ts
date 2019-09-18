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
      name: 'Dragon Fruit',
      imageUrl: 'assets/images/fruits/dragonfruit.jpg'
    },
    {
      id: 9,
      name: 'Fig',
      imageUrl: 'assets/images/fruits/figs.jpg'
    },
    {
      id: 10,
      name: 'Gooseberry',
      imageUrl: 'assets/images/fruits/gooseberry.jpg'
    },
    {
      id: 11,
      name: 'Grape Fruit',
      imageUrl: 'assets/images/fruits/grapefruit.jpg'
    },
    {
      id: 12,
      name: 'Black Grape',
      imageUrl: 'assets/images/fruits/grapes-black.jpg'
    },
    {
      id: 13,
      name: 'Red Grape',
      imageUrl: 'assets/images/fruits/grapes-red.jpg'
    },
    {
      id: 14,
      name: 'White Grape',
      imageUrl: 'assets/images/fruits/grapes-white.jpg'
    },
    {
      id: 15,
      name: 'Jack Fruit',
      imageUrl: 'assets/images/fruits/jackfruit.png'
    },
    {
      id: 16,
      name: 'Kiwi',
      imageUrl: 'assets/images/fruits/kiwi.jpg'
    },
    {
      id: 17,
      name: 'Lemon',
      imageUrl: 'assets/images/fruits/lemons.jpg'
    },
    {
      id: 18,
      name: 'Lychee',
      imageUrl: 'assets/images/fruits/lychee.jpg'
    },
    {
      id: 19,
      name: 'Mango',
      imageUrl: 'assets/images/fruits/mangoes.jpg'
    },
    {
      id: 20,
      name: 'Mulberry',
      imageUrl: 'assets/images/fruits/mulberries.jpg'
    },
    {
      id: 21,
      name: 'Olive',
      imageUrl: 'assets/images/fruits/olives.jpg'
    },
    {
      id: 22,
      name: 'Orange',
      imageUrl: 'assets/images/fruits/oranges.jpg'
    },
    {
      id: 23,
      name: 'Papaya',
      imageUrl: 'assets/images/fruits/papaya.jpg'
    },
    {
      id: 24,
      name: 'Passion Fruit',
      imageUrl: 'assets/images/fruits/passionfruit.jpg'
    },
    {
      id: 25,
      name: 'Peach',
      imageUrl: 'assets/images/fruits/peach.jpg'
    },
    {
      id: 26,
      name: 'Pear',
      imageUrl: 'assets/images/fruits/pears.jpg'
    },
    {
      id: 27,
      name: 'Plums',
      imageUrl: 'assets/images/fruits/plums.jpg'
    },
    {
      id: 28,
      name: 'Pomegranate',
      imageUrl: 'assets/images/fruits/pomegranates.jpg'
    },
    {
      id: 29,
      name: 'Raspberry',
      imageUrl: 'assets/images/fruits/raspberries.jpg'
    },
    {
      id: 30,
      name: 'Sapota',
      imageUrl: 'assets/images/fruits/sapota.jpg'
    },
    {
      id: 31,
      name: 'shamam',
      imageUrl: 'assets/images/fruits/shamam.jpg'
    },
    {
      id: 32,
      name: 'Strawberry',
      imageUrl: 'assets/images/fruits/strawberries.jpg'
    },
    {
      id: 33,
      name: 'Watermelon',
      imageUrl: 'assets/images/fruits/watermelon.jpg'
    }
  ]

  constructor() { }

  getFruits() {
    return this.fruits;
  }

}

/**
 * {
      id: 2,
      name: 'apples',
      imageUrl: 'assets/images/fruits/apples.jpg'
    }
 */