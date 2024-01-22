import PropTypes from "prop-types";

const CompanyView = ({ company , title} ) => {
  const { name: companyName, fiscalNumber } = company;
  return (
    <>
      <h3>{title}</h3>
      <ul className="list-group">
        <li className="list-group-item active">Name: {companyName}</li>
        <li className="list-group-item">Fiscal Number: {fiscalNumber}</li>
      </ul>
    </>
  );
};

export default CompanyView;

CompanyView.propTypes = {
  company: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
}
