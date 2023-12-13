// import Swiper core and required modules
/* eslint-disable @typescript-eslint/no-explicit-any */
import { register } from 'swiper/element/bundle';
import { onInit } from '@builder.io/mitosis';

// eslint-disable-next-line @builder.io/mitosis/only-default-function-and-imports
declare module '@builder.io/mitosis/jsx-runtime' {
    // eslint-disable-next-line @typescript-eslint/no-namespace
     namespace JSX {
        interface IntrinsicElements {
            'swiper-container': any;
            'swiper-slide': any;
        }
    }
}


export default function SwiperComponent() {
    onInit(() => {
        register();
    })

    return (
        <swiper-container
            slides-per-view="3"
            navigation="true"
            pagination="true"
        >
            <swiper-slide>Slide 1</swiper-slide>
            <swiper-slide>Slide 2</swiper-slide>
            <swiper-slide>Slide 3</swiper-slide>
        </swiper-container>
    );
}
