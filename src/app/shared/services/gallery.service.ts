import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  fruits: any = [
    {
      id: 1,
      name: 'Apple',
      scientificName: 'Malus domestica',
      imageUrl: 'assets/images/fruits/apples.jpg'
    },
    {
      id: 2,
      name: 'Apricot',
      scientificName: 'Prunus armeniaca',
      imageUrl: 'assets/images/fruits/apricots.jpg'
    },
    {
      id: 3,
      name: 'Avocado',
      scientificName: 'Persea americana',
      imageUrl: 'assets/images/fruits/avocados.jpg'
    },
    {
      id: 4,
      name: 'Banana',
      scientificName: 'Musa acuminata',
      imageUrl: 'assets/images/fruits/bananas.jpg'
    },
    {
      id: 5,
      name: 'Bing Cherry',
      scientificName: 'Prunus avium',
      imageUrl: 'assets/images/fruits/bing-cherries.jpg'
    },
    {
      id: 6,
      name: 'Blackberry',
      scientificName: 'Rubus fruticosus',
      imageUrl: 'assets/images/fruits/blackberries.jpg'
    },
    {
      id: 7,
      name: 'Blueberry',
      scientificName: 'Cyanococcus vaccinium',
      imageUrl: 'assets/images/fruits/blueberries.jpg'
    },
    {
      id: 8,
      name: 'Cherry',
      scientificName: 'Prunus avium',
      imageUrl: 'assets/images/fruits/cherries.jpg'
    },
    {
      id: 9,
      name: 'Custard Apple',
      scientificName: 'Annona reticulata',
      imageUrl: 'assets/images/fruits/custard-apple.jpg'
    },
    {
      id: 10,
      name: 'Dates',
      scientificName: 'Phoenix dactylifera',
      imageUrl: 'assets/images/fruits/dates.jpg'
    },
    {
      id: 11,
      name: 'Dragon Fruit',
      scientificName: 'Hylocereus undatus',
      imageUrl: 'assets/images/fruits/dragonfruit.jpg'
    },
    {
      id: 12,
      name: 'Egg Fruit',
      scientificName: 'Pouteria campechiana',
      imageUrl: 'assets/images/fruits/egg-fruits.jpg'
    },
    {
      id: 13,
      name: 'Fig',
      scientificName: 'Ficus caica',
      imageUrl: 'assets/images/fruits/figs.jpg'
    },
    {
      id: 14,
      name: 'Gooseberry',
      scientificName: 'Ribes uva-crispa',
      imageUrl: 'assets/images/fruits/gooseberry.jpg'
    },
    {
      id: 15,
      name: 'Grapes',
      scientificName: 'Vitis vinifera',
      imageUrl: 'assets/images/fruits/grapes.jpg'
    },
    {
      id: 16,
      name: 'Grape Fruit',
      scientificName: 'Citrus × paradisi',
      imageUrl: 'assets/images/fruits/grapefruit.jpg'
    },
    {
      id: 17,
      name: 'Guava',
      scientificName: 'Psidium guajava',
      imageUrl: 'assets/images/fruits/guavas.jpg'
    },
    {
      id: 18,
      name: 'Jack Fruit',
      scientificName: 'Artocarpus heterophyllus',
      imageUrl: 'assets/images/fruits/jackfruit.png'
    },
    {
      id: 19,
      name: 'Jamba',
      scientificName: 'Syzygium samarangense',
      imageUrl: 'assets/images/fruits/jamba.jpg'
    },
    {
      id: 20,
      name: 'Kiwi',
      scientificName: 'Actinidia deliciosa',
      imageUrl: 'assets/images/fruits/kiwi.jpg'
    },
    {
      id: 21,
      name: 'Lemon',
      scientificName: 'Citrus × limon',
      imageUrl: 'assets/images/fruits/lemons.jpg'
    },
    {
      id: 22,
      name: 'Lychee',
      scientificName: 'Litchi chinensis',
      imageUrl: 'assets/images/fruits/lychee.jpg'
    },
    {
      id: 23,
      name: 'Mango',
      scientificName: 'Mangifera indica',
      imageUrl: 'assets/images/fruits/mangoes.jpg'
    },
    {
      id: 24,
      name: 'Mangosteen',
      scientificName: 'Garcinia mangostana',
      imageUrl: 'assets/images/fruits/mangosteen.jpg'
    },
    {
      id: 25,
      name: 'Mosambi',
      scientificName: 'Citrus limetta',
      imageUrl: 'assets/images/fruits/mosambi.jpg'
    },
    {
      id: 26,
      name: 'Mulberry',
      scientificName: 'Morus nigra',
      imageUrl: 'assets/images/fruits/mulberries.jpg'
    },
    {
      id: 27,
      name: 'Olive',
      scientificName: 'Olea europaea',
      imageUrl: 'assets/images/fruits/olives.jpg'
    },
    {
      id: 28,
      name: 'Orange',
      scientificName: 'Citrus X sinensis',
      imageUrl: 'assets/images/fruits/oranges.jpg'
    },
    {
      id: 29,
      name: 'Papaya',
      scientificName: 'Carica papaya',
      imageUrl: 'assets/images/fruits/papaya.jpg'
    },
    {
      id: 30,
      name: 'Passion Fruit',
      scientificName: 'Passiflora edulis',
      imageUrl: 'assets/images/fruits/passionfruit.jpg'
    },
    {
      id: 31,
      name: 'Peach',
      scientificName: 'Prunus persica',
      imageUrl: 'assets/images/fruits/peach.jpg'
    },
    {
      id: 32,
      name: 'Pear',
      scientificName: 'Pyrus communis',
      imageUrl: 'assets/images/fruits/pears.jpg'
    },
    {
      id: 33,
      name: 'Pineapple',
      scientificName: 'Ananas comosus',
      imageUrl: 'assets/images/fruits/pineapples.jpg'
    },
    {
      id: 34,
      name: 'Plum',
      scientificName: 'Prunus subg. Prunus',
      imageUrl: 'assets/images/fruits/plums.jpg'
    },
    {
      id: 35,
      name: 'Pomegranate',
      scientificName: 'Punica granatum',
      imageUrl: 'assets/images/fruits/pomegranates.jpg'
    },
    {
      id: 36,
      name: 'Rambutan',
      scientificName: 'Nephelium lappaceum',
      imageUrl: 'assets/images/fruits/rambutan.jpg'
    },
    {
      id: 37,
      name: 'Raspberry',
      scientificName: 'Rubus idaeus',
      imageUrl: 'assets/images/fruits/raspberries.jpg'
    },
    {
      id: 38,
      name: 'Sapota',
      scientificName: 'Manilkara zapota',
      imageUrl: 'assets/images/fruits/sapota.jpg'
    },
    {
      id: 39,
      name: 'Shamam',
      scientificName: 'Cucumis melo',
      imageUrl: 'assets/images/fruits/shamam.jpg'
    },
    {
      id: 40,
      name: 'Star Fruit',
      scientificName: 'Averrhoa carambola',
      imageUrl: 'assets/images/fruits/starfruit.jpg'
    },
    {
      id: 41,
      name: 'Strawberry',
      scientificName: 'Fragaria × ananassa',
      imageUrl: 'assets/images/fruits/strawberries.jpg'
    },
    {
      id: 42,
      name: 'Watermelon',
      scientificName: 'Citrullus lanatus',
      imageUrl: 'assets/images/fruits/watermelon.jpg'
    }
  ]

  constructor() { }

  getFruits(index, limit) {
    let content = this.fruits.slice(index * limit, (index + 1) * limit);
    const response = {
      status: true,
      data: {
        items: content,
        total: this.fruits.length
      }
    };
    return response;
  }

}

