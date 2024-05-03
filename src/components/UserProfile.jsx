import PropTypes from "prop-types";

const UserProfile = (props) => {
  console.log(props);
  return (
    <div>
      <p>Username: {props.username}</p>
      <p>Email: john@test.com</p>
    </div>
  );
};

UserProfile.propTypes = {
  username: PropTypes.string.isRequired,
};

export default UserProfile;
