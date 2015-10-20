var PhotoForm = React.createClass({
  mixins: [React.addons.LinkedStateMixin, ReactRouter.History],

  blankAttrs: {
    title: '',
    description: '',
    medium: '',
    surface: '',
  },

  getInitialState: function () {
    return this.blankAttrs;
  },

  _manipulateImage: function(url) {
    var regexp = /\/upload\//;
    var manipulation = "h_100\/";
    return url.replace(regexp, "$&" + manipulation);
  },

  createPhoto: function (event) {
    event.preventDefault();
    ApiUtil.createPhoto({
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
    var imageUrl = this._manipulateImage(this.props.imageUrl);
    return(
      <div id="uploadModal" className="modal is-active">
      <div className="modal-screen js-hide-modal" onClick={this.props.removeModal}></div>
        <div className='modal-content'>
          <span className="modal-close js-hide-modal" onClick={this.props.removeModal}>&times;</span>
          <h2>Describe This Piece</h2>
          <img className="photo-upload-item" src={imageUrl}/>
          <form onSubmit={this.createPhoto}>
            <div>
              <input
                className="form-control"
                type='text'
                id='photo_title'
                placeholder='*title'
                valueLink={this.linkState("title")}
              />
            </div>

            <div>
              <input
                className="form-control"
                type='text'
                id='photo_description'
                placeholder='description (optional)'
                valueLink={this.linkState("description")}
              />
            </div>

            <div className="selectors">
              <select
                className="form-control"
                defaultValue=''
                valueLink={this.linkState("medium")}
              >
                <option value="" disabled>*medium</option>
                <option value="oil">Oil</option>
                <option value="acrylic">Acrylic</option>
                <option value="watercolor">Watercolor</option>
                <option value="gouache">Gouache</option>
              </select>

              <select
                className="form-control"
                defaultValue=''
                valueLink={this.linkState("surface")}
              >
                <option value="" disabled>*surface</option>
                <option value="canvas">Canvas</option>
                <option value="paper">Paper</option>
                <option value="wood">Wood</option>
                <option value="metal">Metal</option>
                <option value="marble">Marble</option>
              </select>
            </div>

            <div>
            <button className="btn btn-primary">Create Photo</button>
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
