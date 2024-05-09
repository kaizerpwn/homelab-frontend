"use client"

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import { useDropzone } from 'react-dropzone';
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import BodyData from "./ModalBody";

interface CreateModalI {
    isOpen: boolean;
    onOpenChange: (newState: boolean) => void;
}

export interface CreateHouseRequestI {
    address: string;
    city: string;
    country: string;
    zipcode: string;
    floors: number;
    squareMeters: number;
    latitude: number;
    longitude: number;
    image: File | null | Blob;
    garage: boolean;
    parking: boolean;
}

export default function CreateModal({
    isOpen, onOpenChange
}: CreateModalI) {

    const [data, setData] = useState<CreateHouseRequestI>({
        address: "",
        city: "",
        country: "",
        zipcode: "",
        floors: 0,
        squareMeters: 0,
        latitude: 0,
        longitude: 0,
        image: null,
        garage: false,
        parking: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.id !== "parking" && e.target.id !== "garage") setData({ ...data, [e.target.id]: e.target.value });
        else setData({ ...data, [e.target.id]: e.target.checked });
    }

    const handleCreate = (onClose: () => void) => {
        onClose();
        setData({
            address: "",
            city: "",
            country: "",
            zipcode: "",
            floors: 0,
            squareMeters: 0,
            latitude: 0,
            longitude: 0,
            image: null,
            garage: false,
            parking: false
        });
    }

    const onDrop = (file: any) => { data.image = file; };
    const { getRootProps, getInputProps } = useDropzone({ onDrop, maxFiles: 1 });

    console.log(data)

    return (
        <>
            <Modal
                backdrop="opaque"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                radius="lg"
                classNames={{
                    body: "py-6",
                    backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
                    base: "border-[#292f46] bg-gray-900/80 dark:bg-gray-900/80 text-[#fff]",
                    header: "border-b-[1px] border-[#292f46]",
                    footer: "border-t-[1px] border-[#292f46]",
                    closeButton: "hover:bg-white/5 active:bg-white/10",
                }}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex gap-1 items-center"><AiOutlinePlus className="mr-1" /> Add new house</ModalHeader>
                            <ModalBody>
                                <BodyData data={data} handleChange={handleChange} getInputProps={getInputProps} getRootProps={getRootProps} />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onPress={() => handleCreate(onClose)} className="bg-secondaryColor">
                                    Create
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
