import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';

import {
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  Menu,
  MenuItem,
  Tab,
  Tabs,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import * as React from 'react';

const pages = ['Home', 'Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

interface LinkTabProps {
  label?: string;
  href?: string;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

function ResponsiveAppBar() {
  const [value, setValue] = React.useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  // const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  // const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElNav(event.currentTarget);
  // };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleChange = (e: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <AppBar position="fixed" style={{ backgroundColor: 'black' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' } }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>
          </Box>

          {/* Nav Menu (Mobile) */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => setIsDrawerOpen(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            {/* <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map(page => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>

          {/* Drawer (Mobile Nav Menu) */}
          <Drawer
            anchor="left"
            classes={{
              paper: 'custom-drawer-paper', // The custom class defined in SCSS
            }}
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
          >
            <Box sx={{ width: 250 }} onClick={() => setIsDrawerOpen(false)}>
              {pages.map(page => (
                <MenuItem key={page} className="custom-menu-item">
                  <Typography textAlign="center" color="white">
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Box>
          </Drawer>

          {/* Nav Menu (Desktop) */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            <Tabs
              indicatorColor="primary"
              textColor="inherit"
              variant="fullWidth"
              value={value}
              onChange={handleChange}
            >
              {pages.map(page => (
                <LinkTab key={page} label={page} href="/drafts" />
              ))}
            </Tabs>
          </Box>

          {/* User Menu */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map(setting => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;

/**
The provided code is a React component that represents a custom AppBar (Navigation Bar) for a web application. 
It is using Material-UI components and styles to create a responsive and interactive navigation bar with different menu options and user settings. 
Let's go through each part of the code:

1. `<AppBar position="fixed" style={{ backgroundColor: 'black' }}>`:
   - This is the main AppBar component with a `position` set to "fixed", which means it will stay at the top of the screen even when the user scrolls down.
   - The `style` prop sets the background color of the AppBar to black.

2. `<Container maxWidth="xl">`:
   - The `Container` component provides a fixed-width container that centers its content.
   - `maxWidth="xl"` specifies the maximum width of the container, where "xl" is the breakpoint size, and in this case, it's extra-large.

3. `<Toolbar disableGutters>`:
   - The `Toolbar` component is used to group and layout the AppBar's content.
   - `disableGutters` prop is used to remove the left and right padding for the Toolbar.

4. `<Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>`:
   - The `Box` component is a layout component provided by Material-UI.
   - `sx` prop is used to apply custom styles to the Box.
   - `display: 'flex'` sets the display mode to flex, allowing the child elements to be flex items.
   - `alignItems: 'center'` centers the child elements vertically within the Box.
   - `mr: 2` applies a margin-right of 2 units to the Box.

5. `<AdbIcon sx={{ display: { xs: 'none', md: 'flex' } }} />`:
   - This is an icon component, specifically an "AdbIcon".
   - The `sx` prop is used to apply custom styles to the icon.
   - `display: { xs: 'none', md: 'flex' }` hides the icon on extra-small screens (xs) and displays it on medium screens (md).

6. `<Typography>`:
   - The `Typography` component is used to display text.
   - `variant="h6"` sets the typography variant to "h6".
   - `noWrap` prevents the text from wrapping to multiple lines.
   - `component="a"` specifies that the Typography will act as an anchor (`<a>`) element.
   - `href="/"` sets the link URL to "/". Clicking on this text will navigate to the homepage.
   - The `sx` prop applies custom styles to the Typography, including font family, font weight, letter spacing, color, and text decoration.

7. `LOGO`:
   - The text "LOGO" will be displayed as the anchor text for the homepage link.

8. `<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>`:
   - Another Box component that will take the available space and flex its child elements.
   - `display: { xs: 'flex', md: 'none' }` shows the content inside the Box as flex items on extra-small screens (xs) and hides it on medium screens (md).

9. `<IconButton>`:
   - This is an icon button component provided by Material-UI.
   - `size="large"` sets the size of the button to large.
   - `aria-label="menu"` provides an accessibility label for the button.
   - `onClick={handleOpenNavMenu}` sets the click event handler to open the navigation menu.
   - `color="inherit"` sets the color of the icon to inherit the color from its parent element.

10. `<Menu>` (Mobile Nav Menu):
   - This is a menu component provided by Material-UI that will be displayed on mobile screens (xs).

11. `{pages.map(page => ( ... ))}`:
   - This maps over an array of "pages" and creates a MenuItem for each page in the array.
   - The `handleCloseNavMenu` function is used as the `onClick` handler for each MenuItem, which will close the mobile navigation menu when a page is selected.

12. `<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>`:
   - Another Box component for the desktop navigation menu.
   - `display: { xs: 'none', md: 'flex' }` hides the content inside the Box on extra-small screens (xs) and shows it as flex items on medium screens (md).
   - `justifyContent: 'center'` centers the child elements horizontally within the Box.

13. `<Tabs>` (Desktop Nav Menu):
   - This is a Tabs component provided by Material-UI, used for the desktop navigation menu.
   - `indicatorColor="primary"` sets the color of the indicator (the underline) to the primary color.
   - `textColor="inherit"` sets the text color of the tabs to inherit the color from its parent element.
   - `variant="fullWidth"` makes the tabs span the full width of the container.
   - `value={value}` and `onChange={handleChange}` control the selected tab and handle tab changes, respectively.

14. `{pages.map(page => ( ... ))}`:
   - Similar to the mobile navigation menu, this maps over the "pages" array and creates a LinkTab for each page.
   - The `href="/drafts"` is hardcoded for each tab, but it should ideally be dynamically generated based on the page selected.

15. `<LinkTab>`:
   - This is a custom component for the Tabs to create a tab with a link.
   - It receives a `label` prop for the tab text and an `href` prop for the link URL.

16. `<Box sx={{ flexGrow: 0 }}>`:
   - Another Box component that will not flex and take up the available space.
   - It contains the user menu and settings icon.

17. `<Tooltip>`:
   - The `Tooltip` component provides a tooltip when hovering over its child element.
   - `title="Open settings"` sets the text for the tooltip.

18. `<IconButton>`:
   - An icon button to open the user menu (settings).
   - `onClick={handleOpenUserMenu}` sets the click event handler to open the user menu.
   - `sx={{ p: 0 }}` applies custom styles to remove padding around the IconButton.

19. `<Avatar>`:
   - The `Avatar` component displays a user's profile picture or an image representing the user.
   - `alt="Remy Sharp"` provides an alternative text for the image.
   - `src="/static/images/avatar/2.jpg"` sets the image source URL.

20. `<Menu>` (User Menu):
   - This is another Menu component for the user menu (settings).
   - It will display a list of settings options when opened.

21. `{settings.map(setting => ( ... ))}`:
   - This maps over an array of "settings" and creates a MenuItem for each setting in the array.
   - The `handleCloseUserMenu` function is used as the `onClick` handler for each MenuItem, which will close the user menu when a setting is selected.
*/
