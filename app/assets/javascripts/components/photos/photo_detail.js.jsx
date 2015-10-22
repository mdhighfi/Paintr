var PhotoDetail = React.createClass({
  mixins: [ReactRouter.History],
  getInitialState: function() {
    return { photo: this.foundPhoto(), editing: '' }
  },

  _editCallback: function(photo){
    this.setState({ editing: photo.image_url });
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
    ApiUtil.deletePhoto(this.state.photo);
  },

  componentDidMount: function () {
    window.scroll(0,0);
    PhotoStore.addPhotosIndexChangeListener(this._onChange);
    PhotoStore.addPhotoDetailChangeListener(this._onChange);
    PhotoStore.addPhotoDeleteChangeListener(this._onDelete);
    ApiUtil.fetchAllPhotos();
  },

  compomentWillUnmount: function () {
    PhotoStore.removePhotosIndexChangeListener(this._onChange);
    PhotoStore.removePhotoDetailChangeListener(this._onChange);
    PhotoStore.removePhotoDeleteChangeListener(this._onDelete);
  },

  removeModal: function () {
    this.setState({ editing: ''});
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
    var form;
    if (this.state.editing !== '') {
      // form = <PhotoForm imageUrl={this.state.editing} removeModal={this.removeModal} editing={true} />;
      form = <PhotoForm photo={this.state.photo} imageUrl={this.state.editing} removeModal={this.removeModal} editing={true}/>
    } else {
      form = '';
    }
    return(
      <div>
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
            <h3>
              <a id="photo-edit" onClick={this._editCallback.bind(this, currentPhoto)}>
                <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
              </a>
              <a href={currentPhoto.image_url} download={currentPhoto.title} id="photo-download">
                <span className="glyphicon glyphicon-download" aria-hidden="true"></span>
              </a>
              <a href="#" id="photo-delete" onClick={this._deleteCallback}>
                <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
              </a>
            </h3>
          </div>
        </div>
      {form}
      </div>
    );
  }
});
