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
    var photo = {};
    Object.keys(this.state).forEach(function (key) {
      if(key != "move_1" && key != "move_2") { photo[key] = this.state[key]; }
    }.bind(this))
    photo.moves = [this.state.move_1, this.state.move_2];
    ApiUtil.createPhoto(photo, function (id) {
      this.history.pushState(null, "/photo/" + id, {});
    }.bind(this));
    this.setState(this.blankAttrs);
  },

  render: function () {
    return(
      <form className='new-photo' onSubmit={this.createPhoto}>
        <div>
          <label htmlFor='photo_name'>Name:</label>
          <input
            type='text'
            id='photo_name'
            valueLink={this.linkState("name")}
          />
        </div>

        <div>
          <label htmlFor='photo_image_url'>Image URL:</label>
          <input
            type='text'
            id='photo_image_url'
            valueLink={this.linkState("image_url")}
          />
        </div>

        <div>
          <label htmlFor='photo_poke_type'>Type:</label>
          <select id='photo_poke_type' valueLink={this.linkState("poke_type")}>
            {window.photoTypes.map(function (type, i) {                                      return <option value={type} key={i}>{type}</option>;
            })}
          </select>
        </div>

        <div>
          <label htmlFor='photo_attack'>Attack:</label>
          <input
            type='number'
            id='photo_attack'
            valueLink={this.linkState("attack")}
          />
        </div>

        <div>
          <label htmlFor='photo_defense'>Defense:</label>
          <input
            type='number'
            id='photo_defense'
            valueLink={this.linkState("defense")}
          />
        </div>

        <div>
          <label htmlFor='photo_move_1'>Move #1:</label>
          <input
            type='text'
            id='photo_move_1'
            valueLink={this.linkState("move_1")}
          />
        </div>

        <div>
          <label htmlFor='photo_move_2'>Move #2:</label>
          <input
            type='text'
            id='photo_move_2'
            valueLink={this.linkState("move_2")}
          />
        </div>

        <button>Create Photo</button>
        <br />
      </form>
    );
  }
});
