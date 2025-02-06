import '../../assets/styles/contact.css';
import FormComp from "./Form.tsx";
import SocialLink from "./SocialLink.tsx";

export default function Contact(){

    return (<div className="contact_container">
        <span className={'title'}>Contact Me</span>
               <div className={'contact'}>
                   <SocialLink/>
                   <FormComp/>
               </div>
        </div>
    )
}