import React from "react";
import { Box, Button, TextField } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";

interface FilterBarProps {
  filterType: "all" | "today" | "week" | "custom";
  setFilterType: React.Dispatch<React.SetStateAction<"all" | "today" | "week" | "custom">>;
  customStart: Dayjs | null;
  setCustomStart: React.Dispatch<React.SetStateAction<Dayjs | null>>;
  customEnd: Dayjs | null;
  setCustomEnd: React.Dispatch<React.SetStateAction<Dayjs | null>>;
}

const FilterBar: React.FC<FilterBarProps> = ({
  filterType,
  setFilterType,
  customStart,
  setCustomStart,
  customEnd,
  setCustomEnd,
}) => {
  return (
    <Box display="flex" gap={2} mb={2}>
      <Button
        variant={filterType === "all" ? "contained" : "outlined"}
        onClick={() => setFilterType("all")}
      >
        All
      </Button>
      <Button
        variant={filterType === "today" ? "contained" : "outlined"}
        onClick={() => setFilterType("today")}
      >
        Today
      </Button>
      <Button
        variant={filterType === "week" ? "contained" : "outlined"}
        onClick={() => setFilterType("week")}
      >
        This Week
      </Button>
      <Button
        variant={filterType === "custom" ? "contained" : "outlined"}
        onClick={() => setFilterType("custom")}
      >
        Custom Date range
      </Button>

      {filterType === "custom" && (
        <>
          <TextField
            type="date"
            label="Start"
            value={customStart ? dayjs(customStart).format("YYYY-MM-DD") : ""}
            onChange={(e) => setCustomStart(dayjs(e.target.value))}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            type="date"
            label="End"
            value={customEnd ? dayjs(customEnd).format("YYYY-MM-DD") : ""}
            onChange={(e) => setCustomEnd(dayjs(e.target.value))}
            InputLabelProps={{ shrink: true }}
          />
        </>
      )}
    </Box>
  );
};

export default FilterBar;
