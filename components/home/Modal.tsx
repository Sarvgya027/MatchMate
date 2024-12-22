"use client";

import React, { useEffect, useState } from "react";
import { Modal, Card, Typography, Button, Stack } from "@mui/material";
import { createClient } from "@/utils/supabase/client";

const ModalComponent = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [games, setGames] = useState('');
  const [gamesFetched, setGamesFetched] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const supabase = createClient();
  //get the games from the db(games table) 
  const getGames = async () => {
    const {data, error} = await supabase.from('games').select('*');
    if(error){
      console.log('error fetching games', error);
    }
    console.log('games', data);
    //set games
    setGamesFetched(true);
  }

  useEffect(() => {
    if(open){
      getGames();
    }
  }, [open, gamesFetched])

  return (
    <>
      <div onClick={handleOpen}>{children}</div>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card
          sx={{
            width: "90%",
            maxWidth: 600,
            maxHeight: "90vh",
            overflow: "auto",
            p: 4,
          }}
        >
          <Stack spacing={10}>
            <Typography variant="h5" component="h2" gutterBottom>
              ADD A NEW GAME
            </Typography>
            {/* Add game preferences form here */}
            some form that shits

            <Button onClick={handleClose} sx={{ mt: 2 }}>
              Close
            </Button>
          </Stack>
        </Card>
      </Modal>
    </>
  );
};

export default ModalComponent;
