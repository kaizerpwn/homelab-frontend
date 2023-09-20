"use client";

import Devices from "@/components/Panel/Home/Devices/Devices";
import Informations from "@/components/Panel/Home/Informations";
import TemperatureGraph from "@/components/Panel/Home/TemperatureGraph/TemperatureGraph";
import PanelLayout from "@/components/Panel/Layout";
import { useSession } from "next-auth/react";

const Dashboard = () => {
  const { data: session, status } = useSession();
  console.log(session, status);

  return (
    <>
      <PanelLayout>
        <Informations />
        <div className="grid grid-cols-2 grid-rows-1">
          <Devices />
          <TemperatureGraph />
        </div>
      </PanelLayout>
    </>
  );
};

export default Dashboard;
