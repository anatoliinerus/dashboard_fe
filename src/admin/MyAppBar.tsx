// @ts-nocheck
import * as React from 'react';
import { AppBar, UserMenu, useUserMenu, useLogout, MenuItemLink } from 'react-admin';
import { MenuItem, ListItemIcon, ListItemText } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitIcon from '@mui/icons-material/PowerSettingsNew';

const MyLogoutButton = React.forwardRef((props, ref) => {
    const logout = useLogout();
    const handleClick = () => logout();
    return (
        <MenuItem
            onClick={handleClick}
            ref={ref}
            {...props}
        >
            <ListItemIcon>
                <ExitIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Logout</ListItemText>
        </MenuItem>
    );
});

export const MyAppBar = (props) => (
    <AppBar
    {...props}
        userMenu={
            <UserMenu>
                <MenuItemLink
                    to="/my-profile"
                    primaryText="My Profile"
                    leftIcon={<SettingsIcon />}
                />
                <MyLogoutButton/>
            </UserMenu>
        }
    />
);