import { useState } from "react";
import { ArrowFunctionIcon } from "../../../public/Icons/ArrowFunction";
import { LocationIcon } from "../../../public/Icons/Location";
import { FormControl, MenuItem, InputLabel, Select } from "@mui/material";
import LocationCity from "@mui/icons-material/LocationCity";
import { TbArrowWaveRightDown } from "react-icons/tb";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import { sizing } from "@mui/system";

export default function ApartmentSelector() {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <FormControl
      sx={{
        width: "384px",
        gap: "4px",
      }}
      // fullWidth
    >
      <InputLabel
        sx={{
          gap: "4px",
        }}
        id="Дүүрэг сонгоно уу"
      >
        <PlaceOutlinedIcon />
        <>Байр гудамж сонгоно уу</>
      </InputLabel>
      <Select
        placeholder=""
        IconComponent={ExpandMoreIcon}
        labelId="Дүүрэг сонгоно уу"
        id="demo-simple-select"
        style={{ height: 48 }}
        value={age}
        label="Дүүрэг сонгоно уу as?????"
        onChange={handleChange}
      >
        <MenuItem
          value={0}
          selected
          disabled
          sx={{
            bgcolor: "#18BA51",
            height: "48px",
            gap: "4px",
          }}
        >
          <PlaceOutlinedIcon />
          <span>Байр гудамж сонгоно уу </span>
        </MenuItem>
        <MenuItem
          value={10}
          sx={{
            height: "48px",
            gap: "4px",
          }}
        >
          <PlaceOutlinedIcon />
          <span>Нархан хотхон</span>
        </MenuItem>
        <MenuItem
          sx={{
            height: "48px",
            gap: "4px",
          }}
          value={20}
        >
          <PlaceOutlinedIcon />
          <span>26-р байр</span>
        </MenuItem>
        <MenuItem
          sx={{
            height: "48px",
            gap: "4px",
          }}
          value={30}
        >
          <PlaceOutlinedIcon />
          <span>Хоймор хотхон</span>
        </MenuItem>
        <MenuItem
          sx={{
            height: "48px",
            gap: "4px",
          }}
          value={30}
        >
          <PlaceOutlinedIcon />
          <span>45-р байр</span>
        </MenuItem>
        <MenuItem
          sx={{
            height: "75%",
            gap: "4px",
          }}
          value={30}
        >
          <PlaceOutlinedIcon />
          <span>Зайсан хотхон </span>
        </MenuItem>
      </Select>
    </FormControl>
  );
}
