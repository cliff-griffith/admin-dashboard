import "./navbar.scss";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>lamadmin</span>
      </div>
      <div className="icons">
        <img src="search.svg" alt="" />
        <img src="app.svg" alt="" />
        <img src="expand.svg" alt="" />
        <div className="notifications">
          <img src="notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <span>Harold</span>
        </div>
        <img src="settings.svg" alt="" />
      </div>
    </div>
  );``
};

export default NavBar;
