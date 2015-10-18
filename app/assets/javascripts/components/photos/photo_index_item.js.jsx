window.PhotoIndexItem = React.createClass({
  mixins: [ReactRouter.History],
   showDetail: function () {
     this.history.pushState(null, '/photo/' + this.props.photo.id, {});
   },

   render: function () {
    //  var indexPhoto = $.cloudinary.url("sample.jpg", { width: 100, height: 150, crop: 'fill' });
     return(
       <li onClick={this.showDetail} className="photo-index-item">
         <img
           src={this.props.photo.image_url}
           className="index-item"
         />
        </li>
     );
   }
});
