import Image from "next/image";
import { CreateHouseRequestI } from "./CreateModal";

interface BodyDataProps {
    data: CreateHouseRequestI;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    getInputProps: () => React.InputHTMLAttributes<HTMLInputElement>;
    getRootProps: () => React.InputHTMLAttributes<HTMLInputElement>;
}

const BodyData = ({
    data,
    handleChange,
    getInputProps,
    getRootProps
}: BodyDataProps) => {
    return (
        <>
            <div className="flex items-center justify-center mb-4">
                {!data.image && (
                    <div className="flex items-center justify-center w-40 h-40 p-16 bg-gray-700 text-white rounded-md cursor-pointer" {...getRootProps()}>
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.5 12H22.515" stroke="#fff" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M25.5 6H10.5C8.01472 6 6 8.01472 6 10.5V25.5C6 27.9853 8.01472 30 10.5 30H25.5C27.9853 30 30 27.9853 30 25.5V10.5C30 8.01472 27.9853 6 25.5 6Z" stroke="#fff" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M6 22.4999L12 16.4999C12.6841 15.8417 13.4601 15.4951 14.25 15.4951C15.0399 15.4951 15.8159 15.8417 16.5 16.4999L24 23.9999" stroke="#fff" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M21 20.9999L22.5 19.4999C23.1841 18.8417 23.9601 18.4951 24.75 18.4951C25.5399 18.4951 26.3159 18.8417 27 19.4999L30 22.4999" stroke="#fff" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>

                        <input {...getInputProps()} accept="image/*" />
                    </div>
                )}
                {data.image && (
                    <div {...getRootProps()} className="cursor-pointer">
                        {Array.isArray(data.image) && data.image[0] instanceof Blob && (
                            <Image src={URL.createObjectURL(data.image[0])} alt="Uploaded image file" unoptimized width={200} height={200} />
                        )}
                        <input {...getInputProps()} accept="image/*" />
                    </div>
                )}
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="mb-4">
                    <label htmlFor="address" className="block text-white mb-2">Address</label>
                    <input
                        type="text"
                        id="address"
                        className="border rounded w-full py-2 px-3 text-white bg-gray-700 outline-none border-none"
                        placeholder="Enter address"
                        onChange={handleChange}
                        value={data.address}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="city" className="block text-white mb-2">City</label>
                    <input
                        type="text"
                        id="city"
                        className="border rounded w-full py-2 px-3 text-white bg-gray-700 outline-none border-none"
                        placeholder="Enter city"
                        onChange={handleChange}
                        value={data.city}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="country" className="block text-white mb-2">Country</label>
                    <input
                        type="text"
                        id="country"
                        className="border rounded w-full py-2 px-3 text-white bg-gray-700 outline-none border-none"
                        placeholder="Enter country"
                        onChange={handleChange}
                        value={data.country}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="zipcode" className="block text-white mb-2">Zip Code</label>
                    <input
                        type="text"
                        id="zipcode"
                        className="border rounded w-full py-2 px-3 text-white bg-gray-700 outline-none border-none"
                        placeholder="Enter zip code"
                        onChange={handleChange}
                        value={data.zipcode}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="floors" className="block text-white mb-2">Floors</label>
                    <input
                        type="number"
                        id="floors"
                        className="border rounded w-full py-2 px-3 text-white bg-gray-700 outline-none border-none"
                        placeholder="Enter number of floors"
                        onChange={handleChange}
                        value={data.floors}
                    />
                </div>
                <div className="mb-4 flex flex-col">
                    <div className="flex mt-6">
                        <label htmlFor="garage" className="block text-white mr-2">Garage</label>
                        <input
                            type="checkbox"
                            id="garage"
                            className="mr-2 w-4 bg-gray-700"
                            onChange={handleChange}
                            checked={data.garage}
                        />
                    </div>
                    <div className="flex">
                        <label htmlFor="parking" className="block text-white mr-2">Parking</label>
                        <input
                            type="checkbox"
                            id="parking"
                            className="mr-2 w-4 bg-gray-700"
                            onChange={handleChange}
                            checked={data.parking}
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="squareMeters" className="block text-white mb-2">Square Meters</label>
                    <input
                        type="number"
                        id="squareMeters"
                        step="0.01"
                        className="border rounded w-full py-2 px-3 text-white bg-gray-700 outline-none border-none"
                        placeholder="Enter square meters"
                        onChange={handleChange}
                        value={data.squareMeters}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="latitude" className="block text-white mb-2">Latitude</label>
                    <input
                        type="number"
                        id="latitude"
                        step="0.000001"
                        className="border rounded w-full py-2 px-3 text-white bg-gray-700 outline-none border-none"
                        placeholder="Enter latitude"
                        onChange={handleChange}
                        value={data.latitude}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="longitude" className="block text-white mb-2">Longitude</label>
                    <input
                        type="number"
                        id="longitude"
                        step="0.000001"
                        className="border rounded w-full py-2 px-3 text-white bg-gray-700 outline-none border-none"
                        placeholder="Enter longitude"
                        onChange={handleChange}
                        value={data.longitude}
                    />
                </div>
            </div>
        </>
    );
}

export default BodyData;