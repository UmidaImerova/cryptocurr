import React from "react";
import { Avatar, MenuItem, MenuList, Typography, ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-conteiner">
        <Avatar
          alt="logo"
          src="https://penntoday.upenn.edu/sites/default/files/2022-01/cryptocurrency-main.jpg"
          sx={{ width: 96, height: 96 }}
        />
        <Typography variant="h6">
        Crypto info
        </Typography>
        <MenuList>
          <MenuItem>
            <ListItemIcon>
              <HomeIcon color="primary" />
            </ListItemIcon>
            <ListItemText>
              <Link to ='/'>Home</Link>
            </ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <CurrencyBitcoinIcon color="primary" />
            </ListItemIcon>
            <ListItemText>
              <Link to ='/cryptocurrencies'>Cryptocurrencies</Link>
            </ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <NewspaperIcon color="primary" />
            </ListItemIcon>
            <ListItemText>
              <Link to ='/news'>News</Link>
            </ListItemText>
          </MenuItem>
        </MenuList>
      </div>
    </div>
  );
};

export default Navbar;
