import Walmart from '../assets/walmart.png'
import Adobe from '../assets/adobe.png'
import Microsoft from '../assets/microsoft.png'
import Facebook from '../assets/facebook.png'
import FacebookIcon from '../assets/facebook-icon.png'
import TwitterIcon from '../assets/twitter.png'
import YoutubeIcon from '../assets/youtube.png'
import InstagramIcon from '../assets/instagram.png'
import emailjs from '@emailjs/browser';
import { useRef } from 'react'

const Contact = ()=> {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_4l905l4', 'template_zcxds5a', form.current, {
            publicKey: 'JXvWYuUP4O2Fw-u09Uz6I',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset();
              alert('Email Sent !')
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    
   
    return (

        <section id="contactPage">

<div id="clients">

    <h1 className="contactPageTitle">My Clients</h1>
    <p className="clientDesc">
        I had the oppertunity to work with a diverse group of companies.
        Some of the notable companies I have worked with includes
    </p>

    <div className="clientImgs">

        <img src={Walmart} alt="Client" className="clientImg"/>
        <img src={Adobe} alt="Client" className="clientImg"/>
        <img src={Microsoft} alt="Client" className="clientImg"/>
        <img src={Facebook} alt="Client" className="clientImg"/>
    </div>


</div>

<div id="contact">

    <h1 className='contactPageTitle'>Contact me</h1>
    <span className='contactDesc'>Please fill out the form below to discuss any work opportunities</span>
    <form className='contactForm' ref={form} onSubmit={sendEmail}>

<input type="text" className="name" placeholder='Your Name' name='your_name' />
<input type="text" className="email" placeholder='Your Email' name='your_email' />
<textarea className='msg' name='messsage' rows="5" placeholder='Your Message'></textarea>
<button type='submit' value='Send' className="submitBtn" onClick={()=>alert('Email Sent')}>Submit</button>
<div className="links">

    <img src={FacebookIcon} alt="Facebook" className="link" />
    <img src={TwitterIcon} alt="twitter" className="link" />
    <img src={YoutubeIcon} alt="Youtube" className="link" />
    <img src={InstagramIcon} alt="Instagram" className="link" />
</div>
    
    </form>


</div>

        </section>
    )
}

export default Contact