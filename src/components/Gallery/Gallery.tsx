import { Image } from 'primereact/image';
import {galleryData} from "./images.ts";
import '../../assets/styles/gallery.css';

export default function Gallery(){
    return <div className={'gallery-container'}>
        <span className={'title'}>My Gallery</span>
        <div className={'gallery'}>
            {
                galleryData.map((item,index)=> (
                            <Image key={index} src={`https://primefaces.org/cdn/primereact/images/product/${item.image}`} alt="Image" preview width="250"/>
        ))
        }
    </div>
</div>
}