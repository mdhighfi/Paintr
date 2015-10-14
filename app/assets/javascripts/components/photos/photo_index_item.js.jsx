var PhotoIndexItem = React.createClass({
  mixins: [ReactRouter.History],
   showDetail: function () {
     this.history.pushState(null, '/photo/' + this.props.photo.id, {});
   },

   render: function () {
     return(
       <li onClick={this.showDetail} className="photo-list-item">
         <p>Title: {this.props.photo.name}</p>
       </li>
     );
   }
})
