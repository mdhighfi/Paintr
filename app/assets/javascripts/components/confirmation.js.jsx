var Confirmation = React.createClass({
  mixins: [React.addons.LinkedStateMixin, ReactRouter.History],

  deletePhoto: function (e) {
    e.preventDefault();
    ApiUtil.deletePhoto(this.props.photo);
    this.props.removeModal();
  },

  render: function() {
    return (
      <div id="confirm" className="modal is-active">
        <div className="modal-screen js-hide-modal" onClick={this.props.removeModal}></div>
        <div className='modal-content'>
          <span className="modal-close js-hide-modal" onClick={this.props.removeModal}>&times;</span>
          Are you sure you want to permanently delete this photo?
        </div>
        <div className="modal-footer">
          <button type="button" data-dismiss="modal" className="btn btn-primary" id="delete">Delete</button>
          <button type="button" data-dismiss="modal" className="btn">Cancel</button>
        </div>
      </div>
    );
  }
});
