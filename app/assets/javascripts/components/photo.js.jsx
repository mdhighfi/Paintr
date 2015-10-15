var PhotoDetail = React.createClass({
  foundPhoto: function(){

    var found = {};
    PhotoStore.all().forEach(function(photo){
      if (photo.id === parseInt(this.props.params.photoId)) {
        found = photo;
      }
    }.bind(this));
    return found
  },
  render: function () {
    return(
      <div>
        <p><img src={this.foundPhoto().image_url} width="800" /></p>
        <p>Title: {this.foundPhoto().title}</p>
        <p>Description: {this.foundPhoto().description}</p>
        <p><em>{this.foundPhoto().medium} on {this.foundPhoto().surface}</em></p>
      </div>
    );
  }
});
