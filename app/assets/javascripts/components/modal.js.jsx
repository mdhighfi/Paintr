var ModalTest = React.createClass({
  render: function () {
    return(
      <section id="modal" class="modal is-active">
        <article class="modal-content">
          <span class="modal-close js-hide-modal">&times;</span>

          <h1>Hello, Modal!</h1>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        </article>
        <div class="modal-screen js-hide-modal"></div>
      </section>
    );
  }
});
