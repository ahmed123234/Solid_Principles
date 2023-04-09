/**
 * 
 *   the function below obey the OCP,
 *   because if we want to add new discount value there is no need to edit the function,
 *   all of what you do is to add the discount type property to discounts object
 * 
 * 
 *  */ 


const discounts = {
    '10%': .9,
    '20%': .8,
    '30%': .7
}

function calculatePrice(price, discountType) {

    const discount = discounts[discountType];

    if (discount === undefined) 
        throw Error ('Invalid discount');  
         
    else 
        return price * discount;  
         
}

try {
    const discountPrice = calculatePrice(100, '30%');
    console.log('Your discount price is: ', discountPrice);

} catch(err) {
    console.log(err.message);
}
