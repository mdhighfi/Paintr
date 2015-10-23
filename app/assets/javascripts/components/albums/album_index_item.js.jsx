window.AlbumIndexItem = React.createClass({
  mixins: [ReactRouter.History],
   showDetail: function () {
     this.history.pushState(null, '/album/' + this.props.album.id, {});
   },

   render: function () {
    //  var indexItemImageUrl = this._manipulateImage(this.props.album.image_url);
     return(
       <li onClick={this.showDetail} className="album-index-item">
         hi
        </li>
     );
   }
});
