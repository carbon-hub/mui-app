import { DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import { Avatar, Box, Button, ButtonGroup, Modal, Stack, styled, TextField, Tooltip, Typography } from "@mui/material";
import Fab from "@mui/material/Fab";
import { useState } from "react";

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
});

const UserBox = styled(Box) ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px"
});

const Add = () => {

    const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip
        title="Compose"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
        onClick={ e => setOpen(true) }
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={ e => setOpen(false) }
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={3}>
            <Typography variant="h6" color="gray" textAlign="center">Create post</Typography>
            <UserBox>
                <Avatar
                    src = "https://mui.com/static/images/avatar/1.jpg"
                    sx = {{ width: 30, height: 30 }}
                />
                <Typography fontWeight={500} variant="span">John Doe</Typography>
            </UserBox>
            <TextField
                id="outlined-multiline-flexible"
                multiline
                rows={3}
                placeholder="What's on your mind?"
                variant="standard"
                sx={{width: "100%"}}
            />
            <Stack direction="row" gap={1} mt={2} mb={2}>
                <EmojiEmotions color="primary"/>
                <Image color="secondary" />
                <VideoCameraBack color="success" />
                <PersonAdd color="error" />                
            </Stack>
            <ButtonGroup 
                variant="contained"
                fullWidth
            >
                <Button>Post</Button>
                <Button sx={{width: "100px"}}>
                    <DateRange />
                </Button>
            </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
