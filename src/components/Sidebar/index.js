import React from 'react';
import {
    SidebarContainer,
    Icon,
    CLoseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CLoseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
            <SidebarLink to="services0" onClick={toggle}>
                    Problem
                </SidebarLink>
                <SidebarLink to="about" onClick={toggle}>
                    About
                </SidebarLink>
                <SidebarLink to="discover" onClick={toggle}>
                    Services
                </SidebarLink>
                <SidebarLink to="services2" onClick={toggle}>
                    Benefits
                </SidebarLink>
                <SidebarLink to="signup" onClick={toggle}>
                    How It Works
                </SidebarLink>
                <SidebarLink to="services" onClick={toggle}>
                    Our Team
                </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/signin">
                    Download
                </SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar