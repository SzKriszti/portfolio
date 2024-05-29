import style from './HeroStyle.module.css'
import profil from '../../assets/profil-picture.png'
import moon from '../../assets/moon.svg'
import sun from '../../assets/sun.svg'
import githubdark from '../../assets/github-dark.svg'
import githublight from '../../assets/github-light.svg'
import linkedindark from '../../assets/linkedin-dark.svg'
import linkedinlight from '../../assets/linkedin-light.svg'
import cv from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext'

function Hero() {
  const {theme, toggle} = useTheme()

  const themeIcon = theme === 'light' ? sun : moon
  const githubIcon = theme === 'light' ? githublight : githubdark
  const linkedinIcon = theme === 'light' ? linkedinlight : linkedindark

  return (
    <section id='hero' className={style.container}>
      <header>
        <img className={style.colorMode} src={themeIcon} alt='theme mode icon' onClick={toggle}/>
      </header>
      <div className={style.colorModeContainer}>
        <img className={style.heroPicture} src={profil} alt="profil picture of Krisztina Szabó" />
      </div>
      <div className={style.info}>
        <h1>Krisztina <br/> Szabó</h1>
        <h2>Junior Frontend Developer</h2>
        <span>
          <a href='https://github.com/SzKriszti' target='_blank'>
            <img src={githubIcon} alt="GitHub account" />
          </a>
          <a href='https://www.linkedin.com/in/krisztina-szab%C3%B3-01a770174/' target='_blank'>
            <img src={linkedinIcon} alt="LinkedIn profil" />
          </a>
        </span>
        <p className={style.description}>
          Hello my name is Kriszti and I am a passonate Junior Frontend Developer.
        </p>
        <a href={cv} download>
          <button className='button'>Download resume</button>
        </a>
      </div>
    </section>
  )
}

export default Hero