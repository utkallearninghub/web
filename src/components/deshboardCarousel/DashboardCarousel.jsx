import React, { useEffect, useState } from "react";
import "./DashboardCarousel.css";
import banner_mobile_1 from '../../assets/images/banner_mobile_1.jpg';
import banner_mobile_2 from '../../assets/images/banner_mobile_2.webp';
import banner_mobile_3 from '../../assets/images/banner_mobile_3.jpg';

const desktopImages = [
    "https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/18adc383-0231-4846-b493-2d00022f1948.webp",
    "https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/0af1db90-9990-4114-949e-63e04fbc2d60.jpg",
    "https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/77de7cd2-c071-420c-ac0a-fb17ff33c583.jpg",
];

const mobileImages = [
    banner_mobile_2,
    banner_mobile_3,
    banner_mobile_1,
];

const DashboardCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

    const currentImages = isMobile ? mobileImages : desktopImages;

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        window.addEventListener("resize", handleResize);

        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === currentImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => {
            clearInterval(timer);
            window.removeEventListener("resize", handleResize);
        };
    }, [currentImages.length]);

    return (
        <div className="dslider">
            {currentImages.map((img, index) => (
                <img
                    key={index}
                    src={img}
                    className={`dslide ${index === currentIndex ? "active" : ""}`}
                    alt={`Slide ${index + 1}`}
                />
            ))}
        </div>
    );
};

export default DashboardCarousel