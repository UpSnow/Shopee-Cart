


async function addWhishList(userWhishList, item) {

    const exists = userWhishList.find((p) => p.id === item.id );


    if(!exists  ){
        userWhishList.push(item);
        console.log(`🧡 "${item.name}" adicionado à lista de desejos.`);
    }else {
        console.log(`🔁 "${item.name}" já está na lista de desejos.`);
    }
    
};

async function displayWishlist(userWhishList) {

    if(userWhishList.lenght === 0){
        console.log("Sua lista de desejos está vazia.");
        return;
    }

    console.log("🌟 Lista de Desejos:");

    userWhishList.forEach(item => {
        console.log(`- ${item.name} (${item.type}) - R$ ${item.price.toFixed(2)}`);
        
    });




    
}

export {addWhishList,displayWishlist}