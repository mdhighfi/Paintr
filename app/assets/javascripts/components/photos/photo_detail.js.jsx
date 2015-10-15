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
    var desc = '';
    if (typeof currentPhoto.description === 'string') {
      desc = <li>Description: {currentPhoto.description}</li>;
    }
    return(
      <div className="photo-detail">
        <p><img src={this.foundPhoto().image_url} /></p>
          <ul>
            <li>Title: {this.state.photo.title}</li>
            {desc}
            <li><em>{this.state.photo.medium} on {this.state.photo.surface}</em></li>
          </ul>
      </div>
    );
  }
});
