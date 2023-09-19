"use client";

import Informations from "@/components/Panel/Home/Informations";
import PanelLayout from "@/components/Panel/Layout";
import { useSession } from "next-auth/react";

const Dashboard = () => {
  const { data: session, status } = useSession();
  console.log(session, status);

  return (
    <>
      <PanelLayout>
        <Informations />
      </PanelLayout>
    </>
  );
};

export default Dashboard;
