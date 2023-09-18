"use client";

import Breadcrumb from "@/components/Panel/Breadcrumb/Breadcrumb";
import Devices from "@/components/Panel/Devices/Devices";
import PanelLayout from "@/components/Panel/PanelLayout";

const DevicesPage = () => {
  return (
    <>
      <PanelLayout>
        <Breadcrumb />
        <Devices />
      </PanelLayout>
    </>
  );
};

export default DevicesPage;
