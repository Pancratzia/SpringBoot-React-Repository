import PropTypes from 'prop-types';

export function HelloWorld({ langName, id, title, fullName }) {
  const { name, lastname } = fullName;

  return (
    <div key={id} style={{ width: "95%", maxWidth: "1000px", margin: "20px auto", textAlign: "center" }}>
      <h1>{title}</h1>
      <h2>Estás aprendiendo sobre {langName}</h2>
      <p>
        Creado por: {name} {lastname}
      </p>
    </div>
  );
}

HelloWorld.propTypes = {
  langName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  fullName: PropTypes.shape({
    name: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired
  })
}

HelloWorld.defaultProps = {
  title: "Hello, World!"
}