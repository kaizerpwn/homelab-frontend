"use client";

import Breadcrumb from "@/components/OldPanel/Breadcrumb/Breadcrumb";
import Devices from "@/components/OldPanel/Devices/Devices";
import PanelLayout from "@/components/OldPanel/PanelLayout";

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
