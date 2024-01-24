function CartApp() {
  return (
    <>
      <div className="container my-5">
        <h3>Cart App</h3>

        <div className="row">
          <div className="col-4 my-2">
            <div className="card">
              <div className="card-body">
                <h5 className="cart-title">Teclado Mecánico RGB</h5>
                <p className="card-text">Teclado Mecanico con luces RGB y teclas tactiles</p>
                <p className="card-text">30$</p>

                <button className="btn btn-primary">Comprar</button>
              </div>
            </div>
          </div>
          <div className="col-4 my-2">
            <div className="card">
              <div className="card-body">
                <h5 className="cart-title">Samsung Smart TV 4K</h5>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p className="card-text">250$</p>

                <button className="btn btn-primary">Comprar</button>
              </div>
            </div>
          </div>
          <div className="col-4 my-2">
            <div className="card">
              <div className="card-body">
                <h5 className="cart-title">Audifonos Bluetooth Sony</h5>
                <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, beatae.</p>
                <p className="card-text">35$</p>

                <button className="btn btn-primary">Comprar</button>
              </div>
            </div>
          </div>
          <div className="col-4 my-2">
            <div className="card">
              <div className="card-body">
                <h5 className="cart-title">Monitor LG 24</h5>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <p className="card-text">100$</p>

                <button className="btn btn-primary">Comprar</button>
              </div>
            </div>
          </div>
          <div className="col-4 my-2">
            <div className="card">
              <div className="card-body">
                <h5 className="cart-title">Mouse Gamer Logitech</h5>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque.</p>
                <p className="card-text">10$</p>

                <button className="btn btn-primary">Comprar</button>
              </div>
            </div>
          </div>
          <div className="col-4 my-2">
            <div className="card">
              <div className="card-body">
                <h5 className="cart-title">WebCam Logitech</h5>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p className="card-text">45$</p>

                <button className="btn btn-primary">Comprar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartApp;
