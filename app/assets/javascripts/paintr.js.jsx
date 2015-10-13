$(function () {
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;

  var rootEl = document.getElementById('content');

  React.render((
    <Router>
      <Route path="/" component={Index}>
        <Route path="user/:userId" component={UserDetail} />
        <Route
          path="user/:userId/photos/:photoId"
          components={{photo: PhotoDetail}}/>
      </Route>
    </Router>
  ), rootEl);
});
