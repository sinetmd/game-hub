import { useState } from "react";
import { Box, IconButton, Image, SimpleGrid, Spinner } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { data, isLoading, error } = useScreenshots(gameId);

  console.log(data);

  if (isLoading) return <Spinner />;

  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2} marginTop={4}>
      {data?.results?.map((file) => (
        <Image
          key={file.id}
          src={file.image}
          _hover={{ transform: "scale(1.1)", transition: "ease-in-out 0.5s" }}
        />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
