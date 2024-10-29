import UIDesign from '../assets/ui-design.png'
import WebDesign from '../assets/website-design.png'
import AppDesign from '../assets/app-design.png'
const Skills = ()=> {

    return (

        <section id="skills">

<span className="skillTitle">What I do</span>
<span className="skillDesc">A passionate front-end developer with a strong eye for design and a love for crafting intuitive, visually engaging web interfaces. Proficient in HTML, CSS, JavaScript, and frameworks like React.js, I thrive on turning complex requirements into sleek, user-centered solutions.</span>

        <div className='skillBars'>
        <div className='skillBar'>
        <img src={UIDesign} alt='UIDesign' className='skillBarImg'/>
        <div className="skillBarText">

<h2>UI/UX Design</h2>
<p>This is a demo content. You can write your own content here</p>

</div>
</div>

<div className='skillBar'>
        <img src={WebDesign} alt='WebDesign' className='skillBarImg'/>
        <div className="skillBarText">

<h2>WebDesign</h2>
<p>This is a demo content. You can write your own content here</p>

</div>
</div>

<div className='skillBar'>
        <img src={AppDesign} alt='AppDesign' className='skillBarImg'/>
        <div className="skillBarText">

<h2>AppDesign</h2>
<p>This is a demo content. You can write your own content here</p>

</div>
</div>

        </div>
        
        
        </section>

    )
}

export default Skills