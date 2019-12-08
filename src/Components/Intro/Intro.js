import React from 'react';

import { intro } from '../../Data'

export const Intro = () => (
  <section className="intro">
    {
      intro.map(line => <p>{line}</p>)
    }
  </section>
)