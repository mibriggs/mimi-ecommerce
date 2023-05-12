import { useEffect, useState } from "react"

const useViewport = () => {    
    const [width, setWidth] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);

    const handleWindowResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };

    useEffect(() => {
        handleWindowResize();
        window.addEventListener("resize", handleWindowResize);
        return () => {
            window.removeEventListener("resize", handleWindowResize)
        };
    }, []);

    return {width, height};
};

export default useViewport;
