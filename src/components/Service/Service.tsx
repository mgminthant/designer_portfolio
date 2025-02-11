import '../../assets/styles/service.css';
import {service} from "../../portfolio_data.ts";

export default function Service(){
    return (<>
            <span className={'title'}>My Service</span>
        <div className={'service_container'}>
            {service.map((item,index)=> (
                <div className="media-object" key={index}>
                    <div className="service">
                    <span className="service_title">{item.title}</span>
                    <img src={item.icon} alt="" />
                    </div>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    </>)
}