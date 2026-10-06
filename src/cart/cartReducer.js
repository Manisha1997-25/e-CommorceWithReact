export const initialState = {
    cart:[],
    cartLength:0,
    totalAmount:0
}
export function cartReducer(state, action){
    console.log("Reducer Called:",action)
    switch(action.type){
        case "AddToCart":
            // action.payload
            const isPresentIndex = state.cart.findIndex((p)=>p.prodID === action.payload.prodID)

            let updatedCart
            
            if(isPresentIndex == -1){
            // state.cart.push(action.payload)
            const prodWithQuantity = {...action.payload, quantity:1}
            updatedCart = [...state.cart, prodWithQuantity]
            }else{
                updatedCart = state.cart.map((p, index)=>{
                    if (index === isPresentIndex){
                        return { ...p, quantity: p.quantity+1}
                    }
                
                    return p
                })
            }    
            const totalAmount1 =updatedCart.reduce((ta, p)=>{
                const discountPrice =
                 p.price-((p.price * p.discountPercentage)/100)
                 return ta += (discountPrice * p.quantity)
            }, 0)
            console.log("Updated Cart:", updatedCart) 
             console.log(totalAmount1)
            return {...state, 
                cart:updatedCart, 
                cartLength:updatedCart.length,
                totalAmount:totalAmount1.toFixed(2)
            }

            case "IncreaseQuantity":{
                const updatedCart = state.cart.map((p) =>{
                    if(p.prodID === action.payload.prodID){
                        return {
                            ...p,
                            quantity: p.quantity + 1
                        }
                    }
                    return p
                })
                const totalAmount1 = updatedCart.reduce((ta, p) =>{
                     const discountedPrice = p.price - ((p.price * p.discountPercentage)/100)
                        return ta + (discountedPrice * p.quantity) 
            },0) 

             const cartLength1 = updatedCart.reduce(
                (total, p) => total + p.quantity,
                0
            )

            return {
                ...state,
                cart: updatedCart,
                cartLength: cartLength1,
                totalAmount: totalAmount1.toFixed(2)
            }
                
            }
            case "DecreaseQuantity":{
                const updatedCart = state.cart.map((p) =>{
                    if(p.prodID === action.payload.prodID){
                        return {
                            ...p,
                            quantity: p.quantity - 1
                        }
                    }
                    return p
                })
                 .filter((p) => p.quantity > 0)
                const totalAmount1 = updatedCart.reduce((ta, p) =>{
                     const discountedPrice = p.price - ((p.price * p.discountPercentage)/100)
                        return ta + (discountedPrice * p.quantity) 
            },0) 
           

             const cartLength1 = updatedCart.reduce(
                (total, p) => total + p.quantity,
                0
            )

            return {
                ...state,
                cart: updatedCart,
                cartLength: cartLength1,
                totalAmount: totalAmount1.toFixed(2)
            }
                
            }
            
            case "RemoveFromCart":{
                // action.payload
            // const isPresentIndex1 = state?.cart.findIndex((p)=>p.prodID == action.payload.prodID)
            // if(isPresentIndex1)
            const updatedCart = state.cart.filter((p) => p.prodID != action.payload.prodID)
            const totalAmount1 = updatedCart.reduce(
                    (ta, p) => {
                        const discountedPrice = p.price - ((p.price * p.discountPercentage)/100)
                        return ta + (discountedPrice * p.quantity) 
            },0) 

            const cartLength1 = updatedCart.reduce(
                (total, p) => total + p.quantity,
                0
            )

            return {
                ...state,
                cart: updatedCart,
                cartLength: updatedCart.length1,
                totalAmount: totalAmount1.toFixed(2)
            }
        }
             default:
                return state 
            }   

    }
