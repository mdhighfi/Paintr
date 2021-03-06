$(function () {
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;

  var rootEl = document.getElementById('content');
  var routes = (
    <Route path="/" component={App}>
      <IndexRoute component={PhotosIndex}/>
      <Route path="photo/:photoId" component={PhotoDetail} />
      <Route path="albums/" component={AlbumsIndex} />
      <Route path="album/:albumId" component={AlbumDetail} />
    </Route>
  );
  if (rootEl) {
    React.render(<Router>{routes}</Router>, rootEl);
  }
});
