import { Button, ButtonGroup } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

const MonthSwitcher = function (props) {
  return (
    <ButtonGroup variant="outlined" color="secondary">
      <Button
        onClick={() => {
          props.dateChanger(-1);
        }}
      >
        <KeyboardArrowLeft />
      </Button>
      <Button
        onClick={() => {
          props.dateChanger(1);
        }}
      >
        <KeyboardArrowRight />
      </Button>
    </ButtonGroup>
  );
};

export default MonthSwitcher;
