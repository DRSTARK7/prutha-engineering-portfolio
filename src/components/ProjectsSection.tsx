
import { Typography, Row, Col, Card, Button, Tag, Divider, Space, Image } from "antd";
import { EyeOutlined, RightOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;
const { Meta } = Card;

export const ProjectsSection = () => {
  const projects = [
    {
      title: "Aerospace Component Design",
      category: "Aerospace",
      image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      description: "Custom titanium components for next-generation aircraft engines.",
      tags: ["Titanium", "CNC Machining", "Aerospace"]
    },
    {
      title: "Medical Device Prototype",
      category: "Medical",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      description: "Surgical instrument prototype with precision-machined stainless steel components.",
      tags: ["Medical", "Prototyping", "Stainless Steel"]
    },
    {
      title: "Automotive Testing Equipment",
      category: "Automotive",
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
      description: "Custom testing rig for automotive suspension components with data collection capabilities.",
      tags: ["Automotive", "Testing Equipment", "Automation"]
    },
    {
      title: "Industrial Automation System",
      category: "Industrial",
      image: "https://images.unsplash.com/photo-1565514020179-026b5cfd231c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      description: "Automated material handling system for a manufacturing facility.",
      tags: ["Automation", "Industrial", "Control Systems"]
    }
  ];

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto" }}>
      <Row gutter={[32, 32]}>
        <Col span={24} style={{ textAlign: "center", marginBottom: 24 }}>
          <Title level={2} style={{ color: "#1e2632" }}>Our Projects</Title>
          <Divider style={{ margin: "24px auto", width: 80 }} />
          <Paragraph style={{ 
            fontSize: "1.125rem", 
            color: "#566a85",
            maxWidth: 720,
            margin: "0 auto"
          }}>
            Explore our portfolio of successful projects across various industries,
            showcasing our engineering expertise and manufacturing capabilities.
          </Paragraph>
        </Col>
        
        {projects.map((project, index) => (
          <Col xs={24} sm={12} lg={6} key={index}>
            <Card
              hoverable
              cover={
                <div style={{ overflow: "hidden", height: 200 }}>
                  <Image
                    alt={project.title}
                    src={project.image}
                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                    preview={{
                      mask: <Space><EyeOutlined />View</Space>
                    }}
                  />
                </div>
              }
              actions={[
                <Button type="text" icon={<RightOutlined />}>View Details</Button>
              ]}
            >
              <Space direction="vertical" size="small" style={{ width: "100%" }}>
                <Tag color="#386ad0">{project.category}</Tag>
                <Meta
                  title={project.title}
                  description={project.description}
                />
                <div style={{ marginTop: 12 }}>
                  {project.tags.map((tag, i) => (
                    <Tag key={i} style={{ margin: "4px 4px 0 0" }}>{tag}</Tag>
                  ))}
                </div>
              </Space>
            </Card>
          </Col>
        ))}
        
        <Col span={24} style={{ textAlign: "center", marginTop: 24 }}>
          <Button 
            type="primary" 
            size="large" 
            style={{ borderRadius: 8, height: 48 }}
          >
            View All Projects
          </Button>
        </Col>
      </Row>
    </div>
  );
};
