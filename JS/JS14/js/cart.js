
// function openCart(e){
//   var cartData = getCartData(), 
//       totalItems = '';
  
//   if(cartData !== null){
//     totalItems = '<table class="shopping_list"><tr><th>Наименование</th><th>Цена</th><th>Кол-во</th></tr>';
//     for(let items in cartData){
//       totalItems += '<tr>';
//       for(var i = 0; i < cartData[items].length; i++){
//         totalItems += '<td>' + cartData[items][i] + '</td>';
//       }
//       totalItems += '</tr>';
//     }
//     totalItems += '</table>';
//     cartCont.innerHTML = totalItems;
//   } else {
//     cartCont.innerHTML = 'В корзине пусто!';
//   }
//   return false;
// }