window.PhotoIndexItem = React.createClass({
  mixins: [ReactRouter.History],
  showDetail: function () {
    this.history.pushState(null, '/photo/' + this.props.photo.id, {});
  },

  _manipulateImage: function(url) {
    var regexp = /\/upload\//;
    var manipulation = "h_250\/";
    return url.replace(regexp, "$&" + manipulation);
  },

  render: function () {
    var indexItemImageUrl = this._manipulateImage(this.props.photo.image_url);
    return(
      <li onClick={this.showDetail} className="photo-index-item">
        <img
          src={indexItemImageUrl}
        />
      </li>
    );
  }
});
