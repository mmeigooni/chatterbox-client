var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function(username, message) {
    var renderMessage = MessageView.render({username: username, message: message});
    this.$chats.append(renderMessage);
  }

};