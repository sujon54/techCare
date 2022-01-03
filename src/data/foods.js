import bimg1 from '../assets/img/burger.jpg';
import chimg1 from '../assets/img/chicken.jpg';
import cmimg1 from '../assets/img/cm.jpg';
import pimg1 from '../assets/img/pasta.jpg';

const foods = [
    {
        id: 1,
        name: 'Classic Burger',
        price: 120,
        qty: 2,
        img: bimg1,
        brand: 'Pizza Hut'
    },
    {
        id: 2,
        name: 'Pasta',
        price: 150,
        qty: 1,
        img: pimg1,
        brand: 'Kudus'
    },
    {
        id: 3,
        name: 'Fried Chicken',
        price: 200,
        qty: 2,
        img: chimg1,
        brand: 'Burger King'
    },
    {
        id: 4,
        name: 'Chow Mein',
        price: 100,
        qty: 3,
        img: cmimg1,
        brand: 'Chung Chang'
    }
];

export default foods;