import React from 'react';

function Contact() {
  return (
    <section>
      <h1 className='display-4'>Contact Me</h1>
      <form action="mailto:someone@example.com" method="post" enctype="text/plain">
        <div class="form-group">
            <label for="emailInput">Email address</label>
            <input type="text" class="form-control" id="emailInput" placeholder="Email"/>
        </div>
        <div class="form-group">
            <label for="nameInput">Name</label>
            <input type="email" class="form-control" id="nameInput" placeholder="Name"/>
        </div>
        <div class="form-group">
            <label for="textInput">Email</label>
            <textarea  type="text area" class="form-control" id="textInput" placeholder="Email Body"/>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </section>
  );
}

export default Contact;
