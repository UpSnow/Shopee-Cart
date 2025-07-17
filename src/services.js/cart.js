// 🛒 Shopee Cart Actions - Carrinho de Compras

// ✅ Adiciona novo item ao carrinho
async function addItem(userCart, item) {
    userCart.push(item);
}

// ✅ Adiciona +1 à quantidade de um item existente no carrinho
async function adicionarUmItem(userCart, item) {
    const index = userCart.findIndex((p) => p.id === item.id);
    if (index !== -1) {
        userCart[index].quantity += 1;
    }
}

// ✅ Remove completamente um item do carrinho pelo ID
async function deleteItem(userCart, id) {
    // findIndex: retorna o índice (posição) do primeiro elemento que satisfaz a condição
    const index = userCart.findIndex((item) => item.id === id);
    if (index !== -1) {
        userCart.splice(index, 1);
    }
}

// ✅ Remove 1 unidade de um item; remove o item por completo se quantidade chegar a 0
async function removeItem(userCart, item) {
    const index = userCart.findIndex((p) => p.id === item.id);

    if (index === -1) {
        console.log("Item não encontrado.");
        return;
    }

    if (userCart[index].quantity > 1) {
        userCart[index].quantity -= 1;
    } else {
        userCart.splice(index, 1);
    }
}

// ✅ Exibe o carrinho com nome, preço, quantidade e subtotal
async function displayCart(userCart) {
    console.log("\n🛒 Lista do Carrinho:");
    userCart.forEach((item, index) => {
        console.log(
            `${index + 1}. ${item.name} - R$ ${item.price.toFixed(2)} | ${item.quantity}x | Subtotal = R$ ${item.subtotal.toFixed(2)}`
        );
    });
    console.log("-----------------------------------------------------------------");
}

// ✅ Calcula e exibe o total do carrinho com base nos subtotais
async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item) => total + item.subtotal, 0);
    console.log("\n🧾 TOTAL DO CARRINHO:");
    console.log(`🎁 Total: R$ ${result.toFixed(2)}`);
}

// ✅ Filtra e exibe itens do carrinho de acordo com o tipo
async function filtraType(userCart, type) {
    const filtrados = userCart.filter((item) => item.type === type);

    console.log(`\n📦 Itens do tipo: ${type}`);
    await displayCart(filtrados);
}


export{addItem,deleteItem,removeItem,calculateTotal,displayCart,adicionarUmItem, filtraType}