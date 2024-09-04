import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, repoUrl }) => {
  return (
    <Col xs={12} sm={6} md={6}>
      <a href={repoUrl} target="_blank" rel="noopener noreferrer">
        <div className="proj-imgbx">
          <img src={imgUrl} alt={`${title} screenshot`} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  )
}

