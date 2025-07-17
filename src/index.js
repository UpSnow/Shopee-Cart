// index.js

import createItem from "./services.js/item.js";
import * as cartService from "./services.js/cart.js";
import * as WhishListService from "./services.js/whishList.js"

const myCart = [];
const myWhishList = [];

console.log("👋 Bem-vindo(a) ao seu Shopee Cart!");

// Criando os itens
const item1 = await createItem(1, "Blusa", "roupa", 45.99, 1);
const item2 = await createItem(2, "Sapato", "calçado", 99.99, 5);
const item3 = await createItem(3, "Cueca", "roupa", 45.99, 2);
const item4 = await createItem(4, "Celular", "eletrônico", 1000.00, 4);

// Adicionando itens ao carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myCart, item3);
await cartService.addItem(myCart, item4);

await WhishListService.addWhishList(myWhishList,item1)
await WhishListService.addWhishList(myWhishList,item2)

await WhishListService.displayWishlist(myWhishList)




// Manipulações
await cartService.removeItem(myCart, item2);          // Remove 1 do sapato
await cartService.adicionarUmItem(myCart, item1);     // Adiciona +1 da blusa
await cartService.removeItem(myCart, item2);          // Remove mais 1 do sapato

// Filtra por tipo
await cartService.filtraType(myCart, "roupa");

// Exibe o carrinho atualizado
await cartService.displayCart(myCart);

// Calcula e exibe o total
await cartService.calculateTotal(myCart);