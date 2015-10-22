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
        ApiActions.deleteSinglePhoto(response);
      }
    })
  },

  editPhoto: function (photo) {
    $.ajax({
      url: "api/photos/" + photo.id,
      method: "PATCH",
      data: {photo: photo},
      success: function (response) {
        ApiActions.receiveSinglePhoto(response);
      }
    })
  },

  fetchAllAlbums: function() {
    $.ajax({
      url: "api/albums",
      success: function (albums) {
        ApiActions.receiveAllAlbums(albums);
      }
    })
  },

  fetchSingleAlbum: function(id) {
    $.ajax({
      url: "api/albums/" + id,
      success: function (album) {
        ApiActions.receiveSingleAlbum(album);
      }
    })
  },

  createAlbum: function(album) {
    $.ajax({
      url: "api/albums",
      method: "POST",
      data: {album: album},
      success: function (response) {
        ApiActions.receiveSingleAlbum(response);
      }
    })
  },

  editAlbum: function(album) {
    $.ajax({
      url: "api/album/" + album.id,
      method: "PATCH",
      data: {album: album},
      success: function (response) {
        ApiActions.receiveSingleAlbum(response);
      }
    })
  },

  deleteAlbum: function(album) {
    $.ajax({
      url: "api/albums/" + album.id,
      method: "DELETE",
      success: function (response) {
        ApiActions.deleteSingleAlbum(response);
      }
    })
  }
}
