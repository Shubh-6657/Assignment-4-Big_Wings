import React from "react";
import Dropdown from "./Dropdown";
import Dashboard from "./pages/Dashboard";
import Dispatch from "./pages/Dispatch";
import Vehicle from "./pages/Vehicle";
import Drivers from "./pages/Drivers";
import EditDriverForm from "./pages/EditDriverForm";
import Accounting from "./pages/Accounting";
import Reports from "./pages/Reports";
import Compliance from "./pages/Compliance";
import IFTA from "./pages/IFTA";
import Inspection from "./pages/Inspection";
import More from "./pages/More";
import { Route, Routes } from "react-router-dom";
import AddDriverForm from "./pages/AddDriverForm";
// import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
// import Box from '@mui/joy/Box';
// import Button from '@mui/joy/Button';
import { Box, Button , } from "@mui/material";
import  { createTheme, ThemeProvider } from '@mui/material/styles';
import { useTheme } from "@emotion/react";

// const useEnhancedEffect =
//   typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

const theme = createTheme();

function ModeSwitcher() {
  const { mode, setMode } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <Button
      variant="soft"
      color="neutral"
      onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
    >
      {mode === 'dark' ? 'Turn light' : 'Turn dark'}
    </Button>
  );
}


function App() {
  return (
    <ThemeProvider theme={theme}>
      <>

    <Box
      id="mode-toggle"
      sx={{
        textAlign: 'center',
        flexGrow: 1,
        p: 2,
        m: -3,
        borderRadius: [0, 'sm'],
      }}
    >
      <ModeSwitcher />
    <div className="App">
      <header>
        <Dropdown />
      </header>
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />

        <Route path="dispatch" element={<Dispatch />} />

        <Route path="vehicle" element={<Vehicle />} />

        <Route path="drivers" element={<Drivers />} />
        <Route path="add-driver" element={<AddDriverForm />} />
        <Route path="edit-driver/:id" element={<EditDriverForm />} />
        <Route path="accounting" element={<Accounting />} />

        <Route path="reports" element={<Reports />} />

        <Route path="compliance" element={<Compliance />} />

        <Route path="ifta" element={<IFTA />} />

        <Route path="inspection" element={<Inspection />} />

        <Route path="more" element={<More />} />
      </Routes>
    </div>
     </Box>
    </>
    </ThemeProvider>
  ); 
}
export default App;
