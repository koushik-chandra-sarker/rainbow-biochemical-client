import React from 'react';
import {Menu, MenuItem, Sidebar, SubMenu} from 'react-pro-sidebar';

const SidebarMenu = () => {
  return (
    <div className={"absolute left-0 h-full"} style={{top: "70px"}}>
      <Sidebar defaultCollapsed transitionDuration={1000} collapsedWidth={0}>
        <Menu>
          <SubMenu label="Charts">
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <MenuItem> Documentation </MenuItem>
          <MenuItem> Calendar </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default SidebarMenu;