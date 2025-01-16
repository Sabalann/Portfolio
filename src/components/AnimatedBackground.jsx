import React, { useEffect } from "react";
import scriptSrc from "/src/assets/finisher-header.es5.min.js?url";

const AnimatedBackground = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = scriptSrc;
        script.type = "text/javascript";
        script.onload = () => {
            new window.FinisherHeader({
                count: 5,
                size: {
                    min: 2,
                    max: 8,
                    pulse: 0,
                },
                speed: {
                    x: {
                        min: 0,
                        max: 0.2,
                    },
                    y: {
                        min: 0,
                        max: 0.2,
                    },
                },
                colors: {
                    background: "#141414",
                    particles: ["#DDDDDD", "#777777", "#555555"],
                },
                blending: "none",
                opacity: {
                    center: 1,
                    edge: 0.65,
                },
                skew: 0,
                shapes: ["c"],
            });
        };
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div
            className="header finisher-header"
            style={{ width: "100%", height: "100%", opacity: 0.7 }}>
        </div>
    );
};

export default AnimatedBackground;