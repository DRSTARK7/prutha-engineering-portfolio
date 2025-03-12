
import { Button, Typography, Row, Col, Space } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

export const Hero = () => {
  return (
    <div
      style={{
        minHeight: "90vh",
        background: "linear-gradient(135deg, #f0f5fc 0%, #e0e9f8 100%)",
        padding: "0 24px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Row 
        justify="center" 
        align="middle" 
        style={{ width: "100%", maxWidth: 1200, margin: "0 auto" }}
      >
        <Col xs={24} md={12} style={{ padding: "24px" }}>
          <div style={{ maxWidth: 580 }}>
            <Title 
              level={1} 
              style={{ 
                fontSize: "3.5rem", 
                fontWeight: 800,
                marginBottom: 16,
                color: "#1e2632"
              }}
            >
              Precision Engineering Solutions
            </Title>
            <Paragraph 
              style={{ 
                fontSize: "1.25rem", 
                color: "#566a85",
                marginBottom: 32 
              }}
            >
              Innovative design, expert fabrication, and cutting-edge manufacturing
              technology for your most challenging engineering projects.
            </Paragraph>
            <Space size="large">
              <Button 
                type="primary" 
                size="large"
                style={{
                  height: 48,
                  fontSize: "1rem",
                  borderRadius: 8,
                  background: "#386ad0",
                }}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Contact Us
              </Button>
              <Button 
                type="text" 
                size="large"
                style={{
                  height: 48,
                  fontSize: "1rem",
                  color: "#386ad0",
                }}
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                icon={<ArrowRightOutlined />}
              >
                View Our Work
              </Button>
            </Space>
          </div>
        </Col>
        <Col xs={24} md={12} style={{ padding: "24px" }}>
          <div
            style={{
              width: "100%",
              height: 400,
              background: "url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80') center/cover no-repeat",
              borderRadius: 16,
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)",
            }}
          />
        </Col>
      </Row>
    </div>
  );
};
