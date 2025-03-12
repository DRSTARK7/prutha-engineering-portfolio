
import { useState } from "react";
import { 
  Typography, 
  Row, 
  Col, 
  Form, 
  Input, 
  Button, 
  Select, 
  Divider, 
  Card, 
  Space, 
  message 
} from "antd";
import { 
  MailOutlined, 
  PhoneOutlined, 
  EnvironmentOutlined, 
  SendOutlined 
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;
const { TextArea } = Input;
const { Option } = Select;

export const ContactSection = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = (values: any) => {
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form values:", values);
      message.success("Message sent successfully! We'll get back to you soon.");
      form.resetFields();
      setLoading(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <MailOutlined style={{ fontSize: 24, color: "#386ad0" }} />,
      title: "Email",
      content: "info@fabmachine.com",
      link: "mailto:info@fabmachine.com"
    },
    {
      icon: <PhoneOutlined style={{ fontSize: 24, color: "#386ad0" }} />,
      title: "Phone",
      content: "(555) 123-4567",
      link: "tel:5551234567"
    },
    {
      icon: <EnvironmentOutlined style={{ fontSize: 24, color: "#386ad0" }} />,
      title: "Address",
      content: "123 Manufacturing Way, Industry City, CA 90210",
      link: "https://maps.google.com"
    }
  ];

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto" }}>
      <Row gutter={[32, 32]}>
        <Col span={24} style={{ textAlign: "center", marginBottom: 24 }}>
          <Title level={2} style={{ color: "#1e2632" }}>Contact Us</Title>
          <Divider style={{ margin: "24px auto", width: 80 }} />
          <Paragraph style={{ 
            fontSize: "1.125rem", 
            color: "#566a85",
            maxWidth: 720,
            margin: "0 auto"
          }}>
            Have a project in mind or questions about our services? 
            Get in touch with our team and let's discuss how we can help.
          </Paragraph>
        </Col>
        
        <Col xs={24} md={12} lg={16}>
          <Card bordered={false} style={{ height: "100%" }}>
            <Title level={4} style={{ marginBottom: 24 }}>Send Us a Message</Title>
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              requiredMark={false}
            >
              <Row gutter={16}>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="name"
                    label="Full Name"
                    rules={[{ required: true, message: "Please enter your name" }]}
                  >
                    <Input size="large" placeholder="John Doe" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="email"
                    label="Email Address"
                    rules={[
                      { required: true, message: "Please enter your email" },
                      { type: "email", message: "Please enter a valid email" }
                    ]}
                  >
                    <Input size="large" placeholder="john@example.com" />
                  </Form.Item>
                </Col>
              </Row>
              
              <Form.Item
                name="phone"
                label="Phone Number"
              >
                <Input size="large" placeholder="(555) 123-4567" />
              </Form.Item>
              
              <Form.Item
                name="service"
                label="Service Interested In"
                rules={[{ required: true, message: "Please select a service" }]}
              >
                <Select size="large" placeholder="Select a service">
                  <Option value="machining">Precision Machining</Option>
                  <Option value="design">CAD Design</Option>
                  <Option value="prototyping">Prototyping</Option>
                  <Option value="fabrication">Custom Fabrication</Option>
                  <Option value="automation">Automation Solutions</Option>
                  <Option value="other">Other</Option>
                </Select>
              </Form.Item>
              
              <Form.Item
                name="message"
                label="Message"
                rules={[{ required: true, message: "Please enter your message" }]}
              >
                <TextArea 
                  rows={4} 
                  placeholder="Tell us about your project or inquiry..."
                  style={{ resize: "none" }}
                />
              </Form.Item>
              
              <Form.Item>
                <Button 
                  type="primary" 
                  htmlType="submit" 
                  size="large"
                  icon={<SendOutlined />}
                  loading={loading}
                  style={{ 
                    width: "100%", 
                    height: 48,
                    borderRadius: 8 
                  }}
                >
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
        
        <Col xs={24} md={12} lg={8}>
          <Card
            style={{ 
              height: "100%",
              background: "linear-gradient(135deg, #41526b 0%, #354257 100%)",
              color: "#fff" 
            }}
            bordered={false}
          >
            <Space direction="vertical" size="large" style={{ width: "100%" }}>
              <Title level={4} style={{ color: "#fff", marginBottom: 24 }}>Get in Touch</Title>
              
              {contactInfo.map((item, index) => (
                <Space align="start" key={index} style={{ marginBottom: 24 }}>
                  <div>{item.icon}</div>
                  <div>
                    <Title level={5} style={{ color: "#fff", margin: 0 }}>{item.title}</Title>
                    <a 
                      href={item.link}
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ color: "#f7f8f9" }}
                    >
                      {item.content}
                    </a>
                  </div>
                </Space>
              ))}
              
              <Divider style={{ backgroundColor: "rgba(255,255,255,0.2)" }} />
              
              <div>
                <Title level={5} style={{ color: "#fff" }}>Business Hours</Title>
                <Paragraph style={{ color: "#f7f8f9", margin: 0 }}>
                  Monday - Friday: 8:00 AM - 5:00 PM
                </Paragraph>
                <Paragraph style={{ color: "#f7f8f9", margin: 0 }}>
                  Saturday: 9:00 AM - 2:00 PM
                </Paragraph>
                <Paragraph style={{ color: "#f7f8f9", margin: 0 }}>
                  Sunday: Closed
                </Paragraph>
              </div>
            </Space>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
