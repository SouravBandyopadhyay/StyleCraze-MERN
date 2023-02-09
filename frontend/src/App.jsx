import { Box } from "@chakra-ui/react";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Box minH="100vh" display="flex" flexDirection="column">
        <AllRoutes />
      </Box>
      <Box marginTop="auto">
        <Footer />
      </Box>
    </div>
  );
}

export default App;
