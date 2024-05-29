import styles from './SkillsStyle.module.css'
import checkLight from '../../assets/checkmark-light.svg'
import checkDark from '../../assets/checkmark-dark.svg'
import { useTheme } from '../../common/ThemeContext'

function Skills() {
  const {theme} = useTheme()
  const checkMark = theme === 'light' ? checkLight : checkDark
  const skills = [
    {name: 'JavaScript'}, 
    {name: 'HTML'}, 
    {name: 'CSS'}, 
    {name: 'SCSS'}, 
    {name: 'JSON'}, 
    {name: 'React.js'}, 
    {name: 'Firebase'}, 
    {name: 'Postman'}, 
    {name: 'GitHub'},
    {name: ''},
    {name: ''},
    {name: ''},
  ]

  return (
    <section id='skills' className={styles.container}>
      <h2>Skills</h2>
      <div className={styles.skillsList}>

      </div>
    </section>
  )
}

export default Skills