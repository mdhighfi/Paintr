window.PhotoIndexItem = React.createClass({
  mixins: [ReactRouter.History],
   showDetail: function () {
     this.history.pushState(null, '/photo/' + this.props.photo.id, {});
   },

   render: function () {
     return(
       <li onClick={this.showDetail} className="photo-index-item">
         <p><img src={this.props.photo.image_url} width="400" /></p>
         <p>Title: {this.props.photo.title}</p>
         <p>Description: {this.props.description}</p>
         <p><em>{this.props.photo.medium} on {this.props.photo.surface}</em></p>
       </li>
     );
   }
})
