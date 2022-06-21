import { Button, IconButton } from "@mui/material";
import paper from "../../assest/icons/Paper.svg";
import "./btns.css";

const ButtonEvent = () => {
  return (
    <>
      <IconButton className="btn">
        <img width={20} src={paper} alt="" />
      </IconButton>
    </>
  );
};
export default ButtonEvent;
