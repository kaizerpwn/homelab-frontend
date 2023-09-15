'use client'

import Breadcrumb from '@/components/Panel/Breadcrumb/Breadcrumb'
import Faq from '@/components/Panel/Faq/Faq'
import PanelLayout from '@/components/Panel/PanelLayout'

const FaqPage = () => {
  return (
    <>
      <PanelLayout>
        <Breadcrumb />
        <Faq></Faq>
      </PanelLayout>
    </>
  )
}

export default FaqPage