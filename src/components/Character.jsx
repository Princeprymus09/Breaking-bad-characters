import { Card, styled, Tooltip, Box, Typography } from "@mui/material";

const Images = styled("img")({
  height: 300,
  width: "100%",
  objectFit: "cover",
});

const Character = ({ character }) => {
  return (
    <Card>      
      <Tooltip
        title={
          <Box>
            <Typography>Name : {character.name}</Typography>
            <Typography>Real Name : {character.portrayed}</Typography>
            <Typography>Nick Name : {character.nickname}</Typography>
            <Typography>Birthday : {character.birthday}</Typography>
            <Typography>Status : {character.status}</Typography>
          </Box>
        }
        arrow
        placement="top"
      >
        <Images src={character.img} alt="characters" />
      </Tooltip>
    </Card>
  );
};

export default Character;
