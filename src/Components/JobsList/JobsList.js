import React from 'react';

import { Job } from '../';

import { experience } from '../../Data';

export const JobsList = () => {
  const reverseChronological = experience.reverse();

  return (
    <section className="experience">
      <h2>Experience</h2>
      {reverseChronological.map((job, ind) => {
        if (ind < reverseChronological.length - 1) {
          return (
            <>
              <Job job={job} />
            </>
          );
        }
        return <Job job={job} />;
      })}
    </section>
  );
};
