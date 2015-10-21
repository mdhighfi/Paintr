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

  _onDelete: function() {
    this.setState({ photo: {} })
  },

  _manipulateImage: function(url) {
    var regexp = /\/upload\//;
    var manipulation = "h_1000\/";
    return url.replace(regexp, "$&" + manipulation);
  },

  _deleteCallback: function() {
    console.log('delete clicked');
    ApiUtil.deletePhoto(this.state.photo);
  },

  componentDidMount: function () {
    window.scroll(0,0);
    PhotoStore.addPhotosIndexChangeListener(this._onChange);
    PhotoStore.addPhotoDetailChangeListener(this._onChange);
    PhotoStore.addPhotoDeleteChangeListener(this._onDelete);
    document.getElementById("photo-edit").addEventListener("click", this._editCallback, false);
    document.getElementById("photo-download").addEventListener("click", this._downloadCallback, false);
    document.getElementById("photo-delete").addEventListener("click", this._deleteCallback, false);
    ApiUtil.fetchAllPhotos();
  },

  compomentWillUnmount: function () {
    PhotoStore.removePhotosIndexChangeListener(this._onChange);
    PhotoStore.removePhotoDetailChangeListener(this._onChange);
    PhotoStore.removePhotoDeleteChangeListener(this._onDelete);
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
        <div className="photo-detail-background"></div>
        <div className="photo-centered">
            <img src={detailUrl} />
            <div>
              <li><h4>Title: {currentPhoto.title}</h4></li>
              {desc}
              <li><em>{currentPhoto.medium} on {currentPhoto.surface}</em></li>
            </div>
        </div>
        <div className="photo-detail-footer">
          <h4>
            <a href="#" id="photo-edit">
              <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
            </a>
            <a href={currentPhoto.image_url} download={currentPhoto.title} id="photo-download">
              <span className="glyphicon glyphicon-download" aria-hidden="true"></span>
            </a>
            <a href="#" id="photo-delete">
              <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
            </a>
          </h4>
        </div>
      </div>
    );
  }
});
