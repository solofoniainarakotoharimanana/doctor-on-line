import React from "react";
import ContentLoader from "react-content-loader";

const DoctorListLoader = (props) => {
  return (
    <ContentLoader
      speed={2}
      width={476}
      height={124}
      viewBox="0 0 476 124"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="0" y="0" rx="2" ry="2" width="140" height="140" />
      <rect x="160" y="5" rx="3" ry="3" width="900" height="16" />
      <rect x="160" y="35" rx="3" ry="3" width="900" height="8" />
      <rect x="160" y="80" rx="3" ry="3" width="900" height="8" />
      <rect x="160" y="93" rx="3" ry="3" width="900" height="8" />
    </ContentLoader>
  );
};

export default DoctorListLoader;
