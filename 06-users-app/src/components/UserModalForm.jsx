import UserForm from "./UserForm"
import PropTypes from "prop-types"

const UserModalForm = ({ handlerAddUser, initialUserForm, userSelected, handlerCloseForm, visibleForm }) => {
  return (
    <div className="abrir-modal animacion fadeIn">
          <div
            className="modal"
            style={{ display: visibleForm ? "block" : "" }}
            tabIndex={-1}
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">
                    {userSelected.id ? "Edit User" : "New User"}
                  </h5>
                </div>

                <div className="modal-body">
                  <UserForm
                    handlerAddUser={handlerAddUser}
                    initialUserform={initialUserForm}
                    userSelected={userSelected}
                    handlerCloseForm={handlerCloseForm}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default UserModalForm;


UserModalForm.propTypes = {
  handlerAddUser: PropTypes.func.isRequired,
  initialUserForm: PropTypes.object.isRequired,
  userSelected: PropTypes.object,
  handlerCloseForm: PropTypes.func.isRequired,
  visibleForm: PropTypes.bool.isRequired,
}