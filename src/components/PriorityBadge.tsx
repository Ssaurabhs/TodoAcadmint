import React from "react";
import { Box, Typography } from "@mui/material";

interface Priority {
  label: "Critical" | "High" | "Medium";
  color: string;
}

interface PriorityBadgeProps {
  priority: Priority;
}

export const PriorityBadge: React.FC<PriorityBadgeProps> = ({ priority }) => {
  return (
    <Box display="flex" alignItems="center" gap={1}>
      <span
        style={{
          width: 10,
          height: 10,
          borderRadius: "50%",
          backgroundColor: priority.color,
          display: "inline-block",
        }}
      />
      <Typography variant="body2" sx={{ fontWeight: 600, color: priority.color }}>
        {priority.label}
      </Typography>
    </Box>
  );
};
