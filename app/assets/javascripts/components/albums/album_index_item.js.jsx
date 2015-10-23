window.AlbumIndexItem = React.createClass({
  mixins: [ReactRouter.History],
   showDetail: function () {
     this.history.pushState(null, '/album/' + this.props.album.id, {});
   },

   _manipulateImage: function(url) {
     var regexp = /\/upload\//;
     var manipulation = "h_400\/";
     return url.replace(regexp, "$&" + manipulation);
   },

   render: function () {
     var currentAlbum = this.props.album;
     var albumCoverUrl = this._manipulateImage(currentAlbum.cover_url);
     var desc = '';
     if (typeof currentAlbum.description === 'string') {
       desc = <li><h4>Description: {currentAlbum.description}</h4></li>;
     }
     return(
       <div onClick={this.showDetail} className="album-index-item">
         <img src={albumCoverUrl} />
         <div>
           <li><h4>Title: {currentAlbum.title}</h4></li>
           {desc}
         </div>
       </div>
     );
   }
});
