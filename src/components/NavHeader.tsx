
import { useState } from "react";
import { Menu, Button, Drawer, Space } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useTitle } from "@refinedev/core";
import { useNavigate } from "react-router-dom";
import { Header } from "@refinedev/antd";

export const NavHeader: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const title = useTitle();

  const menuItems = [
    { key: "home", label: "Home", onClick: () => navigate("#hero") },
    { key: "about", label: "About", onClick: () => navigate("#about") },
    { key: "services", label: "Services", onClick: () => navigate("#services") },
    { key: "projects", label: "Projects", onClick: () => navigate("#projects") },
    { key: "contact", label: "Contact", onClick: () => navigate("#contact") },
  ];

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <Header
      sticky
      style={{
        background: "#fff",
        padding: "0 24px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#354257" }}>
          {title}
        </div>
        <div className="menu-desktop" style={{ display: { xs: "none", md: "block" } }}>
          <Menu
            mode="horizontal"
            items={menuItems}
            style={{ border: "none" }}
          />
        </div>
        <div className="menu-mobile" style={{ display: { xs: "block", md: "none" } }}>
          <Button type="text" onClick={showDrawer} icon={<MenuOutlined />} />
          <Drawer
            title="Menu"
            placement="right"
            onClose={onClose}
            open={visible}
          >
            <Menu
              mode="vertical"
              items={menuItems}
              style={{ border: "none" }}
            />
          </Drawer>
        </div>
      </div>
    </Header>
  );
};
