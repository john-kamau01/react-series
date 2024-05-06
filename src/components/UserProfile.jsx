import PropTypes from "prop-types";

const UserProfile = (props) => {
  console.log(props);
  return (
    <div>
      <p>Username: {props.username}</p>
      <p>Email: john@test.com</p>
      <ul>
        {props.myArray.map((item, index) => {
          return <li key={index}>{item.name}</li>;
        })}
      </ul>
      <button type="button" onClick={props.myFunc}>
        Click Me
      </button>
    </div>
  );
};

UserProfile.propTypes = {
  username: PropTypes.string.isRequired,
  myFunc: PropTypes.func,
  myArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default UserProfile;
