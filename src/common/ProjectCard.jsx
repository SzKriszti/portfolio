function ProjectCard({link, picture, title, decription}) {
  return (
    <a href={link} target="_blank">
      <img src={picture} alt={`${title} picture`} className="projectPictures"></img>
      <h4>{title}</h4>
      <p>{decription}</p>
    </a>
  )
}

export default ProjectCard