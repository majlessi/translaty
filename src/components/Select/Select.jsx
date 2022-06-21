import { IconButton } from "@mui/material";
import replace from "../../assest/icons/replace.svg";
import "./Select.css";
import SelectItem from "./SelextItem";
const SelectLang = ({ click, lang }) => {
  return (
    <div className="selectBox">
      {lang !== "fa" ? (
        <div>
          <SelectItem lang={"prs"} />
        </div>
      ) : (
        <div>
          <SelectItem lang={"eng"} />
        </div>
      )}

      <IconButton onClick={click} aria-label="delete">
        <img src={replace} alt="" srcset="" />
      </IconButton>
      {lang === "fa" ? (
        <div>
          <SelectItem lang={"prs"} />
        </div>
      ) : (
        <div>
          <SelectItem lang={"eng"} />
        </div>
      )}
    </div>
  );
};
export default SelectLang;
