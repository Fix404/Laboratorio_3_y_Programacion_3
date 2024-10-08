export const handleGetProductLocalStorage= () => {
    const products=JSON.parse(localStorage.getItem("products"));

    if(products){
        return products;
    }else{
        return [];
    }
};

export const setInLocalStorage= (productIn) => {
    if(productIn){
        let productsInLocal=handleGetProductLocalStorage();
        console.log(productIn);
    const existingIndex=productsInLocal.findIndex((productLocal) =>
        productLocal.id===productIn.id);
    if(existingIndex !== -1){
        productsInLocal[existingIndex]=productIn;
    }else{
        productsInLocal.push(productIn);
    }
    localStorage.setItem("products", JSON.stringify(productsInLocal));
    }
}