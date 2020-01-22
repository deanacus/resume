import React from 'react';

export const SkillGroup = ({ skillGroup }) => {
  return (
    <article>
      <h3>{skillGroup.area}</h3>
      <ul>
        {skillGroup.skills.map(skill => (
          <li className="skill">{skill}</li>
        ))}
      </ul>
    </article>
  );
};
