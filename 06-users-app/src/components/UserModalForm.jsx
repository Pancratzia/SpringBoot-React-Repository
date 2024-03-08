import UserForm from "./UserForm"
import { useUsers } from "../hooks/useUsers";

const UserModalForm = () => {

  const {  userSelected, handlerCloseForm } = useUsers();
  return (
    <div className="abrir-modal animacion fadeIn">
          <div
            className="modal"
            style={{ display:  "block" }}
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
