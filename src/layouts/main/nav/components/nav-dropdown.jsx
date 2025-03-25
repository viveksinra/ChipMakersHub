import Fade from '@mui/material/Fade';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

// ----------------------------------------------------------------------

const NavDropdownPaper = styled('div')(({ theme }) => ({
  ...theme.mixins.paperStyles(theme, { dropdown: true }),
  width: 'auto',
  maxWidth: 'fit-content',
  padding: theme.spacing(5, 1, 1, 4),
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.16)',
  ...(theme.direction === 'rtl' && {
    padding: theme.spacing(5, 4, 1, 1),
  }),
}));

// ----------------------------------------------------------------------

export const NavDropdown = styled(({ open, children, ...other }) => (
  <Fade in={open} timeout={150}>
    <Box {...other}>
      <NavDropdownPaper>{children}</NavDropdownPaper>
    </Box>
  </Fade>
))(({ theme }) => ({
  marginTop: 12,
  width: 'auto',
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  padding: theme.spacing(1.5),
  zIndex: theme.zIndex.drawer * 2,
}));
