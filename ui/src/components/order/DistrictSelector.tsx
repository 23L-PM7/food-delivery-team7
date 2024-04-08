import { useState } from "react";
import { ArrowFunctionIcon } from "../../../public/Icons/ArrowFunction";
import { LocationIcon } from "../../../public/Icons/Location";
import { FormControl, MenuItem, InputLabel, Select } from "@mui/material";
import LocationCity from "@mui/icons-material/LocationCity";
import { TbArrowWaveRightDown } from "react-icons/tb";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import { sizing } from "@mui/system";

export default function DistrictSelector() {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <FormControl
      sx={{
        border: "0",
        width: "384px",
        gap: "4px",
      }}
      // fullWidth
    >
      <InputLabel
        sx={{
          height: "48px",
          gap: "4px",
        }}
        id="Дүүрэг сонгоно уу"
      >
        <PlaceOutlinedIcon />
        <>Дүүрэг сонгоно уу</>
      </InputLabel>
      <Select
        placeholder=""
        IconComponent={ExpandMoreIcon}
        labelId="Дүүрэг сонгоно уу"
        id="demo-simple-select"
        value={age}
        style={{ height: 48 }}
        label="Дүүрэг сонгоно уу as"
        onChange={handleChange}
      >
        <MenuItem
          value={0}
          selected
          disabled
          sx={{
            bgcolor: "#18BA51",
            gap: "4px",
          }}
        >
          <PlaceOutlinedIcon />
          <span>Дүүрэг сонгоно уу</span>
        </MenuItem>
        <MenuItem
          value={10}
          sx={{
            height: "48px",
            gap: "4px",
          }}
        >
          <PlaceOutlinedIcon />
          <span>Баянзүрх дүүрэг</span>
        </MenuItem>
        <MenuItem
          sx={{
            height: "48px",
            gap: "4px",
          }}
          value={20}
        >
          <PlaceOutlinedIcon />
          <span>Хан-Уул дүүрэг</span>
        </MenuItem>
        <MenuItem
          sx={{
            height: "48px",
            gap: "4px",
          }}
          value={30}
        >
          <PlaceOutlinedIcon />
          <span>Сонгинохайрхан дүүрэг</span>
        </MenuItem>
        <MenuItem
          sx={{
            height: "48px",
            gap: "4px",
          }}
          value={30}
        >
          <PlaceOutlinedIcon />
          <span>Чингэлтэй дүүрэг</span>
        </MenuItem>
      </Select>
    </FormControl>
  );
}
