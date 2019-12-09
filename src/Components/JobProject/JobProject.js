import React from 'react';
import { DateTime, FlatList, FlatListItem } from '../Styled';

export const JobProject = ({project}) => (
  <div>

    <h5>
      {
        project.live ? <a href={project.url}>{project.name}</a> : project.name
      }
      <DateTime>{project.date}</DateTime>
    </h5>
    <p>{project.description}</p>
    <h6>Technologies used</h6>
    <FlatList>
      {
        project.technology.map(
          tech => (
            <FlatListItem className="technology" key={tech}>{tech}</FlatListItem>
          )
        )
      }
    </FlatList>
  </div>
)