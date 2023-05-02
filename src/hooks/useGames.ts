import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { GameQuery } from "./../App";
import apiClient, { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";
import APIClient from "../services/api-client";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  rating: number;
}

// const useGames = (gameQuery: GameQuery) =>
//   useData<Game>(
//     "/games",
//     {
//       params: {
//         genres: gameQuery?.genre?.id,
//         platforms: gameQuery?.platform?.id,
//         ordering: gameQuery?.sortOrder,
//         search: gameQuery?.searchText,
//       },
//     },
//     [gameQuery]
//   );

const apiClient = new APIClient<Game>("/games");

// using react query
const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery?.genre?.id,
          platforms: gameQuery?.platform?.id,
          ordering: gameQuery?.sortOrder,
          search: gameQuery?.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });

export default useGames;
