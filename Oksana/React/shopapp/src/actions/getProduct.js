import { productsData } from '../components/Products/data/data';


export default async function getProduct(id) {
	let id_n = Number(id.params.id)
	return productsData.filter(elem => elem.id=== id_n);
	
	// let dataResponse;
	// let statusOk;
	// await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
	// 	.then((data) => {
	// 		statusOk = data.ok;
	// 		return data.json();
	// 	})
	// 	.then((data) => {
	// 		dataResponse = data;
	// 	})
	// 	.catch(() => {
	// 		alert("Server Error!");
	// 	});
	// if (!statusOk) {
    //     alert(dataResponse.message)
	// } else {
    //     return dataResponse
    // }

    
}