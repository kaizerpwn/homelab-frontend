"use client";

import Devices from "@/components/Panel/Home/Devices/Devices";
import Informations from "@/components/Panel/Home/Informations";
import TemperatureGraph from "@/components/Panel/Home/TemperatureGraph/TemperatureGraph";
import PanelLayout from "@/components/Panel/Layout";
import { useSession } from "next-auth/react";
import Preloader from "../preloader";

const Dashboard = () => {
  const { data: session, status } = useSession();
  console.log(session, status);

  if (status === 'authenticated') {
    return (
      <>
        <PanelLayout>
          <Informations />
          <div className="grid grid-cols-1 grid-rows-1 xl:grid-cols-2">
            <Devices />
            <TemperatureGraph />
          </div>
        </PanelLayout>
      </>
    );
  } else if (status === 'loading') return <Preloader />
};

export default Dashboard;
