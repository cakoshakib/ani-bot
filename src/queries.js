const { gql } = require('graphql-request')


module.exports = { 
  GET_USERINFO: gql`
  query ($name: String) {
    User (name: $name) {
      siteUrl
      name
      id
      statistics {
        anime {
          minutesWatched
          meanScore
          count
          episodesWatched
        }
      }
      avatar {
        large
        medium
      }
    }
  }
  `,
  GET_ACTIVITY: gql`
  query ($userId: Int) {
    Page (page: 1, perPage: 5) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      activities(userId: $userId, type: ANIME_LIST, sort: ID_DESC) {
        ...on ListActivity {
          id
          status
          progress
          media {
            title {
              romaji
            }
          }
        }
      }
    }
  }
  `,
  GET_MEDIALIST: gql`
  query ($userName: String, $mediaId: Int) {
    MediaList(userName: $userName, mediaId: $mediaId) {
      progress
      media {
        id
        title {
          romaji
        }
        episodes
      }
    }
  }
  `,
  GET_MEDIA: gql`
  query($search: String) {
    Media(search: $search, type: ANIME) {
      title {
        romaji
      }
      id
      episodes
      bannerImage
      coverImage {
        medium
        large
        extraLarge
      }
    }
  }
  `
}