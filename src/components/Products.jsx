import Product from '../components/Product.jsx'

const Products = () => {
  return (
    <div>
      <div className="banner">
        <div className='border'>
          <div>
            Products
          </div>
        </div>
      </div>

      <div className='product-list'>
        <Product productInfo={{ name: "Right hand monkey wrench" }} />
        <Product productInfo={{ name: "Reversable screwdriver" }} />
        <Product productInfo={{ name: "Foam headed hammer" }} />
      </div>
    </div>
  )
}

export default Products