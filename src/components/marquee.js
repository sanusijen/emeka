import React from "react";

import team1 from "../assets/images/team1.jpg";
import team2 from "../assets/images/team2.jpg";
import team3 from "../assets/images/team3.jpg";
import team4 from "../assets/images/team4.jpg";
import team5 from "../assets/images/team5.jpg";
import team6 from "../assets/images/team6.jpg";
import team7 from "../assets/images/team7.jpg";
import team8 from "../assets/images/team8.jpg";
import team9 from "../assets/images/team9.jpg";


const Marquee = () => {
    const row1 = [team1, team2, team3, team4, team5, team6];
    const row2 = [team7, team8, team9, team1, team2, team3];
    

  // Inline Styles
  const containerStyle = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  };

  const rowContainerStyle = {
    display: "flex",
    width: "100%",
    overflow: "hidden",
    marginTop: "2rem",
  };

  const marqueeStyle = {
    display: "flex",
    animation: "scrollX 30s linear infinite",
  };

  const marqueeReverseStyle = {
    display: "flex",
    animation: "scrollXReverse 30s linear infinite",
  };

  const imageWrapperStyle = {
    display: "flex",
    justifyContent: "center",
    width: "clamp(10rem, 10vw, 30rem)",
    padding: "1rem",
  };

  const imageStyle = {
    width: "100%",
    height: "5rem",
    objectFit: "contain",
    borderRadius: "0.5rem",
    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div style={containerStyle}>
      <div style={{ padding: "2rem 0", textAlign: "center" }}>
        <h1 style={{ fontSize: "1.875rem", fontWeight: "bold", marginBottom: "0.5rem" }}>
          Our Partner <span style={{ color: "#20B486" }}>Companies Accross the Country</span>
        </h1>
        <p style={{ color: "#6D737A", fontWeight: "bold" }}>
        GoldenKoat collaborates with top painting brands across the country, ensuring the highest quality in paints and coatings. Our partners are industry leaders known for innovation, durability, and eco-friendly solutions.
        </p>
      </div>

      {/* Row 1 */}
      <div style={rowContainerStyle}>
        <div style={marqueeStyle}>
          {row1.map((src, idx) => (
            <div key={idx} style={imageWrapperStyle}>
              <img src={src} alt={`row1-${idx}`} style={imageStyle} />
            </div>
          ))}
        </div>
        <div style={marqueeStyle}>
          {row1.map((src, idx) => (
            <div key={idx} style={imageWrapperStyle}>
              <img src={src} alt={`row1-${idx}`} style={imageStyle} />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 */}
      <div style={rowContainerStyle}>
        <div style={marqueeReverseStyle}>
          {row2.map((src, idx) => (
            <div key={idx} style={imageWrapperStyle}>
              <img src={src} alt={`row2-${idx}`} style={imageStyle} />
            </div>
          ))}
        </div>
        <div style={marqueeReverseStyle}>
          {row2.map((src, idx) => (
            <div key={idx} style={imageWrapperStyle}>
              <img src={src} alt={`row2-${idx}`} style={imageStyle} />
            </div>
          ))}
        </div>
      </div>

      {/* Keyframe Animations using Inline Style Workaround */}
      <style>
        {`
          @keyframes scrollX {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-100%);
            }
          }

          @keyframes scrollXReverse {
            from {
              transform: translateX(-100%);
            }
            to {
              transform: translateX(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Marquee;
