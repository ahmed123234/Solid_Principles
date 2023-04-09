function calculatePrice(price, discount) {

    if (discount === '10%')
        return price * .9;

    else if (discount === '20%')
        return price * .8;

    else if (discount === '30%')
        return price * .7;

    esle
        throw Error ('Invalid discount');  
         
}

try {
    const discountPrice = calculatePrice(100, '30%');
    console.log('Your discount price is: ', discountPrice);

} catch(err) {
    console.log(err.message);
}
