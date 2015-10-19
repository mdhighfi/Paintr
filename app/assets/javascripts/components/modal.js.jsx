var ModalTest = React.createClass({
  render: function () {
    console.log("modal is opening");
    return(
      <section id="uploadModal" className="modal is-active">
        <article className="modal-content">
          <span className="modal-close js-hide-modal">&times;</span>

          <h1>Hello, Modal!</h1>

          <p>Ok, this should pop up after you click upload and finish</p>

        </article>
        <div className="modal-screen js-hide-modal"></div>
      </section>
    );
  }
});
