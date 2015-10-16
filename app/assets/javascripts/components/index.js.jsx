window.App = React.createClass({
  render: function () {
    return(
      <div>
        <div className="extra-margin-bottom">
          <BackgroundStyle/>
          <Navbar/>
          <ModalTest/>
        </div>
        {this.props.children}
      </div>
    );
  }
});
