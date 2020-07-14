import { Component, OnInit } from '@angular/core';
import { Dish } from'../shared/dish';
import { from } from 'rxjs';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  dishes: Dish[] = [
    {
      id: '0',
      name: 'pizza',
      image: 'assets/images/uthappizza.png',
      category: 'mains',
      featured: true,
      label: 'Hot',
      price: '4.99',
      description: "spicy delecious pizza with onion and olives"
    },
    {
      id: '1',
      name: 'lazane',
      image: 'assets/images/vadonut.png',
      category: 'big',
      featured: false,
      label: 'Hight',
      price: '15.9',
      description: "italien speciality delecious with onion and olives"

    },
    {
      id: '2',
      name: 'Vadonut',
      image: '/assets/images/vadonut.png',
      category: 'appetizer',
      featured: false,
      label: 'New',
      price: '1.99',
      description: 'A quintessential ConFusion experience, is it a vada or is it a donut?'
    },
    {
      id: '3',
      name: 'ElaiCheese Cake',
      image: '/assets/images/elaicheesecake.png',
      category: 'dessert',
      featured: false,
      label: '',
      price: '2.99',
      description: 'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
