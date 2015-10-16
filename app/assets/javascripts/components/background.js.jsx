var BackgroundStyle = React.createClass({
  render: function() {
    var divStyle = {
      backgroundColor: 'pink',
      // backgroundImage: 'url('starry_night_small.jpg')',
      // WebkitTransition: 'all', // note the capital 'W' here
      // msTransition: 'all' // 'ms' is the only lowercase vendor prefix
    };
    return <div style={divStyle}></div>;
  }
});
