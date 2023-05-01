import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  // Games
  // Action Games
  // Xbox Games
  // Xbox Action Games
  const heading = `${gameQuery?.platform?.name || ""} ${
    gameQuery?.genre?.name || ""
  }`;

  return (
    <Heading marginY={5} fontSize="5xl" as="h1">
      {heading} Games
    </Heading>
  );
};

export default GameHeading;
