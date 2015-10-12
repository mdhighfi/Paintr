# Phase 3: Albums and Tags (2 days)

## Rails
### Models
* Album
* Tag
* Tagging

### Controllers
* Api::NotebooksController (create, destroy, index, show, update)

### Views
* albums/index.json.jbuilder
* albums/show.json.jbuilder
* tags/show.json.jbuilder

## Flux
### Views (React Components)
* AlbumsIndex
  - AlbumIndexItem
* AlbumForm
* SearchIndex

### Stores
* Album

### Actions
* ApiActions.receiveAllAlbums
* ApiActions.receiveSingleAlbum
* ApiActions.deleteAlbum

### ApiUtil
* ApiUtil.fetchAllAlbums
* ApiUtil.fetchSingleAlbum
* ApiUtil.createAlbum
* ApiUtil.editAlbum
* ApiUtil.destroyAlbum

## Gems/Libraries
