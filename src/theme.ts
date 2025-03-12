
import { ThemeConfig } from "antd";

const theme: ThemeConfig = {
  token: {
    colorPrimary: "#386ad0",
    colorSuccess: "#52c41a",
    colorWarning: "#faad14",
    colorError: "#f5222d",
    colorInfo: "#386ad0",
    colorTextBase: "#1e2632",
    colorBgBase: "#ffffff",
    borderRadius: 8,
    wireframe: false,
    fontFamily: '"Inter", "Helvetica Neue", "Arial", sans-serif',
  },
  components: {
    Button: {
      primaryColor: "#ffffff",
      defaultBorderColor: "#d9d9d9",
      defaultColor: "#1e2632",
      defaultBg: "#ffffff",
    },
    Typography: {
      titleMarginBottom: 16,
    },
    Card: {
      boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.05)",
    }
  }
};

export default theme;
