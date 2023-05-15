import { productsData } from '../components/Products/data/data'

export default async function getProducts() {
    return productsData;
//     let dataResponse;
//     let statusOk;
//     await fetch('https://api.escuelajs.co/api/v1/products?limit=10&offset=10')
//     .then((data) => {
//         statusOk = data.ok;
//         return data.json();
//     })
//     .then((data)=>{
//         dataResponse =data;
//     })
//     .catch(()=>{
//         alert('Server error');
//     });
    
//    if (!statusOk) {
//     alert(dataResponse.message)
//    } else {
//     return dataResponse
//    }

}