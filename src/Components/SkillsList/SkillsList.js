import React from 'react';

import { SkillGroup } from '../'

import { skills } from '../../Data'
import { Separator } from '../Styled';

export const SkillsList = () => {
  return (
    <section className="skills-list">
      <h2>Skills</h2>
      {
        skills.map((skillGroup, ind) => {
          if ( ind < skills.length - 1) {
            return (
              <>
                <SkillGroup skillGroup={skillGroup} />
                <Separator />
              </>
            )
          }
          return <SkillGroup skillGroup={skillGroup} />
        })
      }
    </section>
  )
}