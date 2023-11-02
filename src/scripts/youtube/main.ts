import { type YouTubeAppInfo } from '../interfaces'
import onWatchPage from './routeType/watch/main'
import onPlaylistPage from './routeType/playlist/main'
import addPlaylistRuntime from './routeType/watch/addPlaylistRuntime'
import loadElement from '../lib/loadElement'

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
    const metadataActionBar = await loadElement('.metadata-action-bar', 10000, 500)
    if (metadataActionBar !== null) {
      await addPlaylistRuntime(contentId)
    }
  
  } else if (routeType === 'playlist' && playlistEnabled) {
    await onPlaylistPage(contentId)
  } 
}


export default onYouTubeLoaded


