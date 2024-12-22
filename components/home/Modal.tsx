"use client";

import React, { useEffect, useState } from "react";
import {
  Modal,
  Card,
  Typography,
  Button,
  Box,
  IconButton,
  Stack,
  useTheme,
} from "@mui/material";
import { IoClose, IoGameController } from "react-icons/io5";
import { createClient } from "@/utils/supabase/client";
import { GamePreferences, Games } from "@/types";

const ModalComponent = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [gamesData, setGamesData] = useState<Games[] | null>([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const supabase = createClient();
  const theme = useTheme();

  const getGames = async () => {
    const { data, error } = await supabase.from("games").select("*");
    if (error) {
      console.log("error fetching games", error);
      setGamesData([]);
      return;
    }
    setGamesData(data || []);
    // console.log(data)
  };

  useEffect(() => {
    if (open) {
      getGames();
    }
  }, [open]);

  return (
    <>
      <div onClick={handleOpen}>{children}</div>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
          backdropFilter: "blur(4px)",
        }}
      >
        <Card
          sx={{
            width: "100%",
            maxWidth: 1000,
            maxHeight: "90vh",
            overflow: "auto",
            background: "rgba(30, 30, 30, 0.7)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          {/* Header */}
          <Box
            sx={{
              background: "linear-gradient(145deg, #00ADB5 30%, #007A80 90%)",
              p: 4,
              position: "relative",
            }}
          >
            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 16,
                top: 16,
                color: "white",
                "&:hover": {
                  background: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              <IoClose size={24} />
            </IconButton>
            <Typography variant="h2" sx={{ color: "white", mb: 1 }}>
              Add a New Game
            </Typography>
            <Typography variant="body1" sx={{ color: "rgba(255, 255, 255, 0.8)" }}>
              Choose from our collection to add to your library
            </Typography>
          </Box>

          {/* Games Grid */}
          <Box sx={{ p: 4 }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, 1fr)",
                  md: "repeat(3, 1fr)",
                },
                gap: 3,
                width: "100%",
              }}
            >
              {gamesData?.map((game) => (
                <Box
                  key={game.id}
                  sx={{
                    background: "rgba(18, 18, 18, 0.6)",
                    borderRadius: 2,
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    overflow: "hidden",
                    backdropFilter: "blur(16px)",
                  }}
                >
                  {/* Game Image */}
                  <Box
                    sx={{
                      height: 180,
                      bgcolor: "rgba(0, 0, 0, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {game.image_url ? (
                      <img
                        src={game.image_url || ""}
                        alt={game.game_name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    ) : (
                      <IoGameController
                        size={64}
                        style={{
                          color: theme.palette.secondary.contrastText,
                          opacity: 0.5,
                        }}
                      />
                    )}
                  </Box>

                  {/* Game Info */}
                  <Stack spacing={2} sx={{ p: 3 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: theme.palette.text.primary,
                        fontWeight: 600,
                      }}
                    >
                      {game.game_name}
                    </Typography>

                    <Button
                      variant="outlined"
                      fullWidth
                      color='secondary'
       
                    >
                      Select Game
                    </Button>
                  </Stack>
                </Box>
              ))}
            </Box>
          </Box>
        </Card>
      </Modal>
    </>
  );
};

export default ModalComponent;