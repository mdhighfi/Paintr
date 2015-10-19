var PhotoDetail = React.createClass({
  getInitialState: function() {
    return { photo: this.foundPhoto() }
  },

  foundPhoto: function(){
    var found = {};
    PhotoStore.all().forEach(function(photo){
      if (photo.id === parseInt(this.props.params.photoId)) {
        found = photo;
      }
    }.bind(this));
    return found
  },

  _onChange: function() {
    this.setState({ photo: this.foundPhoto() })
  },

  _manipulateImage: function(url) {
    var regexp = /\/upload\//; // everything after the last slash
    var manipulation = "h_1000\/";
    return url.replace(regexp, "$&" + manipulation);
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
    var currentPhoto = this.state.photo;
    var detailUrl = '';
    if (typeof currentPhoto.image_url !== 'undefined') {
      detailUrl = this._manipulateImage(currentPhoto.image_url);
    }
    var desc = '';
    if (typeof currentPhoto.description === 'string') {
      desc = <li><h4>Description: {currentPhoto.description}</h4></li>;
    }
    return(
      <div className="photo-detail">
        <p><img src={detailUrl} /></p>
          <ul>
            <li><h4>Title: {currentPhoto.title}</h4></li>
            {desc}
            <li><em>{currentPhoto.medium} on {currentPhoto.surface}</em></li>
          </ul>
      </div>
    );
  }
});
