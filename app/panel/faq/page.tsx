"use client";

import Breadcrumb from "@/components/OldPanel/Breadcrumb/Breadcrumb";
import Faq from "@/components/OldPanel/Faq/Faq";
import PanelLayout from "@/components/OldPanel/PanelLayout";

const FaqPage = () => {
  return (
    <>
      <PanelLayout>
        <Breadcrumb />
        <Faq></Faq>
      </PanelLayout>
    </>
  );
};

export default FaqPage;
