import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../assets/styles/components/ProjectCard.css";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

interface ProjectCardProps {
  projects: Project[];
}

function ProjectCard({ projects }: ProjectCardProps) {
  return (
    <Row xs={1} md={4} className="g-4">
      {projects.map((project, idx) => (
        <Col key={idx}>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card-link gallery-items"
          >
            <Card>
              <Card.Img variant="top" src={project.image} alt={project.title} width={230} height={230} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>
      ))}
    </Row>
  );
}

export default ProjectCard;
