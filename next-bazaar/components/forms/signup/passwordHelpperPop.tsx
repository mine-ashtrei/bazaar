import { useState } from "react";
import {
  Tooltip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { InfoOutlined } from "@mui/icons-material";

const passwordRequirements = [
  "Has at least one lowercase letter.",
  "Has at least one uppercase letter.",
  "Has at least one digit.",
  "Has at least one special character from @$!%*?&.",
  "Is at least 8 characters long.",
];

export default function PasswordRequirementsHelper() {
  const [open, setOpen] = useState(false);

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  const handleTooltipClose = () => {
    setOpen(false);
  };

  return (
    <Tooltip
      title={
        <List>
          {passwordRequirements.map((requirement, index) => (
            <ListItem key={index}>
              <ListItemText primary={requirement} />
            </ListItem>
          ))}
        </List>
      }
      open={open}
      onClose={handleTooltipClose}
      onOpen={handleTooltipOpen}
      placement="right-start"
    >
      <div
        style={{ cursor: "default" }}
        onMouseEnter={handleTooltipOpen}
        onMouseLeave={handleTooltipClose}
      >
        <InfoOutlined />
      </div>
    </Tooltip>
  );
}
