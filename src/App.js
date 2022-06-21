import { Box } from "@mui/system";
import "./App.css";
import SelectLang from "./components/Select/Select";
import Title from "./components/Title/Title";
import TranslatePut from "./components/translatePut/TranslatePut";

function App() {
  return (
    <div className="App">
      <Box>
        <Title />
      </Box>

      <Box>
        <TranslatePut />
        <p className="develop">
          develop By{" "}
          <a href="https://www.instagram.com/majlessi.ui/">Ali Majlessi</a>
        </p>
      </Box>

    </div>
  );
}

export default App;
