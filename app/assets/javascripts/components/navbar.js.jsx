var Navbar = React.createClass({
  mixins: [ReactRouter.History],
  getInitialState: function() {
    return { uploading: '', creatingAlbum: false };
  },

  _uploadCallback: function(){
    cloudinary.openUploadWidget({
      cloud_name: 'paintr',
      upload_preset: 'npkae9ay',
      theme: 'minimal',
    },
    function(error, result) {
      console.log(error, result);
      this.history.pushState(null, 'upload');
      this.setState({ uploading: result[0].url });
    }.bind(this));
  },

  _createAlbumCallback: function(){
    this.setState({ creatingAlbum: true });
  },

  _viewAlbumsCallback: function(){
    this.history.pushState(null, 'albums/');
  },

  _viewPaintingsCallback: function(){
    this.history.pushState(null, '/' );
  },

  removeModal: function () {
    this.setState({ uploading: '', creatingAlbum: false });
  },

  render: function(){
    var form = '';
    if (this.state.uploading !== '') {
      form = <PhotoForm imageUrl={this.state.uploading} removeModal={this.removeModal} editing={false}/>;
    }
    if (this.state.creatingAlbum) {
      form = <AlbumForm removeModal={this.removeModal} />;
    }
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <div className="paintr-title nav-title">
                <img src="http://res.cloudinary.com/paintr/image/upload/h_60/v1445907252/paintr_logo_qczqyp.png" />Paintr
              </div>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><a href="#">You <span className="sr-only">(current)</span></a></li>
                <li><a href="#">Explore</a></li>

              </ul>
              <div className="nav navbar-nav navbar-right">
                <li><h3><a onClick={this._uploadCallback} id="upload_widget_opener"><span className="glyphicon glyphicon-upload" aria-hidden="true"></span></a></h3></li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{window.CURRENT_USERNAME}<span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a onClick={this._viewPaintingsCallback} id="paintings-index-opener">My Paintings</a></li>
                    <li><a onClick={this._viewAlbumsCallback} id="album-index-opener">My Albums</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a onClick={this._createAlbumCallback} id="album-form-opener">Create Album</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#" onClick={window.ApiUtil.signOut}>Sign Out</a></li>
                  </ul>
                </li>
              </div>
            </div>
          </div>
        </nav>
        {form}
      </div>
    );
  }
});
