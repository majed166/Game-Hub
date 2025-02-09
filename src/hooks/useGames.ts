import { GameQuery } from "../App";
import UseData from "./useData";
import { Genre } from "./useGenres";

export interface Platform{
    id:number;
    name:string;
    slug:string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform:Platform}[]
    metacritic: number;
    rating_top: number;
  }
  
const useGames =(gamQuery: GameQuery) => 
  UseData<Game>('/games', {params: {
    genres:gamQuery.genre?.id, 
    platforms: gamQuery.platform?.id,
    ordering: gamQuery.sortOrder,
    search : gamQuery.searchText
  }},
  [gamQuery])

export default useGames;