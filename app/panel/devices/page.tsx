"use client";

import Breadcrumb from "@/components/Panel/Breadcrumb/Breadcrumb";
import Devices from "@/components/Panel/Devices/Devices";
import PanelLayout from "@/components/Panel/PanelLayout";

interface Device {
  id: number;
  name: string;
  status: boolean;
}
export interface DeviceProps {
  devices: Device[];
}

const DevicesPage = ({ devices }: DeviceProps) => {
  return (
    <>
      <PanelLayout>
        <Breadcrumb />
        <Devices devices={devices} />
      </PanelLayout>
    </>
  );
};

export default DevicesPage;
