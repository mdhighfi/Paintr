(function () {
  var ALBUMS_INDEX_CHANGE_EVENT = "albumsIndexChange";
  var ALBUM_DETAIL_CHANGE_EVENT = "albumDetailChange";
  var ALBUM_DELETE_CHANGE_EVENT = "albumDeleteChange";

  var _albums = [];
  var _activeAlbum = {};

  var resetAlbums = function (albums) {
    _albums = albums;
  };

  var resetAlbum = function (album) {
    // var changed = false;
    _albums.forEach(function (al) {
      debugger;
      if(al.id === album.id) {
        // _albums[_albums.indexOf(al)] = album;
        _activeAlbum = { album: album}
        // changed = true;
      }
    });
    debugger;
    // if(!changed) { _albums.push(album); }
  };

  var deleteAlbum = function (album) {
    _albums.forEach(function (p) {
      if(p.id === album.id) {
        _albums.splice(_albums.indexOf(p), 1);
      }
    });
  };

  var editAlbum = function (album) {
    _albums.forEach(function (p) {
      if(p.id === album.id) {
        _albums[_albums.indexOf(p)] = album;
      }
    });
  };

  window.AlbumStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _albums.slice();
    },

    find: function (id) {
      var album;
      _albums.forEach(function(p) {
        if(p.id === id) { album = p; }
      })

      return album;
    },

    // setActiveAlbum: function(id) {
    //   _activeAlbum = { album: this.find(id) }
    // },
    //
    getActiveAlbum: function() {
      debugger;
      return _activeAlbum.album
    },

    addAlbumDetailChangeListener: function (callback) {
      this.on(ALBUM_DETAIL_CHANGE_EVENT, callback);
    },

    removeAlbumDetailChangeListener: function (callback) {
      this.removeListener(ALBUM_DETAIL_CHANGE_EVENT, callback);
    },

    addAlbumDeleteChangeListener: function (callback) {
      this.on(ALBUM_DELETE_CHANGE_EVENT, callback);
    },

    removeAlbumDeleteChangeListener: function (callback) {
      this.removeListener(ALBUM_DELETE_CHANGE_EVENT, callback);
    },

    addAlbumsIndexChangeListener: function (callback) {
      this.on(ALBUMS_INDEX_CHANGE_EVENT, callback);
    },

    removeAlbumsIndexChangeListener: function (callback) {
      this.removeListener(ALBUMS_INDEX_CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function (payload) {
      switch(payload.actionType) {
        case AlbumConstants.ALBUMS_RECEIVED:
          resetAlbums(payload.albums);
          AlbumStore.emit(ALBUMS_INDEX_CHANGE_EVENT);
          break;
        case AlbumConstants.ALBUM_RECEIVED:
          resetAlbum(payload.album);
          AlbumStore.emit(ALBUM_DETAIL_CHANGE_EVENT);
          break;
        case AlbumConstants.ALBUM_DELETED:
          deleteAlbum(payload.album);
          AlbumStore.emit(ALBUM_DELETE_CHANGE_EVENT);
          break;
      }
    })
  });
 })();
