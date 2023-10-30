import { type YouTubeAppInfo } from '../../../common/interfaces'
import onWatchPage from './routes/watch'
import onPlaylistPage from './routes/playlist'

let playlistEnabled: boolean
let watchEnabled: boolean

chrome.storage.sync.get(['playlistEnabled', 'watchEnabled'], (storage) => {
  playlistEnabled = storage.playlistEnabled
  watchEnabled = storage.watchEnabled
})

const onYouTubeLoaded = async (youtubeAppInfo: YouTubeAppInfo): Promise<void> => {
  const { routeType, contentId } = youtubeAppInfo.details
  if (routeType === 'watch' && watchEnabled) {
    await onWatchPage(contentId)
  } else if (routeType === 'playlist' && playlistEnabled) {
    await onPlaylistPage(contentId)
  }
}

export default onYouTubeLoaded