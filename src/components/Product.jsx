import PropTypes from 'prop-types'
import Button from './Button.jsx'
import productImage from '../../assets/product_placeholder.png'

const Product = ({ productInfo }) => {
  const addToFavorites = () => {
    // Handle this action
  }

  const addToCart = () => {
    // Handle this action
  }

  return (
    <div className='product'>
      <div>
        <img src={ productImage } alt="Product image" />
      </div>
      <div className='product-text'>
        <b><em>{ productInfo.name }</em></b>
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
        commodo consequat.
      </div>
      <div className='row'>
        <Button className='block button' buttonInfo={{ name: "Add to Favorites", eventHandler: addToFavorites}} />
        <Button className='block button' buttonInfo={{ name: "Add to Cart", eventHandler: addToCart }} />
      </div>
    </div>
  )
}

// Validate the incoming props object
Product.propTypes = {
  productInfo: PropTypes.shape({
    name: PropTypes.string
  })
}

export default Product