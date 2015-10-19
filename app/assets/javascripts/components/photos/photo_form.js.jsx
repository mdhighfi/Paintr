var PhotoForm = React.createClass({
  mixins: [React.addons.LinkedStateMixin, ReactRouter.History],

  blankAttrs: {
    title: '',
    description: '',
    image_url: '',
    medium: '',
    surface: '',
  },

  getInitialState: function () {
    return this.blankAttrs;
  },

  createPhoto: function (event) {
    event.preventDefault();
    ApiUtil.createPhoto({
      image_url: result[0].secure_url, // this gets photo info from cloudinary
      title: 'new_image',
      description: 'this is a test',
      medium: 'watercolor',
      surface: 'paper',
    });
    this.setState(this.blankAttrs);
  },

  render: function () {
    return(
      // <ModalTest/>
      <div id="uploadModal" className="modal is-active">
      <div className="modal-screen js-hide-modal"></div>
        <div className='modal-content'>
          <span className="modal-close js-hide-modal">&times;</span>
          <h2>Describe This Piece</h2>
          <img className="photo-upload-item" src='http://res.cloudinary.com/paintr/image/upload/h_100/v1445212900/Red_vineyards_nkyswd.jpg'/>
          <form onSubmit={this.createPhoto}>
            <div>
              <input
                className="form-control"
                type='text'
                id='photo_title'
                placeholder='title'
                valueLink={this.linkState("title")}
              />
            </div>

            <div>
              <input
                className="form-control"
                type='text'
                id='photo_description'
                placeholder='description'
                valueLink={this.linkState("description")}
              />
            </div>

            <div className="selectors">
              <select className="form-control" defaultValue=''>
                <option value="" disabled>medium</option>
                <option value="oil">Oil</option>
                <option value="acrylic">Acrylic</option>
                <option value="watercolor">Watercolor</option>
                <option value="gouache">Gouache</option>
              </select>

              <select className="form-control" defaultValue=''>
                <option value="" disabled>surface</option>
                <option value="canvas">Canvas</option>
                <option value="paper">Paper</option>
                <option value="wood">Wood</option>
                <option value="metal">Metal</option>
                <option value="marble">Marble</option>
              </select>
            </div>

            <button className="btn btn-primary">Create Photo</button>

            <br />
          </form>
        </div>
      </div>
    );
  }
});

window.showPhotoModal = function(){
  React.render(<PhotoForm/>, document.getElementById('modal-root'));
}
