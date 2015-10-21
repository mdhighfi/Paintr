window.ApiUtil = {
  signOut: function(){
    $.ajax({
      url: "session",
      method: "DELETE",
      success: function() {
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

  createPhoto: function (photo) {
    $.ajax({
      url: "api/photos",
      method: "POST",
      data: {photo: photo},
      success: function (photo) {
        ApiActions.receiveSinglePhoto(photo);
      }
    })
  },

  deletePhoto: function (photo) {
    $.ajax({
      url: "api/photos/" + photo.id,
      method: "DELETE",
      success: function (response) {
        debugger
        ApiActions.deleteSinglePhoto(response);
      }
    })
  }
}
