window.App = React.createClass({
  render: function () {
    return(
      <div>
        <div className="extra-margin-bottom">
          <Navbar/>
        </div>
        {this.props.children}
      </div>
    );
  }
});
