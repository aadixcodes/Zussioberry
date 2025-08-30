import FAQSection from '@/components/sections/FAQSection'
import FranchiseForm from '@/components/sections/FranchiseForm'
import FranchiseIntro from '@/components/sections/FranchiseIntro'
import React from 'react'

const page = () => {
  return (
    <div>
      <FranchiseIntro />

      <FranchiseForm />

      <FAQSection />
    </div>
  )
}

export default page