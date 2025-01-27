import bannerImage from '../../assets/banner_placeholder.png'

const Banner = () => {
  return (
    <div>
      <div className='border'>
        <div>
          Mega Electronics
        </div>
        <div>
          Your source for quality electrical components at an affordable price
        </div>
      </div>
      <div className='banner-image'>
        <img src={ bannerImage } alt="Banner image" />
      </div>
      <div className='banner-text'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id 
      est laborum.
      </div>
    </div>
  )
}

export default Banner