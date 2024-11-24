import React, { useEffect } from "react";
import scriptSrc from "/finisher-header.es5.min.js?url";

const AnimatedBackground = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = scriptSrc;
        script.type = "text/javascript";
        script.onload = () => {
            new window.FinisherHeader({
                count: 20,
                size: {
                    min: 2,
                    max: 8,
                    pulse: 0,
                },
                speed: {
                    x: {
                        min: 0,
                        max: 0.4,
                    },
                    y: {
                        min: 0,
                        max: 0.6,
                    },
                },
                colors: {
                    background: "#1c1c1e",
                    particles: ["#dc86f4", "#9008c7", "#bf22c9"],
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
            style={{ width: "100%", height: "100dvh", opacity: 0.7 }}>
        </div>
    );
};

export default AnimatedBackground;