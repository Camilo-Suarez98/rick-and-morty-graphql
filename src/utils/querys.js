import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
query getCharaters($page: Int!) {
  characters(page: $page) {
    info {
      pages
      next
      prev
    }
    results {
      id
      name
      status
      image
      gender
    }
  }
}
`;

export const GET_CHARACTER = gql`
  query getCharater($id: ID!) {
    character(id: $id) {
      id
      name
      image
      status
      species
      origin {
        name
      }
      location {
        name
      }
      episode {
        id
        name
        episode
      }
    }
  }
`;

export const GET_EPISODES = gql`
  query getEpisodes($page: Int!) {
    episodes(page: $page) {
      info {
        pages
        next
        prev
      }
      results {
        id
        name
        air_date
        episode
      }
    }
  }
`;

export const GET_EPISODE = gql`
  query getEpisode($id: ID!) {
    episode(id: $id) {
      id
      name
      air_date
      episode
      characters {
        id
        name
        image
      }
    }
  }
`;

export const GET_LOCATIONS = gql`
  query getLocations($page: Int!) {
    locations(page: $page) {
      info {
        pages
        next
        prev
      }
      results {
        id
        name
        type
      }
    }
  }
`;

export const GET_LOCATION = gql`
  query getLocation($id: ID!) {
    location(id: $id) {
      id
      name
      type
      dimension
      residents {
        id
        name
        image
      }
    }
  }
`;