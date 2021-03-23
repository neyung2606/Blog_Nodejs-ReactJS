import React, { useState } from "react";
import UserIcon from "@assets/user.png";
import "./index.scss";
import { Button } from "@material-ui/core";
import { Edit, ExitToApp } from "@material-ui/icons";

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <div className="header-section">
        <div
          className="account-user"
          onClick={() => setIsClicked((isClicked) => !isClicked)}
        >
          <img src={UserIcon} alt="icon-user" width={25} height={25} />
          <div style={{ paddingLeft: 5 }}>
            <p>Xin chào, Nguyên</p>
          </div>
        </div>
      </div>
      <div className={isClicked ? "menu-display openMenu" : "menu-display"}>
        <div className="btn-group">
          <Button startIcon={<Edit />}>Chỉnh sửa</Button>
          <Button startIcon={<ExitToApp />}>Đăng xuất</Button>
        </div>
      </div>
    </>
  );
};

export { Header };
