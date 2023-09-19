"use client";

import Breadcrumb from "@/components/OldPanel/Breadcrumb/Breadcrumb";
import PanelLayout from "@/components/OldPanel/PanelLayout";
import Rooms from "@/components/OldPanel/Rooms/Rooms";

const RoomsPage = () => {
  return (
    <>
      <PanelLayout>
        <Breadcrumb />
        <Rooms />
      </PanelLayout>
    </>
  );
};

export default RoomsPage;
