
import Image, { ImageLoaderProps } from "next/image";

export const imageLoader = ({ src }: ImageLoaderProps) => {
    return src;
}