var AlbumForm = React.createClass({
  mixins: [React.addons.LinkedStateMixin, ReactRouter.History],

  blankAttrs: {
    title: '',
    description: '',
  },

  getInitialState: function () {
    return this.blankAttrs;
  },

  createAlbum: function (e) {
    e.preventDefault();
    ApiUtil.createAlbum({
      image_url: this.props.imageUrl,
      title: this.state.title,
      description: this.state.description,
      medium: this.state.medium,
      surface: this.state.surface,
    });
    this.setState(this.blankAttrs);
    this.props.removeModal();
  },

  editAlbum: function (e) {
    e.preventDefault();
    ApiUtil.editAlbum({
      id: this.props.album.id,
      image_url: this.props.imageUrl,
      title: this.state.title,
      description: this.state.description,
      medium: this.state.medium,
      surface: this.state.surface,
    });
    this.setState(this.blankAttrs);
    this.props.removeModal();
  },

  render: function () {
    // var imageUrl = this._manipulateImage(this.props.imageUrl);
    var createOrEdit;
    if (this.props.editing) {
      createOrEdit = this.editAlbum.bind(this);
      buttonText = "Save Changes"
    } else {
      createOrEdit = this.createAlbum.bind(this);
      buttonText = "Create Album"
    }
    return(
      <div id="albumModal" className="modal is-active">
      <div className="modal-screen js-hide-modal" onClick={this.props.removeModal}></div>
        <div className='modal-content'>
          <span className="modal-close js-hide-modal" onClick={this.props.removeModal}>&times;</span>
          <h2>Describe This Album</h2>
          <form onSubmit={createOrEdit}>
            <div>
              <input
                className="form-control"
                type='text'
                id='album_title'
                placeholder='*title'
                valueLink={this.linkState("title")}
              />
            </div>

            <div>
              <input
                className="form-control"
                type='text'
                id='album_description'
                placeholder='description (optional)'
                valueLink={this.linkState("description")}
              />
            </div>

            <div>
            <button className="btn btn-primary">{buttonText}</button>
            </div>

            <div className="form-footer">
            <h6><em>* required field</em></h6>
            </div>

            <br />
          </form>
        </div>
      </div>
    );
  }
});
