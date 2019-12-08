import React from 'react';
import { DateTime } from '../Styled';

export const JobProject = ({project}) => (
  <div>

    <h5>
      {
        project.live ? <a href={project.url}>{project.name}</a> : project.name
      }
      <DateTime>{project.date}</DateTime>
    </h5>
    <p>{project.description}</p>
  </div>
)