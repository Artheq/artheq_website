import React from 'react'
import { HighEdComponents, HighEdP , HighPC, HighEdChart, HighEdChartDiv, ChartHeading, ChartTitle, List, Li, Ln, Lr} from './HighEdElements'

const HighEd = () => {
  return (
    <HighEdComponents>
        <HighPC>
        <HighEdP>
        Generating objective and effective measures of learning outcomes such as communication,
        collaboration, and critical thinking has long served as one of the most significant challenges
        facing higher education.
        </HighEdP>
        </HighPC>
        <HighEdChartDiv>
            <HighEdChart>
                <ChartHeading>
                    <ChartTitle>ARTHEQ's Educational Value</ChartTitle>
                </ChartHeading>
                <List>

                <Lr>
                <Ln>1</Ln>
                <Li> Easy integration with all major LMS, including Blackboard, Canvas, and Moodle</Li>
                </Lr>
                
                <Lr>
                <Ln>2</Ln>
                <Li> Measure students’ communication skills. Identify areas of strength and improvements </Li>
                </Lr>

                <Lr>
                <Ln>3</Ln>
                <Li> Enhance student learning experience and self-discovery by observing, commenting, and learning from anonymized library from ArthEQ by skill areas - Improve sales and presentation skills for business and other programs</Li>
                </Lr>

                <Lr>
                <Ln>4</Ln>
                <Li> Generate objective measures of learning for accreditation bodies</Li>
                </Lr>
               
                <Lr>
                <Ln>5</Ln>
                <Li> Enhance the academic brand of the institution and student renetion</Li>
                </Lr>
                </List>
                
                
                
            </HighEdChart>

        </HighEdChartDiv>


    </HighEdComponents>
  )
}

export default HighEd