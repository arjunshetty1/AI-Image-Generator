import { Image, Input, Button } from "@nextui-org/react";
const ImageGenerator = () => {
  return (
    <div className="bg-[#000000] w-full h-screen ">
      <div className="main flex flex-col align-middle items-center ">
        <h1 className="text-[white] text-3xl font-bold uppercase pt-10">
          Turn your Imagination into a Image
        </h1>

        <Image
          className="mt-12"
          isBlurred
          width={380}
          src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
          alt="NextUI Album Cover"
          classNames="m-5"
        />

        <div className="flex items-center justify-center">
          <div className="flex w-[23rem] flex-wrap md:flex-nowrap gap-4 mt-10">
            <Input type="email" placeholder="Describe The Image" />
            <Button className="py-7" color="primary">
              Generate
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGenerator;
