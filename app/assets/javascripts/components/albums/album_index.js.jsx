window.AlbumsIndex = React.createClass({
  getInitialState: function () {
    return { albums: AlbumStore.all() };
  },

  _onChange: function () {
    this.setState({ albums: AlbumStore.all() });
  },

  componentDidMount: function () {
    AlbumStore.addAlbumsIndexChangeListener(this._onChange);
    AlbumStore.addAlbumDetailChangeListener(this._onChange);
    ApiUtil.fetchAllAlbums();
  },

  compomentWillUnmount: function () {
    AlbumStore.removeAlbumsIndexChangeListener(this._onChange);
    AlbumStore.removeAlbumDetailChangeListener(this._onChange);
  },

  render: function () {
    return(
      <div>
        <div className="paintr-title">
          <h4>Your Albums</h4>
        </div>
        <ul className="index-list">
          {this.state.albums.map(function (album) {
            return <AlbumIndexItem key={album.id} album={album} />;
          })}
        </ul>
      </div>
    );
  }
})
