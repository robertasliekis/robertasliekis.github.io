import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn, faFacebookF } from "@fortawesome/free-brands-svg-icons";

export class Contact extends Component {
  constructor() {
    super();
    this.state = {
      input: { name: "", email: "", subject: "", message: "" },
      errorName: false,
      errorEmail: false,
      errorSubject: false,
      errorMessage: false,
      sign1display: false,
      sign2display: false,
      sign3display: false,
      sign4display: false,
      sign5display: false
    };

    this.formNameRef = React.createRef();
    this.formEmailRef = React.createRef();
    this.formSubjectRef = React.createRef();
    this.formMessageRef = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;

    this.setState({
      input
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.validate()) {
      let input = {};
      input["name"] = "";
      input["email"] = "";
      input["subject"] = "";
      input["message"] = "";
      this.setState({ input: input });
    }
  }

  validate() {
    let input = this.state.input;
    let isValid = true;
    let errorsCount = 0;

    let errorName = false;
    let errorEmail = false;
    let errorSubject = false;
    let errorMessage = false;

    this.formNameRef.current.classList.remove("input-border");
    this.formEmailRef.current.classList.remove("input-border");
    this.formSubjectRef.current.classList.remove("input-border");

    this.setState({ sign1display: false, sign2display: false, sign3display: false, sign4display: false, sign5display: false });

    if (!input["name"]) {
      isValid = false;
      this.formNameRef.current.classList.add("input-border");
      errorsCount++;
      errorName = true;
    }

    if (!input["email"]) {
      isValid = false;
      this.formEmailRef.current.classList.add("input-border");
      errorsCount++;
      errorEmail = true;
    } else if (typeof input["email"] !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(input["email"])) {
        isValid = false;
        this.formEmailRef.current.classList.add("input-border");
        errorsCount++;
        errorEmail = true;
      }
    }

    if (!input["subject"]) {
      isValid = false;
      this.formSubjectRef.current.classList.add("input-border");
      errorsCount++;
      errorSubject = true;
    }

    if (!input["message"]) {
      isValid = false;
      this.formMessageRef.current.classList.add("input-border");
      errorsCount++;
      errorMessage = true;
    }

    if (errorsCount === 2) {
      if (errorName && errorEmail) {
        this.setState({ sign2display: true });
      } else if (errorSubject) {
        this.setState({ sign4display: true });
      } else if (errorMessage) {
        this.setState({ sign5display: true });
      }
    } else if (errorsCount === 3) {
      if (!errorName || !errorEmail) {
        this.setState({ sign3display: true, sign5display: true });
      } else if (!errorSubject) {
        this.setState({ sign1display: true, sign5display: true });
      } else if (!errorMessage) {
        this.setState({ sign1display: true, sign4display: true });
      }
    } else if (errorsCount === 4) {
      this.setState({ sign1display: true, sign3display: true, sign5display: true });
    }

    this.setState({ errorName: errorName, errorEmail: errorEmail, errorSubject: errorSubject, errorMessage: errorMessage });

    return isValid;
  }

  render() {
    return (
      <div className="contact-section wrapper">
        <div className="contact-content container">
          <h1 className="content-heading">CONTACT</h1>

          <form className="message-section" onSubmit={this.handleSubmit} action="https://formspree.io/xbjzrzzd" method="POST">
            <label className="label-name">
              <input
                className="text-input name-text"
                ref={this.formNameRef}
                type="text"
                name="name"
                placeholder="Name"
                value={this.state.input.name}
                onChange={this.handleChange}
              />
            </label>

            <label className="label-email">
              <input
                className="text-input email-text"
                ref={this.formEmailRef}
                type="text"
                name="email"
                placeholder="Email"
                value={this.state.input.email}
                onChange={this.handleChange}
              />
            </label>

            <label className="label-subject">
              <input
                className="text-input subject-text"
                ref={this.formSubjectRef}
                type="text"
                name="subject"
                placeholder="Subject"
                value={this.state.input.subject}
                onChange={this.handleChange}
              />
            </label>

            <label className="label-message">
              <textarea
                className="text-input message-text"
                ref={this.formMessageRef}
                name="message"
                placeholder="Your message"
                value={this.state.input.message}
                onChange={this.handleChange}
              ></textarea>
            </label>

            <div
              className="alert-message"
              style={{
                opacity: this.state.errorName || this.state.errorEmail || this.state.errorSubject || this.state.errorMessage ? 1 : 0,
                display:
                  this.state.errorName || this.state.errorEmail || this.state.errorSubject || this.state.errorMessage ? "flex" : "none",
                height: this.state.errorName || this.state.errorEmail || this.state.errorSubject || this.state.errorMessage ? "auto" : 0
              }}
            >
              <span className="word0">*Please enter valid</span>
              <span
                className="word1"
                style={{
                  display: this.state.errorName ? "flex" : "none"
                }}
              >
                name
              </span>
              <span
                className="sign1"
                style={{
                  display: this.state.sign1display ? "flex" : "none"
                }}
              >
                ,
              </span>
              <span
                className="sign2"
                style={{
                  display: this.state.sign2display ? "flex" : "none"
                }}
              >
                and
              </span>
              <span
                className="word2"
                style={{
                  display: this.state.errorEmail ? "flex" : "none"
                }}
              >
                email
              </span>
              <span
                className="sign3"
                style={{
                  display: this.state.sign3display ? "flex" : "none"
                }}
              >
                ,
              </span>
              <span
                className="sign4"
                style={{
                  display: this.state.sign4display ? "flex" : "none"
                }}
              >
                and
              </span>
              <span
                className="word3"
                style={{
                  display: this.state.errorSubject ? "flex" : "none"
                }}
              >
                subject
              </span>
              <span
                className="sign5"
                style={{
                  display: this.state.sign5display ? "flex" : "none"
                }}
              >
                and
              </span>
              <span
                className="word4"
                style={{
                  display: this.state.errorMessage ? "flex" : "none"
                }}
              >
                message
              </span>
            </div>

            <button className="button-wide button-send" type="submit">
              Send Message
            </button>
          </form>

          <div className="contact-bottom">
            {/* <p className="author">
              © 2020 <span>ROBERTAS LIEKIS</span>
            </p> */}
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
