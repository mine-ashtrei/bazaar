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
import NextLink from "next/link";

export default function SupplierMenu() {
  return (
    <div>
      <Typography variant="h6">Menu</Typography>
      <List>
        <ListItemButton component={NextLink} href="/dashboard">
          <ListItemIcon>
            <HomeSvg />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton component={NextLink} href="/dashboard/orders">
          <ListItemIcon>
            <OrderSvg />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItemButton>
        <ListItemButton component={NextLink} href="/dashboard/retailers">
          <ListItemIcon>
            <RetailerSvg />
          </ListItemIcon>
          <ListItemText primary="Retailers" />
        </ListItemButton>
        <ListItemButton component={NextLink} href="/dashboard/settings">
          <ListItemIcon>
            <SettingsSvg />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
      </List>
    </div>
  );
}
