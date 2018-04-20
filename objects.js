var playlist = { taylorSwift:"Love Story"}
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}
removeFromPlaylist(playlist, artistName) {delete playlist.artistName}
