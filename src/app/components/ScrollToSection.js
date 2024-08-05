"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

const ScrollToSection = () => {
    const searchParams = useSearchParams();
    const queryParams = searchParams.get("section");
    const aboutUsRef = useRef(null);
    const blogHomeRef = useRef(null);
    const homeRef = useRef(null);

    useEffect(() => {
        if (queryParams) {
            switch (queryParams) {
                case "home":
                    homeRef.current?.scrollIntoView({ behavior: "smooth" });
                    break;
                case "aboutUs":
                    aboutUsRef.current?.scrollIntoView({ behavior: "smooth" });
                    break;
                case "blogHome":
                    blogHomeRef.current?.scrollIntoView({ behavior: "smooth" });
                    break;
                default:
                    break;
            }
        }
    }, [queryParams]);

    return { homeRef, aboutUsRef, blogHomeRef };
};
export default ScrollToSection;
