var Confirmation = React.createClass({
  mixins: [React.addons.LinkedStateMixin, ReactRouter.History],

  deletePhoto: function (e) {
    e.preventDefault();
    ApiUtil.deletePhoto(this.props.photo);
    this.props.removeModal();
    this.history.pushState(null, '/');
  },

  render: function() {
    return (
      <div id="confirm" className="modal is-active">
        <div className="modal-screen js-hide-modal" onClick={this.props.removeModal}></div>
        <div className='modal-content'>
          <span className="modal-close js-hide-modal" onClick={this.props.removeModal}>&times;</span>
          <h3>Are you sure you want to permanently delete this photo?</h3>
          <form>
            <div className="form-buttons">
              <button className="btn btn-primary" onClick={this.deletePhoto}>Delete</button>
              <button className="btn" onClick={this.props.removeModal}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
});
