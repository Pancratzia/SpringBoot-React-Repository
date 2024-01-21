import PropTypes from 'prop-types';
import { Title } from './components/Title';
import { UserDetails } from './components/UserDetails';
import { Learning } from './components/Learning';

export function HelloWorldApp({ langName, id, title, fullName }) {
  

  return (
    <div key={id} style={{ width: "95%", maxWidth: "1000px", margin: "20px auto", textAlign: "center" }}>
      <Title title={title} />
      <Learning langName={langName} />
      <UserDetails user={fullName} />
    </div>
  );
}

HelloWorldApp.propTypes = {
  langName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  fullName: PropTypes.object.isRequired,
}

HelloWorldApp.defaultProps = {
  title: "Hello, World!"
}