
import { Typography, Row, Col, Card, Space, Divider } from "antd";
import { 
  RocketOutlined, 
  ToolOutlined, 
  TeamOutlined, 
  CheckCircleOutlined 
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

export const AboutSection = () => {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto" }}>
      <Row gutter={[32, 32]}>
        <Col span={24} style={{ textAlign: "center", marginBottom: 24 }}>
          <Title level={2} style={{ color: "#1e2632" }}>About Us</Title>
          <Divider style={{ margin: "24px auto", width: 80 }} />
          <Paragraph style={{ 
            fontSize: "1.125rem", 
            color: "#566a85",
            maxWidth: 720,
            margin: "0 auto"
          }}>
            We are a team of dedicated engineers and fabricators with decades of combined experience
            in precision manufacturing and innovative problem-solving.
          </Paragraph>
        </Col>
        
        <Col xs={24} md={12}>
          <div
            style={{
              width: "100%",
              height: 320,
              background: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80') center/cover no-repeat",
              borderRadius: 16,
            }}
          />
        </Col>
        
        <Col xs={24} md={12}>
          <Space direction="vertical" size="large" style={{ width: "100%" }}>
            <Title level={3} style={{ color: "#1e2632" }}>Our Story</Title>
            <Paragraph style={{ fontSize: "1rem", color: "#566a85" }}>
              Founded in 2005, FabMachine has grown from a small workshop to a full-service
              engineering and fabrication company. Our commitment to quality and innovation has
              earned us a reputation as a trusted partner for clients across multiple industries.
            </Paragraph>
            
            <Space direction="vertical" size="middle">
              <Space align="start">
                <CheckCircleOutlined style={{ color: "#386ad0", fontSize: 20 }} />
                <Paragraph style={{ margin: 0 }}>
                  <strong>Expert Team</strong> - Engineers, designers, and fabricators with decades of experience
                </Paragraph>
              </Space>
              <Space align="start">
                <CheckCircleOutlined style={{ color: "#386ad0", fontSize: 20 }} />
                <Paragraph style={{ margin: 0 }}>
                  <strong>Advanced Technology</strong> - State-of-the-art equipment and software
                </Paragraph>
              </Space>
              <Space align="start">
                <CheckCircleOutlined style={{ color: "#386ad0", fontSize: 20 }} />
                <Paragraph style={{ margin: 0 }}>
                  <strong>Quality Focus</strong> - Rigorous quality control and testing procedures
                </Paragraph>
              </Space>
            </Space>
          </Space>
        </Col>
        
        <Col span={24} style={{ marginTop: 48 }}>
          <Row gutter={[24, 24]}>
            <Col xs={24} md={8}>
              <Card 
                style={{ height: "100%" }}
                hoverable
              >
                <Space direction="vertical" size="middle" align="center" style={{ textAlign: "center" }}>
                  <RocketOutlined style={{ fontSize: 40, color: "#386ad0" }} />
                  <Title level={4}>Innovation</Title>
                  <Paragraph>
                    We continuously explore new technologies and methodologies to deliver cutting-edge solutions.
                  </Paragraph>
                </Space>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card 
                style={{ height: "100%" }}
                hoverable
              >
                <Space direction="vertical" size="middle" align="center" style={{ textAlign: "center" }}>
                  <ToolOutlined style={{ fontSize: 40, color: "#386ad0" }} />
                  <Title level={4}>Precision</Title>
                  <Paragraph>
                    Our commitment to accuracy and detail ensures exceptional quality in every project.
                  </Paragraph>
                </Space>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card 
                style={{ height: "100%" }}
                hoverable
              >
                <Space direction="vertical" size="middle" align="center" style={{ textAlign: "center" }}>
                  <TeamOutlined style={{ fontSize: 40, color: "#386ad0" }} />
                  <Title level={4}>Collaboration</Title>
                  <Paragraph>
                    We work closely with clients to understand their needs and deliver tailored solutions.
                  </Paragraph>
                </Space>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
