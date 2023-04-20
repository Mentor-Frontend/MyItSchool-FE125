import React from "react";
import ContentLoader from "react-content-loader";

const Placeholder = () => (
  <ContentLoader
    className="productBlock"
    speed={2}
    width={360}
    height={435}
    viewBox="0 0 360 435"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="41" y="309" rx="0" ry="0" width="275" height="30" />
    <rect x="41" y="342" rx="0" ry="0" width="275" height="25" />
    <rect x="128" y="370" rx="15" ry="15" width="100" height="40" />
    <rect x="160" y="410" rx="0" ry="0" width="0" height="2" />
    <rect x="42" y="30" rx="0" ry="0" width="275" height="275" />
  </ContentLoader>
);

export default Placeholder;
