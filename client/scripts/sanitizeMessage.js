var sanitizeMessage = function (dirtyMessage) {
  var cleanMessage = {};
  var cleanText = DOMPurify.sanitize(dirtyMessage.text).trim();
  if (cleanText.length === 0) {
    cleanText = '[no message text]';
  }

  var cleanUsername = DOMPurify.sanitize(dirtyMessage.username).trim();
  if (cleanUsername.length === 0) {
    cleanUsername = '[no username]';
  }

  var cleanRoomname = DOMPurify.sanitize(dirtyMessage.roomname).trim();
  if (cleanRoomname.length === 0) {
    cleanRoomname = '[no roomname]';
  }

  cleanMessage.text = cleanText;
  cleanMessage.username = cleanUsername;
  cleanMessage.roomname = cleanRoomname;
  return cleanMessage;
};