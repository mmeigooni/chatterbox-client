var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    // RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ( )=> {}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      var messages = data.results.reverse();
      Rooms.updateRooms(messages);
      for (var i = 0; i < messages.length; i++) {
        MessagesView.render(sanitizeMessage(messages[i]));
      }
      //MesaagesView.render
      // console.log(messages);

      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  },
};
