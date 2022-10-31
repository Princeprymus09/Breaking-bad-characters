import { useEffect, useState } from "react";
import { Box, styled, Grid } from "@mui/material";
import { fetchData } from "../services/api";
import Character from "./Character";

const Style_ch = styled(Box)`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 15px;
`;

const Characters = ({ text }) => {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    getData();
  }, [text]);

  const getData = async () => {
    let response = await fetchData(text);
    console.log(response);
    setCharacter(response.data);
  };
  return (
    <Style_ch>
      <Grid container spacing={4}>
        {character.map((chr, idx) => (
          <Grid item xs={3}>
            <Character character={chr} key={idx} />
          </Grid>
        ))}
      </Grid>
    </Style_ch>
  );
};

export default Characters;
