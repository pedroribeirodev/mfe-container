import { Avatar, Text, Button } from "@pedro-marketplace/react";
import { colors } from "@pedro-marketplace/tokens";
import AboutPage from "./About";
import "./reset.css";
import HomePage from "./Home";
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const handleRedirectToAbout = () => {
    navigate("/about");
  };

  return (
    <div style={{ backgroundColor: colors.gray400, height: "100vh" }}>
      <div
        style={{
          backgroundColor: colors.gray600,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "24px",
          marginBottom: "12px",
        }}
      >
        <Text
          size="md"
          as="strong"
          style={{ color: colors.white }}
          onClick={() => navigate("/")}
        >
          Marketplace
        </Text>
        <div style={{ display: "flex" }}>
          <Button
            variant="secondary"
            style={{ marginRight: "12px" }}
            onClick={handleRedirectToAbout}
          >
            Sobre
          </Button>
          <Avatar src="https://github.com/pedroribeirodev.png" />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
