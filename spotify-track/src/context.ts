import { SpotifyAPI } from "./datasource/spotify-api";

export type DataSourceContext = {
  dataSources: {
    spotifyAPI: SpotifyAPI;
  };
};
