import { Image, Input, Button } from "@nextui-org/react";
import default_img from "../../assets/ai-img.jpg";
import { useState } from "react";
import axios from "axios";

const ImageGenerator = () => {
  const [text, settext] = useState("");
  const [img_url, setimg_url] = useState(false);

  const GenerateImg = async () => {
    if (text === "") {
      return 0;
    }
    console.log("funtion called");
    
    try {
      const url = "https://api.openai.com/v1/images/generations";

      const resdata = {
        model: "dall-e-3",
        prompt: text,
        n: 1,
        size: "1024x1024",
      };

      console.log(text);

      const header = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${"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"}`,
        },
      };

      const response = await axios.post(url, resdata, header);
      
      console.log(response.data);
      setimg_url(true);
    } catch (error) {
      console.log("Error Occured");
    }
  };

  return (
    <>
      <div className="bg-[#000000] w-full h-screen ">
        <div className="main flex flex-col align-middle items-center ">
          <h1 className="text-[white] text-3xl font-bold uppercase pt-10">
            Turn your Imagination into a Image
          </h1>

          <Image
            className="mt-12 h-[26rem]"
            isBlurred
            width={380}
            src={img_url ? img_url : default_img}
            alt="NextUI Album Cover"
            classNames="m-5"
          />

          <div className="flex items-center justify-center">
            <div className="flex w-[23rem] flex-wrap md:flex-nowrap gap-4 mt-10">
              <Input
                type="email"
                placeholder="Describe The Image"
                onChange={(e) => settext(e.target.value)}
                value={text}
              />
              <Button className="py-7" color="primary" onClick={GenerateImg}>
                Generate
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageGenerator;
