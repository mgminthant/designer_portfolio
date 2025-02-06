import '../../assets/styles/service.css';
import {service} from "../../portfolio_data.ts";

export default function Service(){
    return (<>
            <span className={'title'}>My Service</span>
        <div className={'service_container'}>
            {service.map((item,index)=> (
                <div className="media-object" key={index}>
                    <span className="service_title">{item.title}</span>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    </>)
}