import React from "react";

const DescriptionSite = ({ doctorImg }) => {
  return (
    <div>
      <div className="d-flex justify-content-between description">
        <div className="left_description">
          <span className="description_text">
            Trouvez et réservez un rendez-vous médical ou de soins
          </span>
          <p className="sub_decsription">C'est rapide, facile et gratuit</p>
        </div>
        <div className="right_description">
          <img height={"300px"} src={doctorImg} alt="Doctor image" />
        </div>
      </div>
    </div>
  );
};

export default DescriptionSite;
