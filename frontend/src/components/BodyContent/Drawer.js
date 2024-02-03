import React from "react";

const Drawer = () => {
  return (
    <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
      <div className="offcanvas-header" style={{ backgroundColor: "#226d96" }}>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <div className="left">
          <h1>Drawer</h1>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
