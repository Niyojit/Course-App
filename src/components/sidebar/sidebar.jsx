import PropTypes from 'prop-types';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Home, Dataset, Assessment, LineStyle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <Drawer anchor="left" open={isOpen} onClose={onClose}>
      <div className="sidebar">
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Admin</h3>
            <List className="sidebarList">
              <Link to="/" className="link">
                <ListItem button className="sidebarListItem" onClick={onClose}>
                  <ListItemIcon className="sidebarIconContainer"><Home className="sidebarIcon" /></ListItemIcon>
                  <ListItemText primary="Home" className="sidebarText" />
                </ListItem>
              </Link>
              <Link to="/course" className="link">
                <ListItem button className="sidebarListItem" onClick={onClose}>
                  <ListItemIcon className="sidebarIconContainer"><Dataset className="sidebarIcon" /></ListItemIcon>
                  <ListItemText primary="Courses" className="sidebarText" />
                </ListItem>
              </Link>
              <Link to="/dashboard" className="link">
                <ListItem button className="sidebarListItem" onClick={onClose}>
                  <ListItemIcon className="sidebarIconContainer"><LineStyle className="sidebarIcon" /></ListItemIcon>
                  <ListItemText primary="Dashboard" className="sidebarText" />
                </ListItem>
              </Link>
              <ListItem button className="sidebarListItem">
                <ListItemIcon className="sidebarIconContainer"><Assessment className="sidebarIcon" /></ListItemIcon>
                <ListItemText primary="Analytics" className="sidebarText" />
              </ListItem>
            </List>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Sidebar;
