window.PhotoIndexItem = React.createClass({
  mixins: [ReactRouter.History],
   showDetail: function () {
     this.history.pushState(null, '/photo/' + this.props.photo.id, {});
   },

   _manipulateImage: function(url) {
     var regexp = /\/upload\//; // everything after the last slash
     var manipulation = "h_250\/";
     return url.replace(regexp, "$&" + manipulation);
   },

   render: function () {
     //  var indexPhoto = $.cloudinary.url("sample.jpg", { width: 100, height: 150, crop: 'fill' });
     var indexItemImageUrl = this._manipulateImage(this.props.photo.image_url);
     return(
       <li onClick={this.showDetail} className="photo-index-item">
         <img
           src={indexItemImageUrl}

         />
        </li>
     );
   }
});

// className="index-item"
