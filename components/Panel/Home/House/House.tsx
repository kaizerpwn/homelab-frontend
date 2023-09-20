import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

const House = () => {
  return (
    <div>
      <Card
        isFooterBlurred
        className="w-[620px] h-[500px] col-span-12 sm:col-span-7 opacity-80 drop-shadow-lg shadow-lg relative"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Tuzla, 75000
          </p>
          <h4 className="text-white/90 font-medium text-xl">
            Miladije, Omera Hodzinog 6
          </h4>
        </CardHeader>
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 duration-500 transition drop-shadow-lg shadow-lg">
            <MdNavigateBefore className="text-white text-3xl font-bold" />
            <span className="sr-only">Nazad</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 duration-500 transition drop-shadow-lg shadow-lg">
            <MdNavigateNext className="text-white text-3xl font-bold" />
            <span className="sr-only">Naprijed</span>
          </span>
        </button>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src="/images/houses/kaizerpwn.png"
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <Image
              alt="Breathing app icon"
              className="rounded-full w-10 h-11 bg-black"
              src="/images/houses/kaizerpwn.png"
            />
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">Bosna i Hercegovina</p>
              <p className="text-tiny text-white/60">
                Kuća posjeduje dva sprata, parking i garažu.
              </p>
            </div>
          </div>
          <Button radius="full" size="sm">
            Pogledaj
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default House;
