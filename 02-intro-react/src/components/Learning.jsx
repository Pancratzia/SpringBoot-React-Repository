import PropTypes from 'prop-types';

export const Learning = ({ langName }) => {
  return <h2>Estás aprendiendo sobre {langName}</h2>;
};

Learning.propTypes = {
  langName: PropTypes.string.isRequired,
}
