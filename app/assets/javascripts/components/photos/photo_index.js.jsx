window.PhotosIndex = React.createClass({
  getInitialState: function () {
    return { photos: PhotoStore.all(), currentUserId: CURRENT_USER_ID };
  },

  _onChange: function () {
    this.setState({ photos: PhotoStore.all(), currentUserId: CURRENT_USER_ID });
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
      <ul>
        {this.state.photos.map(function (photo) {
          return <PhotoIndexItem key={photo.id} photo={photo} />;
        })}
      </ul>
    );
  }
})
