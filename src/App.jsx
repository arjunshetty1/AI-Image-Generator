import { NextUIProvider } from "@nextui-org/react";
import ImageGenerator from "./Components/ImageGenerator/ImageGenerator";
const App = () => {
  return (
    <NextUIProvider>
      <ImageGenerator />
    </NextUIProvider>
  );
};

export default App;
