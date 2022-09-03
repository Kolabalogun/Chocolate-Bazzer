import { toast } from "react-toastify";




export const CartReducer = (state, action) => {
    const { shoppingCart, totalPrice, totalQty } = state


    let product;
    let index;
    let updatedPrice;
    let updatedQty;


    switch (action.type) {
        case 'ADD_TO_CART':
            const check = shoppingCart.find(product => product.dateId === action.id)

            if (check) {


                toast.info('Product is already in your cart')

                return state
            }

            else {
                product = action.product;
                product['qty'] = 1;
                product['TotalProductPrice'] = Number(product.price) * product.qty
                updatedQty = totalQty + 1;
                updatedPrice = totalPrice + Number(product.price);

                localStorage.setItem("shoppingCart", JSON.stringify([product, ...shoppingCart]));
                localStorage.setItem("totalPrice", JSON.stringify(updatedPrice));
                localStorage.setItem("totalQty", JSON.stringify(updatedQty))

                return {


                    shoppingCart: [product, ...shoppingCart], totalPrice: updatedPrice, totalQty: updatedQty
                }

            }
            break;

        case 'INC':
            product = action.product;
            product.qty = product.qty + 0.5;
            product.TotalProductPrice = product.qty * Number(product.price);
            updatedQty = totalQty + 1;
            updatedPrice = totalPrice + Number(product.price);

            index = shoppingCart.findIndex(product => product.dateId === action.id);
            shoppingCart[index] = product;

            localStorage.setItem("shoppingCart", JSON.stringify([product, ...shoppingCart]));
            localStorage.setItem("totalPrice", JSON.stringify(updatedPrice));
            localStorage.setItem("totalQty", JSON.stringify(updatedQty))

            return {
                shoppingCart: [...shoppingCart], totalPrice: updatedPrice, totalQty: updatedQty
            }
            break;

        case 'DEC':
            product = action.product;
            if (product.qty > 1) {
                product.qty = product.qty - 0.5;
                product.TotalProductPrice = product.qty * Number(product.price);
                updatedPrice = totalPrice - Number(product.price);
                updatedQty = totalQty - 1;
                index = shoppingCart.findIndex(cart => cart.dateId === action.id);
                shoppingCart[index] = product;

                localStorage.setItem("shoppingCart", JSON.stringify([product, ...shoppingCart]));
                localStorage.setItem("totalPrice", JSON.stringify(updatedPrice));
                localStorage.setItem("totalQty", JSON.stringify(updatedQty))

                return {
                    shoppingCart: [...shoppingCart], totalPrice: updatedPrice, totalQty: updatedQty
                }
            }
            else {
                return state;
            }
            break;

        case 'DELETE':
            const filtered = shoppingCart.filter(product => product.dateId !== action.id);
            console.log(shoppingCart);
            product = action.product;
            updatedQty = totalQty - product.qty;
            updatedPrice = totalPrice - product.qty * Number(product.price);


            localStorage.setItem("shoppingCart", JSON.stringify([]));
            localStorage.setItem("totalPrice", JSON.stringify(0));
            localStorage.setItem("totalQty", JSON.stringify(0))

            return {
                shoppingCart: [...filtered], totalPrice: updatedPrice, totalQty: updatedQty
            }
            break;

        case 'EMPTY':
            return {
                shoppingCart: [], totalPrice: 0, totalQty: 0
            }

        default:
            return state;
    }

}