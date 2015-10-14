(function () {
  var PHOTOS_INDEX_CHANGE_EVENT = "photosIndexChange";
  var PHOTO_DETAIL_CHANGE_EVENT = "photoDetailChange";

  var _photos = [];

  var resetPhotos = function (photos) {
    _photos = photos;
  };

  var resetPhoto = function (photo) {
    var switched = false;
    _photos.forEach(function (p) {
      if(p.id === photo.id) {
        _photos[_photos.indexOf(p)] = photo;
        switched = true;
      }
    });
    if(!switched) { _photos.push(photo); }
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
      }
    })
  });
 })();