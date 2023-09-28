import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import HomeSvg from "../common/icons/home";
import OrderSvg from "../common/icons/order";
import RetailerSvg from "../common/icons/retailer";
import SettingsSvg from "../common/icons/settings";

export default function SupplierMenu() {
  return (
    <div>
      <Typography variant="h6">Menu</Typography>
      <List>
        <ListItemButton>
          <ListItemIcon>
            <HomeSvg />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <OrderSvg />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <RetailerSvg />
          </ListItemIcon>
          <ListItemText primary="Retailers" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <SettingsSvg />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
      </List>
    </div>
  );
}
