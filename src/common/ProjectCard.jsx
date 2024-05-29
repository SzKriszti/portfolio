function ProjectCard({link, picture, title, decription}) {
  return (
    <div>
      <a href={link} target="_blank">
        <img src={picture} alt={`${title} picture`} className="projectPictures"></img>
        <h4>{title}</h4>
      </a>
      <p>{decription}</p>
    </div>
  )
}

export default ProjectCard