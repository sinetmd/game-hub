import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatfom from "../hooks/usePlatform";
import useGameQueryStore from "../store";

const GameHeading = () => {
  // Games
  // Action Games
  // Xbox Games
  // Xbox Action Games

  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatfom(platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""}`;

  return (
    <Heading marginY={5} fontSize="5xl" as="h1">
      {heading} Games
    </Heading>
  );
};

export default GameHeading;
