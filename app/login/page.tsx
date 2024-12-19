import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AuthButton from "@/components/auth/AuthButton";
import StyledCard from "@/components/auth/StyleCard";

const LoginPage = () => {
  return (
    <Box
      component="main"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        backgroundImage: `
          radial-gradient(circle at 10% 20%, rgba(0, 173, 181, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 90% 80%, rgba(255, 87, 34, 0.1) 0%, transparent 50%)
        `,
        padding: "40px",
        position: "relative",
        overflow: "hidden",
      }}
    >

      {/* Floating geometric shapes :) */}
      {[...Array(5)].map((_, i) => (
        <Box
          key={i}
          sx={{
            position: "absolute",
            width: "100px",
            height: "100px",
            border: "2px solid rgba(0, 173, 181, 0.1)",
            borderRadius: "20px",
            transform: `rotate(${i * 45}deg)`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: "float 10s infinite linear",
            animationDelay: `${i * 2}s`,
            "@keyframes float": {
              "0%": { transform: "translateY(0) rotate(0)" },
              "50%": { transform: "translateY(-20px) rotate(180deg)" },
              "100%": { transform: "translateY(0) rotate(360deg)" },
            },
          }}
        />
      ))}

      {/* Main content  */}
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Typography 
          variant="h1" 
          textAlign={"center"}
          sx={{ 
            mb: 2, 
            pt: 2,
          }}
        >
          MatchMate
        </Typography>

        <Typography
          variant="h6"
          sx={{ 
            mb: 4, 
            maxWidth: "600px", 
            textAlign: "center",
            background: "linear-gradient(90deg, #00ADB5, #FF5722)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontWeight: "500"
          }}
        >
          Find your perfect gaming duo and dominate together
        </Typography>

        <StyledCard 
          sx={{ 
            maxWidth: "400px", 
            width: "100%", 
            p: 4,
            background: "rgba(30, 30, 30, 0.8)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <Typography 
            variant="h4" 
            sx={{ 
              mb: 4, 
              textAlign: "center",
            }}
          >
            Welcome Back, Gamer
          </Typography>

          <AuthButton /> 
        </StyledCard>

        <Typography 
          variant="body2" 
          sx={{ 
            mt: 8, 
            textAlign: "center",
            opacity: 0.8,
            position: "relative",
            "&::before, &::after": {
              content: '""',
              position: "absolute",
              top: "50%",
              width: "40px",
              height: "1px",
              background: "rgba(255, 255, 255, 0.2)",
            },
            "&::before": { right: "calc(100% + 20px)" },
            "&::after": { left: "calc(100% + 20px)" },
          }}
        >
          Level up your gaming experience with MatchMate
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginPage;