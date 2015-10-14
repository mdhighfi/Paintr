window.ApiUtil = {
  signOut: function(){
    $.ajax({
      url: "session",
      method: "DELETE",
      success: function() {
        console.log("signed out");
        window.location = "/";
      }
    });
  },

  fetchAllPhotos: function () {
    $.ajax({
      url: "api/photos",
      success: function (photos) {
        ApiActions.receiveAllPhotos(photos);
      }
    })
  },

  fetchSinglePhoto: function (id) {
    $.ajax({
      url: "api/photos/" + id,
      success: function (photo) {
        ApiActions.receiveSinglePhoto(photo);
      }
    })
  },

  createPhoto: function (photo, callback) {
    $.ajax({
      url: "api/photo",
      method: "POST",
      data: {photo: photo},
      success: function (photo) {
        ApiActions.receiveSinglePhoto(photo);
        callback && callback(photo.id);
      }
    })
  }
}