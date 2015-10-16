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


  render: function() {
    console.log("HI!!")
    return (
      <div className="modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              <h4 className="modal-title">Confirmation</h4>
            </div>
            <div className="modal-body">
              <p>Do you want to save changes you made to document before closing?</p>
              <p className="text-warning"><small>If you don't save, your changes will be lost.</small></p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  // render: function () {
  //   return(
  //     <div classNameName="photo-modal">
  //       <form classNameName='new-photo' onSubmit={this.createPhoto}>
  //         <div>
  //           <label htmlFor='photo_title'>Title:</label>
  //           <input
  //             type='text'
  //             id='photo_title'
  //             valueLink={this.linkState("title")}
  //           />
  //         </div>
  //
  //         <div>
  //           <label htmlFor='photo_image_url'>Image URL:</label>
  //           <input
  //             type='text'
  //             id='photo_image_url'
  //             valueLink={this.linkState("image_url")}
  //           />
  //         </div>
  //
  //         <button>Create Photo</button>
  //         <br />
  //       </form>
  //     </div>
  //   );
  // }
});
// window.showPhotoModal = function(){
//   React.render(<PhotoForm/>, document.getElementById('modal-root'));
// }
