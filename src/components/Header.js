import PropTypes from 'prop-types'
import { Button } from './Button';

const Header = (props) => {
  const {
    username,
    onAdd,
    showAdd,
  } = props;
  return (
    <header>
      <h1>{username} task tracker</h1>
      <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/> 
    </header>
  )
}

// This sets any default properties
Header.defaultProps = {
  username: "Your",
};

// controls the typing
// only raises a warning, doesn't throw error
Header.propTypes = {
  username: PropTypes.string
}

// CSS styles inside JS
// can be passed into the returns jsx
// const headingStyle = {
//   color: "green",
//   backgroundColor: "black"
// }


export default Header