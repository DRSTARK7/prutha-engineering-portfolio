
import { Typography, Row, Col, Card, Space, Divider } from "antd";
import { 
  SettingOutlined, 
  CodeOutlined, 
  ExperimentOutlined, 
  ToolOutlined,
  RobotOutlined,
  SafetyCertificateOutlined
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

export const ServicesSection = () => {
  const services = [
    {
      icon: <SettingOutlined style={{ fontSize: 36, color: "#386ad0" }} />,
      title: "Precision Machining",
      description: "High-tolerance CNC machining for complex parts and components across various materials."
    },
    {
      icon: <CodeOutlined style={{ fontSize: 36, color: "#386ad0" }} />,
      title: "CAD Design",
      description: "Expert 3D modeling and design services to transform concepts into manufacturable reality."
    },
    {
      icon: <ExperimentOutlined style={{ fontSize: 36, color: "#386ad0" }} />,
      title: "Prototyping",
      description: "Rapid prototyping services to test and refine designs before full production."
    },
    {
      icon: <ToolOutlined style={{ fontSize: 36, color: "#386ad0" }} />,
      title: "Custom Fabrication",
      description: "Specialized fabrication services for unique or one-off projects with complex requirements."
    },
    {
      icon: <RobotOutlined style={{ fontSize: 36, color: "#386ad0" }} />,
      title: "Automation Solutions",
      description: "Custom automation systems to improve efficiency and productivity in manufacturing processes."
    },
    {
      icon: <SafetyCertificateOutlined style={{ fontSize: 36, color: "#386ad0" }} />,
      title: "Quality Control",
      description: "Comprehensive inspection and testing to ensure all products meet rigorous standards."
    }
  ];

  return (
    <div style={{ 
      maxWidth: 1200, 
      margin: "0 auto",
      background: "#f0f5fc",
      borderRadius: 16,
      padding: "48px 24px" 
    }}>
      <Row gutter={[32, 32]}>
        <Col span={24} style={{ textAlign: "center", marginBottom: 24 }}>
          <Title level={2} style={{ color: "#1e2632" }}>Our Services</Title>
          <Divider style={{ margin: "24px auto", width: 80 }} />
          <Paragraph style={{ 
            fontSize: "1.125rem", 
            color: "#566a85",
            maxWidth: 720,
            margin: "0 auto"
          }}>
            We offer a comprehensive range of engineering and manufacturing services
            to meet your most demanding technical challenges.
          </Paragraph>
        </Col>
        
        {services.map((service, index) => (
          <Col xs={24} sm={12} lg={8} key={index}>
            <Card 
              hoverable
              style={{ height: "100%" }}
              bodyStyle={{ padding: 24 }}
            >
              <Space direction="vertical" size="middle">
                {service.icon}
                <Title level={4} style={{ marginTop: 8 }}>{service.title}</Title>
                <Paragraph style={{ color: "#566a85" }}>
                  {service.description}
                </Paragraph>
              </Space>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};
