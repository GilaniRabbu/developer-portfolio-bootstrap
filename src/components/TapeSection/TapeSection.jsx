import React, { Fragment } from "react";
import { FiStar } from "react-icons/fi";

const TapeSection = () => {
  const words = [
    "Performant",
    "Accessible",
    "Secure",
    "Interactive",
    "Scalable",
    "User Friendly",
    "Maintainable",
    "Search Optimized",
    "Usable",
    "Reliable",
  ];
  return (
    <div className="tape-section font-bonny-medium">
      <div className="tape-container">
        <div className="tape-mask">
          <div className="tape-grid">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {words.map((word) => (
                  <div
                    key={word}
                    className="d-inline-flex gap-4 align-items-center"
                  >
                    <span className="text-uppercase fw-bolder display-6">
                      {word}
                    </span>
                    <FiStar className="rotate-anime h2" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TapeSection;
