(function () {
  var PHOTOS_INDEX_CHANGE_EVENT = "photosIndexChange";
  var PHOTO_DETAIL_CHANGE_EVENT = "photoDetailChange";
  var PHOTO_DELETE_CHANGE_EVENT = "photoDeleteChange";

  var _photos = [];

  var resetPhotos = function (photos) {
    _photos = photos;
  };

  var resetPhoto = function (photo) {
    var changed = false;
    _photos.forEach(function (p) {
      if(p.id === photo.id) {
        _photos[_photos.indexOf(p)] = photo;
        changed = true;
      }
    });
    if(!changed) { _photos.push(photo); }
  };

  var deletePhoto = function (photo) {
    _photos.forEach(function (p) {
      if(p.id === photo.id) {
        _photos.splice(_photos.indexOf(p), 1);
      }
    });
  };

  window.PhotoStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _photos.slice();
    },

    find: function (id) {
      var photo;
      _photos.forEach(function(p) {
        if(p.id === id) { photo = p; }
      })

      return photo;
    },

    addPhotoDetailChangeListener: function (callback) {
      this.on(PHOTO_DETAIL_CHANGE_EVENT, callback);
    },

    removePhotoDetailChangeListener: function (callback) {
      this.removeListener(PHOTO_DETAIL_CHANGE_EVENT, callback);
    },

    addPhotoDeleteChangeListener: function (callback) {
      this.on(PHOTO_DELETE_CHANGE_EVENT, callback);
    },

    removePhotoDeleteChangeListener: function (callback) {
      this.removeListener(PHOTO_DELETE_CHANGE_EVENT, callback);
    },

    addPhotosIndexChangeListener: function (callback) {
      this.on(PHOTOS_INDEX_CHANGE_EVENT, callback);
    },

    removePhotosIndexChangeListener: function (callback) {
      this.removeListener(PHOTOS_INDEX_CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function (payload) {
      switch(payload.actionType) {
        case PhotoConstants.PHOTOS_RECEIVED:
          resetPhotos(payload.photos);
          PhotoStore.emit(PHOTOS_INDEX_CHANGE_EVENT);
          break;
        case PhotoConstants.PHOTO_RECEIVED:
          resetPhoto(payload.photo);
          PhotoStore.emit(PHOTO_DETAIL_CHANGE_EVENT);
          break;
        case PhotoConstants.PHOTO_DELETED:
          deletePhoto(payload.photo);
          PhotoStore.emit(PHOTO_DELETE_CHANGE_EVENT);
          break;
      }
    })
  });
 })();
