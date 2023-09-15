'use client'
import { useState } from "react"
import { FaBed } from "react-icons/fa"
import { MdCreateNewFolder } from "react-icons/md"

let using: number;

const Rooms = () => {
    const [modalState, setModalState] = useState<boolean>(false);
    const [editModalState, setEditModalState] = useState<boolean>(false);

    const [rooms, setRooms] = useState([
        {
            id: 1,
            sprat: 2,
            prostorija: 'Dnevni boravak',
            brojUredjaja: 5
        },
        {
            id: 2,
            sprat: 3,
            prostorija: 'Spavaća soba',
            brojUredjaja: 6
        },
        {
            id: 3,
            sprat: 1,
            prostorija: 'Kupatilo',
            brojUredjaja: 2
        }
    ]);

    const [texts, setTexts] = useState({
        prostorija: '',
        sprat: 1
    })

    const handleModal = () => {
        setTexts({ prostorija: '', sprat: 1 })
        setModalState(!modalState);
    }

    const handleEditModal = (id: number) => {
        if (id) {
            using = id;
            setTexts((prev) => ({ ...prev, prostorija: rooms[id - 1].prostorija, sprat: rooms[id - 1].sprat }));
        }
        setEditModalState(prevState => { return !prevState; });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setTexts((prev) => ({ ...prev, [e.target.name]: [e.target.value][0] }));
    }

    const AddRoom = () => {
        const newRoom = {
            id: rooms.length + 1,
            sprat: texts.sprat,
            prostorija: texts.prostorija,
            brojUredjaja: 0
        };
        setRooms([...rooms, newRoom]);
        setModalState(!modalState);
    }

    const EditRoom = () => {
        const updatedRooms = rooms.map(room => {
            if (room.id === using) {
                return {
                    ...room,
                    sprat: texts.sprat,
                    prostorija: texts.prostorija,
                };
            }
            return room;
        });
        setRooms(updatedRooms);
        setEditModalState(prevState => { return !prevState; });
    }

    const handleDelete = (id: number) => {
        const updatedRooms = rooms.filter((room) => room.id !== id);
        setRooms(updatedRooms);
    };

    return (
        <>
            <div className="flex flex-col text-white bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 rounded-xl">
                <div className="grid w-full grid-cols-1 grid-rows-1 mt-4 ml-4 sm:grid-cols-2 sm:justify-items-stretch">
                    <div className='flex justify-self-start'>
                        <FaBed className="p-1 text-5xl rounded-full bg-secondaryColor" />
                        <span className="items-center my-auto ml-2 text-xl font-bold">Vaše prostorije</span>
                    </div>
                    <button className="px-4 py-1 mr-8 text-white duration-500 ease-in-out rounded-lg xs:mt-4 xs:justify-center sm:justify-self-end bg-secondaryColor hover:bg-primaryColor" onClick={handleModal}>Dodaj novu</button>
                </div>
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8" id="prostorije">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-sm font-light text-left">
                                <thead className="font-medium border-b dark:border-neutral-500">
                                    <tr>
                                        <th scope="col" className="px-6 py-4">Prostorija</th>
                                        <th scope="col" className="px-6 py-4">Broj uređaja</th>
                                        <th scope="col" className="px-6 py-4">Sprat</th>
                                        <th scope="col" className="px-6 py-4">Akcije</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rooms.map((room) => (
                                        <tr className="transition duration-300 ease-in-out border-b hover:bg-gradient-to-r hover:from-gray-700 hover:via-gray-600 hover:to-gray-500" key={room.id}>
                                            <td className="px-6 py-4 whitespace-nowrap">{room.prostorija}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{room.brojUredjaja}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{room.sprat}</td>
                                            <td className="px-6 py-4 space-x-2 whitespace-nowrap">
                                                <button type="button" className="px-4 py-2 font-semibold text-white duration-200 ease-in bg-blue-500 rounded hover:bg-blue-600" onClick={() => handleEditModal(room.id)}>Kontrola</button>
                                                <button type="button" className="px-4 py-2 font-semibold text-white duration-200 ease-in bg-red-500 rounded hover:bg-red-600" onClick={() => handleDelete(room.id)}>Izbriši</button>
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
                                    <h3 className="flex items-center mb-4 text-2xl font-medium text-gray-900 dark:text-white"><MdCreateNewFolder className='p-1 mr-2 rounded-full bg-gradient-to-r from-primaryColor to-secondaryColor w-9 h-9' />Kreiraj prostoriju</h3>
                                    <form className="space-y-6" action="#">
                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ime prostorije:</label>
                                            <input type="text" name="prostorija" id="prostorija" value={texts.prostorija} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Ime prostorije" required />
                                        </div>
                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sprat:</label>
                                            <input type="text" name="sprat" id="sprat" value={texts.sprat} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Ime prostorije" required />
                                        </div>
                                        <button type="button" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-secondaryColor dark:hover:bg-primaryColor duration-500" onClick={AddRoom}>Kreiraj</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            )}
            {editModalState && (
                <div id="modal">
                    <div className="overlay"></div>
                    <div className="fixed z-50 w-full p-4 top-[5rem] mx-auto overflow-x-hidden overflow-y-auto md:h-full">
                        <div className="relative w-full h-full xs:max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl xl:-right-[5rem] md:h-auto right-[2%]">
                            <div className="relative bg-white rounded-lg shadow dark:bg-gray-800">
                                <button type="button" onClick={() => { handleEditModal(using) }} className="absolute top-3 shadow-xl right-2.5 duration-500 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="authentication-modal">
                                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    <span className="sr-only">Ugasi modal</span>
                                </button>
                                <div className="px-6 py-6 lg:px-8">
                                    <h3 className="flex items-center mb-4 text-2xl font-medium text-gray-900 dark:text-white"><MdCreateNewFolder className='p-1 mr-2 rounded-full bg-gradient-to-r from-primaryColor to-secondaryColor w-9 h-9' />Uredi prostoriju</h3>
                                    <form className="space-y-6" action="#">
                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ime prostorije:</label>
                                            <input type="text" name="prostorija" id="prostorija" value={using && (texts.prostorija)} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Ime prostorije" required />
                                        </div>
                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sprat prostorije:</label>
                                            <input type="text" name="sprat" id="sprat" value={using && (texts.sprat)} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Ime prostorije" required />
                                        </div>
                                        <button type="button" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-secondaryColor dark:hover:bg-primaryColor duration-500" onClick={EditRoom}>Uredi</button>
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

export default Rooms