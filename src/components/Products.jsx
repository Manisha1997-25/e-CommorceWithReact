
import React from 'react'
import Card from './Card'

const Products = ({ products, dispatch }) => {

    console.log(products)

    return (
        <>
            <div className="container">
                <div className="row">

                    {products.length > 0 ? (
                        products.map((prod, i) => (
                            <div
                                className="col-12 col-md-6 col-lg-3"
                                key={prod.id}
                            >
                                <Card prod={prod} dispatch={dispatch} />
                            </div>
                        ))
                    ) : (
                        <p>No Products Found</p>
                    )}

                </div>
            </div>
        </>
    )
}

export default Products

