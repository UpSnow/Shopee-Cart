//CASOS DE USO DOS ITENS


// -> criar item com subtotal certo
async function createItem(id,name,type,price,quantity) {
    return{
        id,
        name,
        type,
        price,
        quantity,
        get subtotal(){
            return this.price * this.quantity;
        },
        // subtotal: () => price * quantity,
    };
    
};

export default createItem
