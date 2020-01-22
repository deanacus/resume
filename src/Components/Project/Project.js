import React from 'react';
import { FlatList, FlatListItem } from '../Styled';

export const Project = ({ project }) => (
  <article>
    <h3>{project.name}</h3>
    <p>{project.description}</p>
    <h4>Technologies used</h4>
    <FlatList>
      {project.technology.map(tech => (
        <FlatListItem className="technology" key={tech}>
          {tech}
        </FlatListItem>
      ))}
    </FlatList>
    <h4>Links</h4>
    <FlatList>
      {project.links.map(link => (
        <FlatListItem key={link.url}>
          <a href={link.url}>{link.label}</a>
        </FlatListItem>
      ))}
    </FlatList>
  </article>
);
