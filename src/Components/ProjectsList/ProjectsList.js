import React from 'react';

import { Project } from '../';

import { projects } from '../../Data';

export const ProjectsList = () => (
  <section className="projects">
    <h2>Projects</h2>
    {projects.map((project, ind) => {
      if (ind < projects.length - 1) {
        return (
          <>
            <Project project={project} />
          </>
        );
      }
      return <Project project={project} />;
    })}
  </section>
);
