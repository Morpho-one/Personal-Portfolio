import bg from '../assets/image.png'
import btnImg from '../assets/hireme.png'
import {Link} from 'react-scroll'
const Intro = () => {

return (

<section id="intro">


    <div className="introContent">

<span className='hello'>Hello,</span>
<span className="introText">I'm <span className='introName'>Asad</span><br/>Front End Developer</span>
<p className="introPara">I am a skilled web designer with experience in creating <br/> visually appealing and user friendly websites</p>
    
    <Link><button className='btn'><img src={btnImg} alt='Hire Me' className='Imgbtn'/>Hire Me</button></Link>
    
    
    </div>

    <img src={bg} alt="Profile" className="bg"/>
</section>
)
}

export default Intro 