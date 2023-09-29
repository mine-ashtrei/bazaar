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
        <ListItemButton href="/dashboard">
          <ListItemIcon>
            <HomeSvg />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton href="/dashboard/orders">
          <ListItemIcon>
            <OrderSvg />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItemButton>
        <ListItemButton href="/dashboard/retailers">
          <ListItemIcon>
            <RetailerSvg />
          </ListItemIcon>
          <ListItemText primary="Retailers" />
        </ListItemButton>
        <ListItemButton href="/dashboard/settings">
          <ListItemIcon>
            <SettingsSvg />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
      </List>
    </div>
  );
}
