import { Avatar } from "@mui/material";
import prs from "../../assest/images/prs.png";
import eng from "../../assest/images/eng.webp";
import "./Select.css";
const SelectItem = ({ lang }) => {
  return (
    <div>
      <div className="box">
        <Avatar
          className="avatar"
          alt="Remy Sharp"
          src={lang === "prs" ? prs : eng}
          sx={{ width: 40, height: 40 }}
        />
        <p>{lang === "prs" ? "PERSIAN" : "ENGLISH"}</p>
      </div>
    </div>
  );
};
export default SelectItem;
