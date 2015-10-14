var SessionUtil = {
  signOut: function(){
    $.ajax({
      url: "session",
      type: "DELETE",
      success: function() {
        console.log('signed out');
        window.location = '/';
      }
    })
  }
};
