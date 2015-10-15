window.PhotoForm = React.createClass({
  mixins: [React.addons.LinkedStateMixin, ReactRouter.History],

  blankAttrs: {
    title: '',
    image_url: '',
    description: '',
    medium: '',
    surface: '',
  },

  getInitialState: function () {
    return this.blankAttrs;
  },

  createPhoto: function (event) {
    event.preventDefault();
    ApiUtil.createPhoto({
      image_url: result[0].secure_url,
      title: 'new_image',
      description: 'this is a test',
      medium: 'watercolor',
      surface: 'paper',
    });
    this.setState(this.blankAttrs);
  },

  render: function () {
    return(
      <div className="photo-modal">
        <form className='new-photo' onSubmit={this.createPhoto}>
          <div>
            <label htmlFor='photo_title'>Title:</label>
            <input
              type='text'
              id='photo_title'
              valueLink={this.linkState("title")}
            />
          </div>

          <div>
            <label htmlFor='photo_image_url'>Image URL:</label>
            <input
              type='text'
              id='photo_image_url'
              valueLink={this.linkState("image_url")}
            />
          </div>

          <button>Create Photo</button>
          <br />
        </form>
      </div>
    );
  }
});
// window.showPhotoModal = function(){
//   React.render(<PhotoForm/>, document.getElementById('modal-root'));
// }
