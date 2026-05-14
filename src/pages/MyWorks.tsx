import { Link } from "react-router-dom";
import { config } from "../config";
import "./MyWorks.css";

const MyWorks = () => {
  return (
    <div className="myworks-page">
      <div className="myworks-header">
        <Link to="/" className="back-button" data-cursor="disable">
          ← Back to Home
        </Link>
        <h1>
          All <span>Works</span>
        </h1>
        <p>A collection of all my projects and creations</p>
      </div>

      <div className="myworks-grid">
        {config.projects.map((project, index) => (
          <div className="myworks-card" key={project.id} data-cursor="disable">
            <div className="myworks-card-number">0{index + 1}</div>
            <div className="myworks-card-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="myworks-card-info">
              <h3>{project.title}</h3>
              <p className="myworks-card-category">{project.category}</p>
              <p className="myworks-card-description">{project.description}</p>
              <p className="myworks-card-tech">{project.technologies}</p>
              <div className="myworks-card-links" style={{ display: "flex", gap: "15px", marginTop: "15px" }}>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" style={{ padding: "8px 16px", border: "1px solid rgba(255,255,255,0.3)", borderRadius: "20px", textDecoration: "none", color: "white", fontSize: "14px", zIndex: 10, position: "relative" }}>
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer" style={{ padding: "8px 16px", background: "white", color: "black", borderRadius: "20px", textDecoration: "none", fontSize: "14px", fontWeight: "bold", zIndex: 10, position: "relative" }}>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWorks;
