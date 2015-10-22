# Paintr

[Heroku link][heroku]

[heroku]: https://paintr-pics.herokuapp.com/

## Minimum Viable Product

Paintr is a web application inspired by Flickr built using Ruby on Rails and React.js. Paintr allows users to:

- [X] Create an account
- [X] Log in / Log out
- [X] Upload, view, delete photos, and edit info for photos
- [ ] Create, view, edit, and delete albums
- [ ] Tag photos with multiple tags
- [ ] Search your own photos by tag, or medium
- [ ] Search all users photos by tag, artist, or medium
- [ ] Comment on photos.

## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Photo Model and JSON API (1.5 days)

In Phase 1, I will begin by implementing user signup and authentication (using
BCrypt). There will be a basic landing page after signup that will contain the
container for the application's root React component. Before building out the
front end, I will begin by setting up a full JSON API for Photos.

[Details][phase-one]

### Phase 2: Flux Architecture and Photo CRUD (2.5 days)

Phase 2 is focused on setting up Flux, the React Router, and the React view
structure for the main application. After the basic Flux architecture has been
set up, a Photo store will be implemented and a set of actions corresponding to
the needed CRUD functionality created. Once this is done, I will create React
views for the Photos `Index`, `IndexItem` and `Form`. At the end of Phase 2,
Photos can be created, read, edited and destroyed in the browser. Lastly, while constructing the views I will start using basic bootstrap for styling.

[Details][phase-two]

### Phase 3: Albums and Tags (2.5 days)

Phase 3 adds organization to the Photos. Photos belong to an Album, which has
its own `Index` view. Create JSON API for Albums. Photos can also now be
tagged with multiple tags. Users can bring up photos in a separate `SearchIndex`
view by searching for their tags. Once the tag search is implemented, I will
extend this to searching for other users tags. I will then add the ability to search by medium (your photos and other users photos) or artist (other users).

[Details][phase-three]

### Phase 4: Comments (1 day)

Add the ability to make comments on both your own and on other user's photos.

[Details][phase-four]

### Phase 5: Styling Cleanup and Seeding (1.5 days)

Bootstrap will have been used to keep things organized up until now, but in
Phase 5 I will add more custom styling.

### Bonus Features (TBD)

#### Album Bonuses
- [ ] Photos can be arranged in different orders within albums
- [ ] Users can make comments on albums
- [ ] Ask if users want to delete all associated photos from albums when deleting an album

#### User Bonuses
- [ ] Users can follow and unfollow other users
- [ ] Create artist profiles where a user can describe their work, influences, favorite mediums, etc.

#### Photo Bonuses
- [ ] Mark whether a painting is for sale
- [ ] Create an option for private photos that are not visible to other users
- [ ] Add the ability to drag and drop photos in to upload

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
