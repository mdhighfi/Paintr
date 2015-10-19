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


  // render: function() {
  //   console.log("HI!!")
  //   return (
  //     // <div className="modal">
  //     //   <div className="modal-dialog">
  //     //     <div className="modal-content">
  //     //       <div className="modal-header">
  //     //         <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
  //     //         <h4 className="modal-title">Confirmation</h4>
  //     //       </div>
  //     //       <div className="modal-body">
  //     //         <p>Do you want to save changes you made to document before closing?</p>
  //     //         <p className="text-warning"><small>If you don't save, your changes will be lost.</small></p>
  //     //       </div>
  //     //       <div className="modal-footer">
  //     //         <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
  //     //         <button type="button" className="btn btn-primary">Save changes</button>
  //     //       </div>
  //     //     </div>
  //     //   </div>
  //     // </div>
  //   );
  // }
  render: function () {
    return(
      // <ModalTest/>
      <div className="container ">
        <div id="uploadModal" className="modal is-active">
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
      </div>
    );
  }
});

window.showPhotoModal = function(){
  React.render(<PhotoForm/>, document.getElementById('modal-root'));
}

//
// <div className="inputGroup">
//   <button
//     type="button"
//     id='photo_medium'
//     className="btn btn-default dropdown-toggle"
//     data-toggle="dropdown"
//     aria-haspopup="true"
//     aria-expanded="false"
//     valueLink={this.linkState("medium")}
//   >
//   <span className="caret"></span>
//   </button>
//   <ul className="dropdown-menu">
//     <li><a href="#">Oil</a></li>
//     <li><a href="#">Acrylic</a></li>
//     <li><a href="#">Watercolor</a></li>
//     <li><a href="#">Gouache</a></li>
//   </ul>
// </div>

// <div className="inputGroup">
//   <button
//     type="button"
//     className="btn btn-default dropdown-toggle"
//     data-toggle="dropdown"
//     aria-haspopup="true"
//     aria-expanded="false"
//     valueLink={this.linkState("surface")}
//   >
//   <span className="caret"></span>
//   </button>
//   <ul className="dropdown-menu">
//     <li><a href="#">Canvas</a></li>
//     <li><a href="#">Paper</a></li>
//     <li><a href="#">Wood</a></li>
//     <li><a href="#">Metal</a></li>
//     <li><a href="#">Marble</a></li>
//   </ul>
// </div>
