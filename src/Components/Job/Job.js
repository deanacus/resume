import React from 'react';

import { JobProject } from '../'
import { DateTime } from '../Styled';

export const Job = ({job}) => (
  <article>
    <h3>{job.title}</h3>
    <h4>{job.company} <DateTime>{job.start} - {job.end}</DateTime></h4>
    <p>{job.description}</p>
    <h4>Projects</h4>
    {
      job.projects.map( project => <JobProject project={project} />)
    }
  </article>
)
