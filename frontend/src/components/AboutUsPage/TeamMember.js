import React from "react";

const TeamMember = ({ name, linkedin, github, img }) => {
  return (
    <div className="team-member">
      <p className="about-us-name">{name}</p>
      <a href={github}>
        <img src={img} />
      </a>
      <a className="linkedin" href={linkedin}>
        <i class="fab fa-linkedin" />
      </a>
      <a className="github" href={github}>
        <i class="fab fa-github" />
      </a>
    </div>
  );
};

export default TeamMember;
