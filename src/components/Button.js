import PropTypes from 'prop-types'

export const Button = (props) => {
  const {
    color,
    text,
    onClick,
  } = props;

  return (
    <button onClick={onClick} className='btn' style={{backgroundColor: color}}>{text}</button>
  )
}

Button.defaultProps = {
  color: "steelblue",
  onClick: () => {
    console.log('default click');
  },
};

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
}