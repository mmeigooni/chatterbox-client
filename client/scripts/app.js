var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      var messages = data.results;
      for (var i = 0; i < messages.length; i++) {
        console.log(`username should be: ${username}`);

        var message = DOMPurify.sanitize(messages[i].text).trim();
        if (message.length === 0) {
          message = '[no message text]';
        }

        var username = DOMPurify.sanitize(messages[i].username).trim();
        if (username.length === 0) {
          username = '[no username]';
        }
        MessagesView.render(username, message);
      }
      //MesaagesView.render
      console.log(data);

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
