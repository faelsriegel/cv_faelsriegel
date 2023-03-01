import { Badge, Flex, Box } from '@chakra-ui/react'
import React from 'react'

interface SkillBadge {
  skills: string[]
}

const SkillBadge: React.FC<SkillBadge> = ({ skills }) => {
  if (skills)
    return (
      <Flex flexWrap="wrap">
        {skills.map(skill => (
          <Box key={skill} mr="2" _last={{ mr: '0' }}>
            <Badge bg="white" color="black">
              {skill}
            </Badge>
          </Box>
        ))}
      </Flex>
    )
  else return <></>
}


<div class="badges">
  <div class="badge one">
    <div class="badgeDetails">
      <div class="badgeDetailsHaeder">badge Header</div>
      <div class="badgeDetailsButton">Click me</div>
    </div>
  </div>
  <div class="badge two">
    <div class="badgeDetails">
      <div class="badgeDetailsHaeder">badge Header</div>
      <div class="badgeDetailsButton">Click me</div>
    </div>
  </div>
  <div class="badge three">
    <div class="badgeDetails">
      <div class="badgeDetailsHaeder">badge Header</div>
      <div class="badgeDetailsButton">Click me</div>
    </div>
  </div>
</div>

export default SkillBadge
