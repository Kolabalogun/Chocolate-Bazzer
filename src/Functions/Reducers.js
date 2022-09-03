export const Reducers = (state, action) => {
    if (action.type === "SELECTEDCATEGORY") {
        let item = action.payload;

        let filterFoodList = state.ProductGeneralArray.filter((foods) =>
            foods.categories.includes(item.id)
        );

        return {
            ...state,
            dummycategory: filterFoodList,
            selectedCategory: action.payload,
        };
    }

    if (action.type === "INCREASE") {
        let newvalue;

        let tempCart = state.ProductArray.map((food) => {
            if (food.id === action.payload) {
                newvalue = food.value;
                return { ...food, value: food.value + 1 };
            }

            return food;
        });
        tempCart.map((food) => {
            if (food.id === action.payload) {
                newvalue = food.value;
                return food.value;
            }
        });



        return { ...state, ProductArray: tempCart, currentFood: newvalue };
    }
    if (action.type === "DECREASE") {
        let newvalue;

        let tempCart = state.ProductArray.map((food) => {
            if (food.id === action.payload) {
                newvalue = food.value;
                return { ...food, value: food.value - 1 };
            }

            return food;
        });
        tempCart.map((food) => {
            if (food.id === action.payload) {
                newvalue = food.value;
                return food.value;
            }
        });

        return { ...state, ProductArray: tempCart, currentFood: newvalue };
    }
    if (action.type === "REMOVEITEM") {
        let newvalue;

        let tempCart = state.ProductArray.map((food) => {
            if (food.id === action.payload) {
                newvalue = food.value;
                return { ...food, value: food.value = 0 };
            }

            return food;
        });
        tempCart.map((food) => {
            if (food.id === action.payload) {
                newvalue = food.value;
                return food.value;
            }
        });

        return { ...state, ProductArray: tempCart, currentFood: newvalue };
    }


    if (action.type === "GETTOTAL") {
        const { total, navAmount } = state.ProductArray.reduce(
            (cartTotal, cartItem) => {
                const { price, value } = cartItem;
                const itemtotal = price * value;

                cartTotal.total += itemtotal;
                cartTotal.navAmount += value;
                // console.log(price, value);
                return cartTotal;
            },
            {
                total: 0,
                navAmount: 0,
            }
        );

        return { ...state, total, navAmount };
    }


    if (action.type === "SEARCH") {
        const newData = state.ProductGeneralArray.filter((p) => p.type === action.payload);

        return {
            ...state,
            ProductArray: newData,
        };


    }





    if (action.type === "CHECKOUT") {
        let tempCart = state.ProductArray.map((food) => {
            return { ...food, value: 0 };
        });

        return { ...state, ProductArray: tempCart };
    }

    return state;
};
