import {contact} from "../../portfolio_data.ts";

export default function SocialLink(){
    return <div className="social-link-container">
        {contact.map((item,index)=> (
            <div key={index} className="social-link">
                <img src={item.icon} alt=""/>
                <span>{item.text}</span>
            </div>
        ))}
    </div>
}