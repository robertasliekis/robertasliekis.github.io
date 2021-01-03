import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn, faFacebookF } from "@fortawesome/free-brands-svg-icons";

export class Contact extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }
  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    console.log(form);
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }

  render() {
    return (
      <div className="contact-section wrapper">
        <div className="white-box">
          <div className="line"></div>
        </div>
        <div className="contact-content container">
          <h1 className="content-heading">CONTACT</h1>

          <form className="message-section" onSubmit={this.submitForm} action="https://formspree.io/xbjzrzzd" method="POST">
            <label className="label-name">
              <input className="text-input name-text" type="text" name="name" placeholder="Name" />
              <label className="label-invisible" htmlFor="name">
                message
              </label>
            </label>

            <label className="label-email">
              <input className="text-input email-text" type="text" name="_replyto" placeholder="Email" />
              <label className="label-invisible" htmlFor="email">
                message
              </label>
            </label>

            <label className="label-subject">
              <input className="text-input subject-text" type="text" name="subject" placeholder="Subject" />
              <label className="label-invisible" htmlFor="subject">
                message
              </label>
            </label>

            <label className="label-message">
              <textarea className="text-input message-text" name="message" placeholder="Your message"></textarea>
              <label className="label-invisible" htmlFor="message">
                message
              </label>
            </label>

            <div className="alert-message">
              *Please enter valid<span className="word1">name</span>
              <span className="sign1">,</span>
              <span className="sign2">and</span>
              <span className="word2">email</span>
              <span className="sign3">and</span>
              <span className="word3">subject</span>
            </div>

            <button className="button-wide button-send" type="submit">
              Send Message
            </button>
          </form>
          {/* 
          <form className="message-section" onSubmit={this.submitForm} action="https://formspree.io/xbjzrzzd" method="POST">
            <label className="label-name">
              <input class="text-input name-text" type="name" name="name" placeholder="Name" />
            </label>
            <label className="label-email">
              <input class="email" type="email" name="email" placeholder="Email" />
            </label>
            <input class="message" type="text" name="message" placeholder="Message" />
            <textarea name="message" cols="30" rows="10" placeholder="Your message"></textarea>
            <button>Send Message</button>
            {this.state.status === "SUCCESS" && <p>Success! I will get back to you soon!</p>}
            {this.state.status === "ERROR" && <p>Ooops! There was an error</p>}
          </form> */}

          <div className="contact-bottom">
            <p className="author">
              © 2020 <span>ROBERTAS LIEKIS</span>
            </p>
            <div className="social-media-icons">
              <a className="button-round" href="https://github.com/robertasliekis" aria-label="github">
                <FontAwesomeIcon icon={faGithub} className="icon" />
              </a>
              <a className="button-round" href="https://www.linkedin.com/in/robertas-liekis-a6138183/" aria-label="linkedin">
                <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
              </a>
              <a className="button-round" href="https://www.facebook.com/robertas.liekis" aria-label="facebook">
                <FontAwesomeIcon icon={faFacebookF} className="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
