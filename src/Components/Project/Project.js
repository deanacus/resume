import React from 'react';
import { PaddedLink } from '../Styled';

export const Project = ({project}) => (
  <article>
    <h3>{project.name}</h3>
    <p>{project.description}</p>
    <p>Links: {project.links.map(link => (<PaddedLink href={link.url} key={link.url}>{link.label}</PaddedLink>))}</p>
    <p>Technology: </p>
    <ul>
      {project.technology.map(tech => <li className="technology">{tech}</li>)}
    </ul>
  </article>
)