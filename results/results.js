
function renderTable() {
    // const tr = document.createElement('tr');
    // const thName = document.createElement('th');
    // const thEncountered = document.createElement('th');
    // const thCaught = document.createElement('th');
    const table = document.createElement('table');
    
    results.forEach(pokemon => {
        const 
    });

    thEncountered.textContent = cartItem.quantity;
    
    const wigData = findById(wigs, cartItem.id);
    
    const price = wigData.price;
    const theName = wigData.name;
    
    tdName.textContent = theName;

    // new function 
    const subtotal = calcLineItem(price, cartItem.quantity);
    
    tdSubtotal.textContent = `$${subtotal}`;

    tr.append(thName, thEncountered, thCaught);

    return tr;
}