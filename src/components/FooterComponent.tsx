
import { Typography, Row, Col, Space, Divider, Button } from "antd";
import { 
  GithubOutlined, 
  LinkedinOutlined, 
  TwitterOutlined, 
  FacebookOutlined, 
  UpOutlined 
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

export const FooterComponent = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ 
      background: "#1e2632",
      color: "#f7f8f9",
      padding: "64px 24px 32px" 
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Row gutter={[48, 32]}>
          <Col xs={24} md={8}>
            <Space direction="vertical" size="middle">
              <Title level={3} style={{ color: "#f7f8f9", marginTop: 0 }}>FabMachine</Title>
              <Paragraph style={{ color: "#a7b3c3" }}>
                Precision engineering solutions for your most challenging manufacturing projects.
                Quality, innovation, and expertise delivered on time.
              </Paragraph>
              <Space size="middle">
                <Button 
                  type="text" 
                  shape="circle" 
                  icon={<LinkedinOutlined />} 
                  style={{ color: "#f7f8f9" }}
                />
                <Button 
                  type="text" 
                  shape="circle" 
                  icon={<TwitterOutlined />} 
                  style={{ color: "#f7f8f9" }}
                />
                <Button 
                  type="text" 
                  shape="circle" 
                  icon={<FacebookOutlined />} 
                  style={{ color: "#f7f8f9" }}
                />
                <Button 
                  type="text" 
                  shape="circle" 
                  icon={<GithubOutlined />} 
                  style={{ color: "#f7f8f9" }}
                />
              </Space>
            </Space>
          </Col>
          
          <Col xs={24} md={5}>
            <Title level={4} style={{ color: "#f7f8f9" }}>Quick Links</Title>
            <Space direction="vertical" size="small" style={{ width: "100%" }}>
              <a href="#hero" style={{ color: "#a7b3c3" }}>Home</a>
              <a href="#about" style={{ color: "#a7b3c3" }}>About Us</a>
              <a href="#services" style={{ color: "#a7b3c3" }}>Services</a>
              <a href="#projects" style={{ color: "#a7b3c3" }}>Projects</a>
              <a href="#contact" style={{ color: "#a7b3c3" }}>Contact</a>
            </Space>
          </Col>
          
          <Col xs={24} md={5}>
            <Title level={4} style={{ color: "#f7f8f9" }}>Services</Title>
            <Space direction="vertical" size="small" style={{ width: "100%" }}>
              <Text style={{ color: "#a7b3c3" }}>Precision Machining</Text>
              <Text style={{ color: "#a7b3c3" }}>CAD Design</Text>
              <Text style={{ color: "#a7b3c3" }}>Prototyping</Text>
              <Text style={{ color: "#a7b3c3" }}>Custom Fabrication</Text>
              <Text style={{ color: "#a7b3c3" }}>Automation Solutions</Text>
            </Space>
          </Col>
          
          <Col xs={24} md={6}>
            <Title level={4} style={{ color: "#f7f8f9" }}>Contact</Title>
            <Space direction="vertical" size="small" style={{ width: "100%" }}>
              <Text style={{ color: "#a7b3c3" }}>123 Manufacturing Way</Text>
              <Text style={{ color: "#a7b3c3" }}>Industry City, CA 90210</Text>
              <Text style={{ color: "#a7b3c3" }}>info@fabmachine.com</Text>
              <Text style={{ color: "#a7b3c3" }}>(555) 123-4567</Text>
            </Space>
          </Col>
        </Row>
        
        <Divider style={{ backgroundColor: "#566a85", margin: "32px 0" }} />
        
        <Row justify="space-between" align="middle">
          <Col>
            <Text style={{ color: "#a7b3c3" }}>
              © {currentYear} FabMachine. All rights reserved.
            </Text>
          </Col>
          <Col>
            <Button 
              type="text" 
              icon={<UpOutlined />} 
              onClick={scrollToTop}
              style={{ color: "#f7f8f9" }}
            >
              Back to Top
            </Button>
          </Col>
        </Row>
      </div>
    </footer>
  );
};
