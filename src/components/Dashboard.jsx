
import React, { useEffect, useState} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import HeroSection from './HeroSection'
import Products from './Products'
// import { cartReducer, initialState } from '../cart/cartReducer'

const Dashboard = ({ loggedUser, setLoggedUser, dispatch, state}) => {

    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [searchTitle, setSearchTitle] = useState('')
    const [filteredProducts, setFilteredProducts] = useState([])
    const [category, setCategory] = useState('')
    // const [state, dispatch] = useReducer(cartReducer, initialState)

    // console.log("Cart State", state)
    async function fetchData() {

        await fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then(data => {
                setProducts(data.products)
                setFilteredProducts(data.products)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchData()
    }, [])


    function fetchCategories() {

        const cats = [...new Set(
            products.map((p) => {
                return p.category
            })
        )]

        setCategories(cats)
    }


    useEffect(() => {
        fetchCategories()
    }, [products])


    function handleSearch(e) {

        const v = e.target.value

        setSearchTitle(v)

        const fitProd = products.filter((p) => {

            const prodByTitle =
                p.title.toLowerCase().includes(v.toLowerCase())

            const prodByCat =
                category === '' || p.category === category

            return prodByTitle && prodByCat
        })

        setFilteredProducts(fitProd)
    }


    function handleFilterCategory(e) {

        const cat = e.target.value

        setCategory(cat)

        const fitProd = products.filter((p) => {

            const prodByTitle =
                p.title.toLowerCase().includes(searchTitle.toLowerCase())

            const prodByCat =
                cat === '' || p.category === cat

            return prodByTitle && prodByCat
        })

        setFilteredProducts(fitProd)
    }


    return (
        <>
            <Navbar
                loggedUser={loggedUser}
                setLoggedUser={setLoggedUser}
                searchTitle={searchTitle}
                handleSearch={handleSearch}
                category={category}
                handleFilterCategory={handleFilterCategory}
                categories={categories}
                state={state}
            />

            <HeroSection />

            <Products
                products={filteredProducts}
                categories={categories}
                dispatch={dispatch}
            />

            <Footer />
        </>
    )
}

export default Dashboard

