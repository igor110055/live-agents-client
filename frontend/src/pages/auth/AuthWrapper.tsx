import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";
import { ReactComponent as Logo } from "../../assets/user/login.svg";

interface AuthWrapperProps {
  children: any;
}

const AuthWrapper: React.FC<AuthWrapperProps> = ({ children }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          maxWidth: 900,
          minHeight: { xs: 320, sm: 450 },
          width: "100%",
          overflow: "hidden",
          position: "relative",
          display: "flex",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "50%", lg: "48%" },
            padding: { xs: 5, lg: 10 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {children}
        </Box>
        <Box
          sx={{
            width: { xs: "100%", sm: "50%", lg: "52%" },
            position: "relative",
            padding: { xs: 5, lg: 5 },
            display: { xs: "none", sm: "flex" },
          }}
        >
          <Logo fill={theme.palette.primary.main} />
        </Box>
      </Card>
    </Box>
  );
};

export default AuthWrapper;
