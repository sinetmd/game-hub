import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import usePlatfom from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  // Games
  // Action Games
  // Xbox Games
  // Xbox Action Games

  const genre = useGenre(gameQuery.genreId);

  const platform = usePlatfom(gameQuery.platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""}`;

  return (
    <Heading marginY={5} fontSize="5xl" as="h1">
      {heading} Games
    </Heading>
  );
};

export default GameHeading;
