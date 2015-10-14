var Navbar = React.createClass({
  render: function(){
    return (
      <nav className="navbar navbar-default">
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
            <ul className="nav navbar-nav navbar-right">
              <li>
                <form className="navbar-form" role="search">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="tag, artist, medium"/>
                  </div>
                  <button type="submit" className="btn btn-default">Search</button>
                </form>
              </li>
              <li><a href="#">Upload</a></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{window.CURRENT_USERNAME}<span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="#">My Photos</a></li>
                  <li><a href="#">My Albums</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#" onClick={window.ApiUtil.signOut}>Sign Out</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
});
