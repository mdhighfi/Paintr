$(function () {
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;

  var rootEl = document.getElementById('content');
  var routes = (
    <Route path="/" component={App}>
      <IndexRoute component={PhotosIndex}>
      </IndexRoute>
      <Route path="photos/:photoId" component={PhotoDetail} />
    </Route>
  );
// PhotosIndex
  React.render(<Router>{routes}</Router>, rootEl);
});
