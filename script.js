
if (typeof WinBox === 'undefined') {
  console.error('WinBox not loaded');
} else {
  console.log('WinBox loaded successfully');
}

const about = document.querySelector("#about");
const contact = document.querySelector("#contact");
const aboutContent = document.querySelector("#about-content");
const contactContent = document.querySelector("#contact-content");

about.addEventListener("click", () => {
  console.log('About clicked');
  const aboutBox = new WinBox({
    title: "About Me",
    // modal: true,
    width: "400px",
    height: "400px",
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: aboutContent,
    onfocus: function () {
      this.setBackground("var(--text-color)");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});

contact.addEventListener("click", () => {
  console.log('Contact clicked');
  const contactBox = new WinBox({
    title: "Contact Me",
    width: "400px",
    height: "400px",
    top: 100,
    right: 50,
    bottom: 50,
    left: 150,
    mount: contactContent,
    onfocus: function () {
      this.setBackground("var(--text-color)");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});
