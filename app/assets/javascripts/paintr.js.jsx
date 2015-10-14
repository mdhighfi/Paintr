$(function () {
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;

  var rootEl = document.getElementById('content');

  React.render((
    <Router>
      <Route path="/" component={App}>
        <Route path="photos/" component={IndexRoute}></Route>
        <Route
          path="user/:userId/photos/:photoId"
          components={{photo: PhotoDetail}}/>
      </Route>
    </Router>
  ), rootEl);
});
