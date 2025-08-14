import React from 'react'
import HeroSection from '../components/HeroSection'
import OurSolutions from '../components/OurSolutions'
import NextStepSection from '../components/NextStepSection'
import WeAreProudSection from '../components/WeAreProudSection'
import InvestInYourselfSection from '../components/InvestInYourselfSection'
import CourseProcess from '../components/CourseProcess'

const LearnerHomepage = () => {
  return (
    <div><HeroSection/>
    <OurSolutions/>
    <NextStepSection/>
    <WeAreProudSection/>
    <InvestInYourselfSection/>
    <CourseProcess/>
    </div>
  )
}

export default LearnerHomepage