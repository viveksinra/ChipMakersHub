import { styled } from '@mui/material/styles';
import Popover, { popoverClasses } from '@mui/material/Popover';

// ----------------------------------------------------------------------

export const NavDropdownPaper = styled('div')(({ theme }) => ({
  width: 'auto',
  maxWidth: 220,
  ...theme.mixins.paperStyles(theme, { dropdown: true }),
}));

// ----------------------------------------------------------------------

export const NavDropdown = styled(Popover)(({ open, theme }) => ({
  pointerEvents: 'none',
  [`& .${popoverClasses.paper}`]: {
    boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.16)',
    overflow: 'unset',
    backdropFilter: 'none',
    background: 'transparent',
    padding: theme.spacing(0, 0.75),
    ...(open && { pointerEvents: 'auto' }),
  },
}));
