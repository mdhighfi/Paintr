var Navbar = React.createClass({
  mixins: [ReactRouter.History],
  getInitialState: function() {
    return { uploading: '' };
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

  componentDidMount: function() {
    document.getElementById("upload_widget_opener").addEventListener("click", this._uploadCallback, false);
  },

  componentWillUnmount: function() {
    document.getElementById("upload_widget_opener").removeEventListener("click", this._uploadCallback, false);
  },

  removeModal: function () {
    this.setState({ uploading: ''});
  },

  render: function(){
    var form;
    if (this.state.uploading !== '') {
      form = <PhotoForm imageUrl={this.state.uploading} removeModal={this.removeModal} editing={false}/>;
    } else {
      form = '';
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
              <a className="navbar-brand" href="#">Paintr</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li className="active"><a href="#">You <span className="sr-only">(current)</span></a></li>
                <li><a href="#">Explore</a></li>

              </ul>
              <div className="nav navbar-nav navbar-right">
                <li>
                  <form className="navbar-form" role="search">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="tag, artist, medium"/>
                    </div>
                    <button type="submit" className="btn btn-default">Search</button>
                  </form>
                </li>
                <li><h3><a href="#" id="upload_widget_opener"><span className="glyphicon glyphicon-upload" aria-hidden="true"></span></a></h3></li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{window.CURRENT_USERNAME}<span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="#">My Photos</a></li>
                    <li><a href="#">My Albums</a></li>
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
