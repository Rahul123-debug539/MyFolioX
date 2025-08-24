import React from "react";
import { useLocation, Link , useParams} from "react-router-dom";
import "../CSS/CreativePortfolio.css";

export default function CreativePortfolio() {
  const location = useLocation();
  const data = location.state || {};
  const {id} = useParams();
  return (
    <div className="portfolio-container">
      {/* Basic Info */}
      {(data.Name || data.Bio || data.About) && (
        <section className="basic-info">
          {data.Name && <h1 className="name">{data.Name}</h1>}
          {data.Bio && <h2 className="bio">{data.Bio}</h2>}
          {data.About && <p className="about">{data.About}</p>}
        </section>
      )}

      {/* Education */}
      {data.education && (
        <section className="education">
          <h2>Education</h2>

          {/* Secondary School */}
          {data.education.secondarySchool &&
            (data.education.secondarySchool.schoolName ||
              data.education.secondarySchool.passingYear ||
              data.education.secondarySchool.board ||
              data.education.secondarySchool.percentage) && (
              <div className="edu-card">
                {data.education.secondarySchool.schoolName && (
                  <h3>{data.education.secondarySchool.schoolName}</h3>
                )}
                <p>
                  {data.education.secondarySchool.passingYear &&
                    `Year: ${data.education.secondarySchool.passingYear}`}
                </p>
                <p>
                  {data.education.secondarySchool.board &&
                    `Board: ${data.education.secondarySchool.board}`}
                </p>
                <p>
                  {data.education.secondarySchool.percentage &&
                    `Percentage: ${data.education.secondarySchool.percentage}`}
                </p>
              </div>
            )}

          {/* High School */}
          {data.education.highschool &&
            (data.education.highschool.collegeName ||
              data.education.highschool.passingYear ||
              data.education.highschool.board ||
              data.education.highschool.percentage) && (
              <div className="edu-card">
                {data.education.highschool.collegeName && (
                  <h3>{data.education.highschool.collegeName}</h3>
                )}
                <p>
                  {data.education.highschool.passingYear &&
                    `Year: ${data.education.highschool.passingYear}`}
                </p>
                <p>
                  {data.education.highschool.board &&
                    `Board: ${data.education.highschool.board}`}
                </p>
                <p>
                  {data.education.highschool.percentage &&
                    `Percentage: ${data.education.highschool.percentage}`}
                </p>
              </div>
            )}

          {/* Graduation */}
          {data.education.graduation &&
            (data.education.graduation.collegeName ||
              data.education.graduation.passingYear ||
              data.education.graduation.universityName ||
              data.education.graduation.percentage) && (
              <div className="edu-card">
                {data.education.graduation.collegeName && (
                  <h3>{data.education.graduation.collegeName}</h3>
                )}
                <p>
                  {data.education.graduation.passingYear &&
                    `Year: ${data.education.graduation.passingYear}`}
                </p>
                <p>
                  {data.education.graduation.universityName &&
                    `University: ${data.education.graduation.universityName}`}
                </p>
                <p>
                  {data.education.graduation.percentage &&
                    `Percentage: ${data.education.graduation.percentage}`}
                </p>
              </div>
            )}

          {/* Post Graduation */}
          {data.education.postGraduation &&
            (data.education.postGraduation.collegeName ||
              data.education.postGraduation.passingYear ||
              data.education.postGraduation.universityName ||
              data.education.postGraduation.percentage) && (
              <div className="edu-card">
                {data.education.postGraduation.collegeName && (
                  <h3>{data.education.postGraduation.collegeName}</h3>
                )}
                <p>
                  {data.education.postGraduation.passingYear &&
                    `Year: ${data.education.postGraduation.passingYear}`}
                </p>
                <p>
                  {data.education.postGraduation.universityName &&
                    `University: ${data.education.postGraduation.universityName}`}
                </p>
                <p>
                  {data.education.postGraduation.percentage &&
                    `Percentage: ${data.education.postGraduation.percentage}`}
                </p>
              </div>
            )}
        </section>
      )}

      {/* Skills */}
      {(data.skill?.selectedTechSkills?.length > 0 ||
        data.skill?.selectedSoftSkills?.length > 0) && (
        <section className="skills">
          <h2>Skills</h2>
          {data.skill.selectedTechSkills.length > 0 && (
            <div>
              <h3>Technical Skills</h3>
              <ul>
                {data.skill.selectedTechSkills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          )}
          {data.skill.selectedSoftSkills.length > 0 && (
            <div>
              <h3>Soft Skills</h3>
              <ul>
                {data.skill.selectedSoftSkills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          )}
        </section>
      )}

      {/* Projects */}
      {data.projects && data.projects.some(
        (p) => p.title || p.description || p.language || p.links || p.image
      ) && (
        <section className="projects">
          <h2>Projects</h2>
          {data.projects.map(
            (project, i) =>
              (project.title ||
                project.description ||
                project.language ||
                project.links ||
                project.image) && (
                <div key={i} className="project-card">
                  {project.title && <h3>{project.title}</h3>}
                  {project.description && <p>{project.description}</p>}
                  {project.language && <p><strong>Tech:</strong> {project.language}</p>}
                  {project.links && (
                    <p>
                      <a href={project.links} target="_blank" rel="noreferrer">
                        Project Link
                      </a>
                    </p>
                  )}
                  {project.image && (
                    <img src={project.image} alt={project.title} className="project-img" />
                  )}
                </div>
              )
          )}
        </section>
      )}

      {/* Contact */}
      {data.contact &&
        (data.contact.email ||
          data.contact.phone ||
          data.contact.location ||
          data.contact.glinks ||
          data.contact.lLinks ||
          data.contact.tLinks ||
          data.contact.ilinks) && (
          <section className="contact">
            <h2>Contact</h2>
            {data.contact.email && <p>Email: {data.contact.email}</p>}
            {data.contact.phone && <p>Phone: {data.contact.phone}</p>}
            {data.contact.location && <p>Location: {data.contact.location}</p>}
            <div className="social-links">
              {data.contact.glinks && (
                <a href={data.contact.glinks} target="_blank" rel="noreferrer">GitHub</a>
              )}
              {data.contact.lLinks && (
                <a href={data.contact.lLinks} target="_blank" rel="noreferrer">LinkedIn</a>
              )}
              {data.contact.tLinks && (
                <a href={data.contact.tLinks} target="_blank" rel="noreferrer">Twitter</a>
              )}
              {data.contact.ilinks && (
                <a href={data.contact.ilinks} target="_blank" rel="noreferrer">Instagram</a>
              )}
            </div>
          </section>
        )}

        <Link to={`/form/1`} ><button>Fill</button></Link>

    </div>
  );
}
