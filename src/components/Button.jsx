import PropTypes from 'prop-types'

const Button = ({ buttonInfo }) => {
  return (
    <div className='button'>
      <div className='block button'>
        { buttonInfo.name }
      </div>
    </div>
  )
}

// Validate the incoming props object
Button.propTypes = {
  buttonInfo: PropTypes.shape({
    name: PropTypes.string
  })
}

export default Button