import {Suspense} from "react";
import Lottie from "react-lottie";

export default function DisplayAnimatedSvg({animateData}:{animateData:string}){
    const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animateData
        };

        return (
            <Suspense fallback={'loading'}>
                <Lottie
                   options={defaultOptions}
                />
            </Suspense>
        );
}