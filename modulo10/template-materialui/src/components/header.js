import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

function Header() {
  return (
    <Box className="header-container">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="Abrir menu"
            className="menu-icon"
          >
            {/* Ícone do menu removido, mas ainda é clicável */}
          </IconButton>
          <Typography variant="h6" component="div" className="title">
            Gerenciamento de Projetos
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
