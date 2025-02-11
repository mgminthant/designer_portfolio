import "../../assets/styles/section.css";

export default function Section() {
  return (
    <div className="section">
      <h1>
        Hello, I am <span> Myat Min Thant</span>
      </h1>
      <section className="animation">
        <div className="first">
          <div>Graphic Designer</div>
        </div>
        <div className="second">
          <div>Model</div>
        </div>
      </section>
      <div className="img-text">
        <div className="scroll-indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M14.207 1.707L13.5 1l-6 6l-6-6l-.707.707l6.353 6.354h.708zm0 6L13.5 7l-6 6l-6-6l-.707.707l6.353 6.354h.708z"
              clip-rule="evenodd"
            />
          </svg>
          <div className="wrapper">
            <span className="key">G</span>
            <span className="key">r</span>
            <span className="key">a</span>
            <span className="key">p</span>
            <span className="key">h</span>
            <span className="key">i</span>
            <span className="key">c</span>
            &nbsp;
            <span className="key">Designer</span>
          </div>
        </div>
        <div className={"img-container"}></div>
        <div className="scroll-indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M14.207 1.707L13.5 1l-6 6l-6-6l-.707.707l6.353 6.354h.708zm0 6L13.5 7l-6 6l-6-6l-.707.707l6.353 6.354h.708z"
              clip-rule="evenodd"
            />
          </svg>
          <div className="wrapper">
            <span className="key">M</span>
            <span className="key">o</span>
            <span className="key">d</span>
            <span className="key">e</span>
            <span className="key">l</span>
          </div>
        </div>
      </div>
    </div>
  );
}
