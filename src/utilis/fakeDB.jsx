// add dada to local storage
const addToDb = id =>{
  let shoppingCart ={}
  const storeCart = localStorage.getItem('shopping-cart')

  if(storeCart){
    shoppingCart = JSON.parse(storeCart)
  }

  const quantity = shoppingCart[id]
  if(quantity){
    const newQuantity =quantity + 1
    shoppingCart[id]=newQuantity
  }else{
    shoppingCart[id] =1
  }
  localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart))
}

const getShoppingCart = () =>{
  let shoppingCart ={}
  const getshoppingCart = localStorage.getItem('shopping-cart')
  if(getshoppingCart){
    shoppingCart = JSON.parse(getshoppingCart)
  }
  return shoppingCart

}

export {addToDb,getShoppingCart}