import { useBoolean } from 'minimal-shared/hooks';
import { useRef, useEffect, useCallback, useState } from 'react';
import { isEqualPath, isActiveLink, isExternalLink } from 'minimal-shared/utils';

import Popover from '@mui/material/Popover';
import { useTheme } from '@mui/material/styles';

import { usePathname } from 'src/routes/hooks';

import { NavItem } from './nav-desktop-item';
import { Nav, NavLi, NavUl, NavDropdown } from '../components';
import { NavItemDashboard } from './nav-desktop-item-dashboard';

// ----------------------------------------------------------------------

export function NavList({ data, sx, ...other }) {
  const pathname = usePathname();
  const navItemRef = useRef(null);
  const theme = useTheme();
  const isRtl = theme.direction === 'rtl';
  const [hoverTimer, setHoverTimer] = useState(null);

  const isActive = isActiveLink(pathname, data.path, !!data.children);
  const { value: open, onFalse: onClose, onTrue: onOpen } = useBoolean();

  useEffect(() => {
    if (open) {
      onClose();
    }
    return () => {
      if (hoverTimer) clearTimeout(hoverTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpenMenu = useCallback(() => {
    if (data.children) {
      if (hoverTimer) clearTimeout(hoverTimer);
      setHoverTimer(setTimeout(() => {
        onOpen();
      }, 100));
    }
  }, [data.children, onOpen, hoverTimer]);

  const handleCloseMenu = useCallback(() => {
    if (hoverTimer) clearTimeout(hoverTimer);
    setHoverTimer(setTimeout(() => {
      onClose();
    }, 100));
  }, [onClose, hoverTimer]);

  const renderNavItem = () => (
    <NavItem
      ref={navItemRef}
      // slots
      path={data.path}
      title={data.title}
      // state
      open={open}
      active={isActive}
      // options
      hasChild={!!data.children}
      externalLink={isExternalLink(data.path)}
      // action
      onMouseEnter={handleOpenMenu}
      onMouseLeave={handleCloseMenu}
    />
  );

  const renderDropdown = () =>
    !!data.children && (
      <Popover
        open={open}
        anchorEl={navItemRef.current}
        onClose={onClose}
        disableScrollLock
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        PaperProps={{
          onMouseEnter: () => {
            if (hoverTimer) clearTimeout(hoverTimer);
          },
          onMouseLeave: handleCloseMenu,
          sx: { 
            width: 'auto', 
            mt: 0.5, 
            boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.16)'
          }
        }}
        sx={{ pointerEvents: 'none', '& .MuiPaper-root': { pointerEvents: 'auto' } }}
      >
        <Nav>
          <NavUl sx={{ gap: 3, flexDirection: 'row' }}>
            {data.children.map((list) => (
              <NavSubList key={list.subheader} subheader={list.subheader} data={list.items} />
            ))}
          </NavUl>
        </Nav>
      </Popover>
    );

  return (
    <NavLi sx={{ position: 'relative', ...sx }} {...other}>
      {renderNavItem()}
      {renderDropdown()}
    </NavLi>
  );
}

// ----------------------------------------------------------------------

function NavSubList({ data, subheader, sx, ...other }) {
  const pathname = usePathname();

  const isDashboard = subheader === 'Dashboard';

  return (
    <NavLi
      sx={[
        () => ({
          flexGrow: 1,
          flexBasis: 'auto',
          flexShrink: isDashboard ? 1 : 0,
          ...(isDashboard && { maxWidth: 560 }),
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <NavUl>
        <NavLi
          sx={(theme) => ({
            mb: 0.75,
            typography: 'overline',
            fontSize: theme.typography.pxToRem(11),
          })}
        >
          {subheader}
        </NavLi>

        {data.map((item) =>
          isDashboard ? (
            <NavLi key={item.title} sx={{ mt: 0.75 }}>
              <NavItemDashboard path={item.path} />
            </NavLi>
          ) : (
            <NavLi key={item.title} sx={{ mt: 0.75 }}>
              <NavItem
                subItem
                title={item.title}
                path={item.path}
                active={isEqualPath(item.path, pathname)}
              />
            </NavLi>
          )
        )}
      </NavUl>
    </NavLi>
  );
}
