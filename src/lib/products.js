
import products from "../../constants/products.json";

export function getAllProductIds() {
    
  return products.map(product => {
    return {
      params: {
        id: product.id
      }
    }
  })
}

export function getProductData(id) {

    const product = products.find(p => p.id === id);

    return {
        id,
        ...product
    }
}