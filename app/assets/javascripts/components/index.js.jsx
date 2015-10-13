window.Index = React.createClass({
  render: function () {
    return(
      <div>
        <div>
          <Navbar/>
        </div>
        {this.props.children}
      </div>
    );
  }
});
