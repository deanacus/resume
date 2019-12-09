import React from 'react';

import { JobProject } from '../'
import { DateTime, JobSubTitle, JobTitle } from '../Styled';

export const Job = ({job}) => (
  <article>
    <JobTitle>{job.title}</JobTitle>
    <JobSubTitle>{job.company} <DateTime>{job.start} - {job.end}</DateTime></JobSubTitle>
    <p>{job.description}</p>
    <h4>Key Projects</h4>
    {
      job.keyProjects.map( project => <JobProject project={project} />)
    }
  </article>
)
