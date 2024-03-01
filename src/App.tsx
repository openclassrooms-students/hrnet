import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import { Toaster } from "sonner";

const App = () => {
  return (
    <BrowserRouter>
      <Toaster richColors position="top-right" />
      <Router />
    </BrowserRouter>
  );
};

export default App;
