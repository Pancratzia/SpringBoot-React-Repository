import PropTypes from 'prop-types';

export const UserDetails = ({ user }) => {

    const { name, lastname } = user;
  return (
    <p>
      Creado por: {name} {lastname}
    </p>
  );
};

UserDetails.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired
  })
}
