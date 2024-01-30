const LoginPage = () => {
  return (
    <div className="modal" style={{ display: "block" }} tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Login</h5>
          </div>

          <form>
            <div className="modal-body">
              <input
                type="text"
                className="form-control my-3"
                placeholder="Username"
                name="username"
                required
              />

              <input
                type="password"
                className="form-control my-3"
                placeholder="Password"
                name="password"
                required
              />
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
