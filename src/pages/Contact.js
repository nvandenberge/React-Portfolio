import React from "react";

const Contact = () => {
  return (
    <div>
      <main className="container mt-5">
        <div className="row">
          <section className="col-md-8">
            <div className="page-header">
              <h1>Contact</h1>
            </div>
            <div className="content">
              <form>
                <div className="form-group">
                  <label for="nameInput" className="text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control w-50"
                    id="nameInput"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group">
                  <label for="emailInput" className="text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control w-50"
                    id="emailInput"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <label for="messageInput" className="text-white">
                    Message
                  </label>
                  <textarea
                    className="form-control w-75"
                    id="messageInput"
                    rows="5"
                    placeholder="Message"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </section>
        </div>
      </main>
      <br />
    </div>
  );
};

export default Contact;
