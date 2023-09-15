'use client'

import Breadcrumb from '@/components/Panel/Breadcrumb/Breadcrumb'
import PanelLayout from '@/components/Panel/PanelLayout'
import Rooms from '@/components/Panel/Rooms/Rooms'

const RoomsPage = () => {
  return (
    <>
      <PanelLayout>
        <Breadcrumb />
        <Rooms />
      </PanelLayout>
    </>
  )
}

export default RoomsPage