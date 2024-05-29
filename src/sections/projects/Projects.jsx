import style from './ProjectStyle.module.css'
import ProjectCard from '../../common/ProjectCard'

function Projects() {
  return (
    <section id="projects" className={style.container}>
      <h2 className='sectionTitle'>Projects</h2>
      <div className={style.projectsList}>
        <ProjectCard 
          link='https://github.com/SzKriszti/countries' 
          title='Countries' 
          decription='In this webpage the user could search for countries by their names, sort them ascending or descending by population, or read other detailt, by clicking the show more button. This project was made with Vite + React.js and I used MUI for the UI design.'
        />
        <ProjectCard
          link='https://github.com/SzKriszti/SzKriszti_Rick-Morty_webpage'
          title='Rick and Morty webpage'
          decription='In this webpage the user could read some details about the caracters. I used JavaScript, API, HTML, CSS, SCSS in this project.'
        />



        
      </div>
    </section>
  )
}

export default Projects