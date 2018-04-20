var playlist = { taylorSwift:"Love Story"}
function updatePlaylist(playlist,artistName,songTitle) {
  return Object.assign({}, playlist, {artistName:songTitle})
}
