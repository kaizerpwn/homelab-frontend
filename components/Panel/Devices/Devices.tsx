'use client'
import { useState } from "react";
import { AiOutlinePoweroff } from "react-icons/ai"
import { TbDevicesPc } from "react-icons/tb";
import { MdCreateNewFolder } from "react-icons/md"
import Axios from "@/utils/Axios";
import { User } from "@/utils/Interfaces/User";
import { QueryClient, QueryKey, useQuery } from "@tanstack/react-query";
import { DeviceProps } from "@/app/panel/devices/page";
import { DeviceMutations } from "@/utils/Mutations/DeviceMutations";
import DevicesInterface from "@/utils/Interfaces/Devices";

const DEVICES_QUERY_KEY: QueryKey = ['devices'];
const AxiosInstance = new Axios();
export const queryClient = new QueryClient();


const Devices = ({ devices }: DeviceProps) => {
    const deviceMutate = new DeviceMutations();
    const [deviceState, setDeviceState] = useState({});

    const [currentSwitchState, setCurrentSwitchState] = useState<DeviceProps>();

    const { data: allDevices, isLoading, isError } = useQuery(DEVICES_QUERY_KEY, AxiosInstance.getAllDevices, {
        initialData: devices,
    });

    const [modalState, setModalState] = useState<boolean>(false);
    const [texts, setTexts] = useState({
        name: ''
    })

    const handleModal = () => setModalState(!modalState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setTexts((prev) => ({ ...prev, [e.target.name]: [e.target.value][0] }));
    }

    const AddRoom = () => {

    }

    const rooms = [
        { prostorija: 'Dnevni boravak' },
        { prostorija: 'Spavaća soba' },
        { prostorija: 'Kupatilo' },
    ];

    let [device, setDevice] = useState<DevicesInterface>(allDevices);

    function updateDeviceStatus(id: number, status: boolean) {
        setDevice({ ...device, id: id, status: status });
    };

    async function handleSwitcher(id: number) {
        updateDeviceStatus(id - 1, true)
    }


    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error loading data</div>;
    }

    return (
        <>
            <div className="flex flex-col text-white bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 rounded-xl">
                <div className="flex mt-4 ml-4 ">
                    <TbDevicesPc className="p-1 text-5xl rounded-full bg-secondaryColor" />
                    <span className="items-center my-auto ml-2 text-xl font-bold">Dostupni uređaji</span>
                </div>
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8" id="uredjaji">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-sm font-light text-left">
                                <thead className="font-medium border-b dark:border-neutral-500">
                                    <tr>
                                        <th scope="col" className="px-6 py-4">Ime uređaja</th>
                                        <th scope="col" className="px-6 py-4">Kategorija</th>
                                        <th scope="col" className="px-6 py-4">Status</th>
                                        <th scope="col" className="px-6 py-4">Prostorija</th>
                                        <th scope="col" className="px-6 py-4">Akcije</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {allDevices.map((device: DevicesInterface) => (
                                        <tr className="transition duration-300 ease-in-out border-b hover:bg-gradient-to-r hover:from-gray-700 hover:via-gray-600 hover:to-gray-500" key={device.id}>
                                            <td className="px-6 py-4 whitespace-nowrap">{device.ime}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{device.kategorija}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <button className="flex items-center w-12 h-6 transition duration-300 bg-white rounded-full shadow focus:outline-none">
                                                    <div
                                                        id="switch-toggle"
                                                        onClick={() => { handleSwitcher(device.id as number) }}
                                                        className={device.status ?
                                                            (
                                                                "relative w-7 h-7 p-1 text-white transition duration-500 transform -translate-x-2 bg-red-500 rounded-full"
                                                            ) : (
                                                                "relative w-7 h-7 p-1 text-white transition duration-500 transform translate-x-6 bg-green-500 rounded-full"
                                                            )
                                                        }>
                                                        {device.status ? (
                                                            <AiOutlinePoweroff className="flex items-center mx-auto my-auto text-xl" />
                                                        ) : (
                                                            <div className="flex items-center mx-auto my-auto text-xl" />
                                                        )}
                                                    </div>
                                                </button>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">{device.prostorija}</td>
                                            <td className="px-6 py-4 space-x-2 whitespace-nowrap">
                                                <button type="button" className="px-4 py-2 font-semibold text-white duration-200 ease-in bg-blue-500 rounded hover:bg-blue-600" onClick={handleModal}>Kontrola</button>
                                                <button type="button" className="px-4 py-2 font-semibold text-white duration-200 ease-in bg-red-500 rounded hover:bg-red-600">Izbriši</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {modalState && (
                <div id="modal">
                    <div className="overlay"></div>
                    <div className="fixed z-50 w-full p-4 top-[5rem] mx-auto overflow-x-hidden overflow-y-auto md:h-full">
                        <div className="relative w-full h-full xs:max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl xl:-right-[5rem] md:h-auto right-[2%]">
                            <div className="relative bg-white rounded-lg shadow dark:bg-gray-800">
                                <button type="button" onClick={handleModal} className="absolute top-3 shadow-xl right-2.5 duration-500 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="authentication-modal">
                                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    <span className="sr-only">Ugasi modal</span>
                                </button>
                                <div className="px-6 py-6 lg:px-8">
                                    <h3 className="flex items-center mb-4 text-2xl font-medium text-gray-900 dark:text-white"><MdCreateNewFolder className='p-1 mr-2 rounded-full bg-gradient-to-r from-primaryColor to-secondaryColor w-9 h-9' />Kontrola uređaja</h3>
                                    <form className="space-y-6" action="#">
                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Naziv uređaja:</label>
                                            <input type="text" name="name" id="name" value={texts.name} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Naziv uređaja" />

                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Odaberite prostoriju uređaja</label>
                                            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                <option selected>Odaberite..</option>
                                                {rooms.map((room, index) => {
                                                    return (
                                                        <option key={index} value={room.prostorija}>{room.prostorija}</option>
                                                    );
                                                })}
                                            </select>

                                        </div>
                                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-secondaryColor dark:hover:bg-primaryColor duration-500" onClick={AddRoom}>Kreiraj</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            )}
        </>
    )
}

export default Devices