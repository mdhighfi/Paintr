window.PhotosIndex = React.createClass({
  getInitialState: function () {
    return { photos: PhotoStore.all() };
  },

  _onChange: function () {
    this.setState({ photos: PhotoStore.all() });
  },

  componentDidMount: function () {
    PhotoStore.addPhotosIndexChangeListener(this._onChange);
    PhotoStore.addPhotoDetailChangeListener(this._onChange);
    ApiUtil.fetchAllPhotos();
  },

  compomentWillUnmount: function () {
    PhotoStore.removePhotosIndexChangeListener(this._onChange);
    PhotoStore.removePhotoDetailChangeListener(this._onChange);
  },

  render: function () {
    return(
      <div>
        <ul className="index-list">
          {this.state.photos.map(function (photo) {
            return <PhotoIndexItem key={photo.id} photo={photo} />;
          })}
        </ul>
      </div>
    );
  }
})
