'use client'

import Breadcrumb from '@/components/Panel/Breadcrumb/Breadcrumb'
import Devices from '@/components/Panel/Devices/Devices'
import PanelLayout from '@/components/Panel/PanelLayout'
import Axios from '@/utils/Axios'
import { QueryClient, QueryKey } from '@tanstack/react-query'
import { GetServerSideProps } from 'next'
import DevicesInterface from '@/utils/Interfaces/Devices'

const DEVICES_QUERY_KEY: QueryKey = ['devices'];
const AxiosInstance = new Axios();
export const queryClient = new QueryClient();

export const getServerSideProps: GetServerSideProps<{ devices: DevicesInterface[] }> = async (context) => {
  await queryClient.prefetchQuery(DEVICES_QUERY_KEY, AxiosInstance.getAllDevices);

  return {
    props: {
      devices: queryClient.getQueryData(DEVICES_QUERY_KEY) as DevicesInterface[],
    },
  };
}

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
  )
}

export default DevicesPage