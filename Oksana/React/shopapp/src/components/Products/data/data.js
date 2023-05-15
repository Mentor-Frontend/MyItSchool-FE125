import product1 from '../data/images/product-1.jpg';
import product2 from '../data/images/product-2.jpg';
import product3 from '../data/images/product-3.jpg';
import sweet1 from '../data/images/sweet3.jpg';
import sweet2 from '../data/images/sweet-2.jpg';
import sweet3 from '../data/images/sweet-3.jpg';
import coffee2 from '../data/images/coffee-2.jpg'
import coffee3 from '../data/images/coffee-3.jpg'


export const productsData = [
  {
    id: 1,
    img: product1,
    cat: 'Coffee',
    name: 'ФРАППУЧИНО',
    desc:
      'Лед, эспрессо, молоко, сахар, сироп',
    price: 3.25,
   },
  {
    id: 2,
    img: product2,
    cat: 'Coffee',
    name: 'КАРАМЕЛЬНЫЙ МАККИАТО',
    desc:
      'Лед, холодное молоко, ванильный сироп, карамельный крем, эспрессо',
    price: 4.15,
   },
  {
    id: 3,
    img: product3,
    cat: 'Coffee',
    name: 'АМЕРИКАНО',
    desc:
      'Эспрессо, горячая вода',
    price: 2.25,
  },

  {
    id: 4,
    img: sweet2,
    cat: 'Sweet',
    name: 'ПОНЧИК',
    desc:
      'Пончики в бельгийской шоколадной глазури, покрытые глазурью с посыпкой сверху',
    price: 9.99,
   },
  {
    id: 5,
    img: sweet3,
    cat: 'Sweet',
    name: 'КАРАМЕЛЬНОЕ УДОВОЛЬСТВИЕ',
    desc:
      'Ванильное мороженое, покрытое карамельно-шоколадной глазурью с кокосовой палочкой',
    price:12.99,
  },
  {
    id: 6,
    img: sweet1,
    cat: 'Sweet',
    name: 'БРАУНИ',
    desc:
      'Двойные квадратики брауни с помадкой, покрытые кусочками белого шоколада и орехами макадамия',
    price: 9.99,

  },

  {
    id: 7,
    img: coffee2,
    cat: 'Beens',
    name: 'Колумбийский кофе',
    desc:
      'Свежайший колумбийский кофе средней обжарки',
    price: 99.99,

  },
  {
    id: 8,
    img: coffee3,
    cat: 'Beens',
    name: 'Бразильский кофе',
    desc:
      'Свежайший бразильский кофе сильной обжарки',
    price: 99.99,

  }

];