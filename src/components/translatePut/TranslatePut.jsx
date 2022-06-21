import { Box, Input } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import SelectLang from "../Select/Select";
import "./TranslatePut.css";

const TranslatePut = () => {
  const [initialValue, setinitialValue] = useState(null);
  const [secondaryValue, setsecondaryValue] = useState(null);
  const [langT, setlangT] = useState("fa");
  const LangHandler = () => {
    // langT === "fa" ? setlangT("en") : "fa";
    if (langT === "fa") {
      setlangT("en");
    } else setlangT("fa");

    console.log(langT);
  };
  const Translate = (e) => {
    console.log("sad");
    axios
      .get(
        `https://one-api.ir/translate/?token=813367:628e5413cf82b2.03824717&action=google&lang=${langT}&q=${e.target.value}`
      )
      .then((res) => {
        console.log(res.data.result);
        setsecondaryValue(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Box display={"flex"} justifyContent={"center"}>
        <SelectLang lang={langT} click={LangHandler} />
      </Box>
      <Box display={"flex"} mt={4} justifyContent={"center"}>
        <Box className="inputBox">
          <textarea
            placeholder={langT !== "fa" ? "تایپ کنید" : "type ..."}
            className="fa"
            dir={langT !== "fa" ? "rtl" : "ltr"}
            onChange={Translate}
            value={initialValue}
          />
          <textarea
            placeholder={langT !== "fa" ? "translate" : "ترجمه"}
            className="Secondary"
            value={secondaryValue}
          />
          {/* <ButtonEvent /> */}
        </Box>
      </Box>
    </>
  );
};

export default TranslatePut;
