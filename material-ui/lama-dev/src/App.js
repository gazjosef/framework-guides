import { Button, Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import AddIcon from "@mui/icons-material/Add";

function App() {
  return (
    <div className="App">
      <Button variant="text">Text</Button>
      <Button
        startIcon={<SettingsIcon />}
        variant="contained"
        color="secondary"
        size="small"
      >
        Settings
      </Button>
      <Button
        startIcon={<AddIcon />}
        variant="contained"
        color="success"
        size="small"
      >
        Add new post
      </Button>
      <Button variant="outlined" disabled>
        Outlined
      </Button>
      <Typography variant="h1" component="p">
        It uses an h1 style but it's a p tag
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "skyblue",
          color: "#888",
          margin: 5,
        }}
      >
        My Unique Button
      </Button>
    </div>
  );
}

export default App;
