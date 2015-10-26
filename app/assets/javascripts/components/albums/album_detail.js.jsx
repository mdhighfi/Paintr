var AlbumDetail = React.createClass({
  getInitialState: function() {
    return { album: null, editing: '', deleting: '' }
  },

  foundAlbum: function(){
    var found = {};
    AlbumStore.all().forEach(function(album){
      if (album.id === parseInt(this.props.params.albumId)) {
        found = album;
      }
    }.bind(this));
    return found
  },

  _onChange: function() {
    this.setState({ album: AlbumStore.getActiveAlbum() });
  },

  componentDidMount: function() {
    AlbumStore.addAlbumDetailChangeListener(this._onChange);
    ApiUtil.fetchSingleAlbum(this.props.params.albumId);
  },

  componentWillUnmount: function () {
    AlbumStore.removeAlbumDetailChangeListener(this._onChange);
  },

  _updateAlbum: function() {
    this.setState({album: AlbumStore.activeAlbum()});
  },

  _manipulateImage: function(url) {
    var regexp = /\/upload\//;
    var manipulation = "h_300\/";
    return url.replace(regexp, "$&" + manipulation);
  },

  render: function() {
    var currentAlbum = this.state.album;
    debugger;

    var albumShow;
    if (!currentAlbum) {
      albumShow = <div></div>;
    } else {
      albumShow = currentAlbum.photos.map(function (photo) {
        return <PhotoIndexItem key={photo.id} photo={photo} />;
      });
    }
    return (
      <div>
        <h2>{currentAlbum.title}</h2>
        <div>
          <ul className="album-photo-list">
            {albumShow}
          </ul>
        </div>
      </div>
    );
  }
});
// <h4>{desc}</h4>
