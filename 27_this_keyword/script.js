class ProfileEditor {
  constructor() {
    this.user = {
      name: "Gowtham",
      email: "gowtham@example.com"
    };
    this.output = document.querySelector("#output");

    // Arrow function keeps the class instance's `this`.
    document.querySelector("#save").addEventListener("click", () => {
      this.save();
    });
    document.querySelector("#logout").addEventListener(
      "click",
      this.logout.bind(this)
    );
    this.render();
  }

  save() {
    this.user.name = document.querySelector("#name").value;
    this.user.email = document.querySelector("#email").value;
    this.render();
  }

  logout() {
    this.output.textContent = `Logged out ${this.user.name}`;
  }

  render() {
    document.querySelector("#name").value = this.user.name;
    document.querySelector("#email").value = this.user.email;
    this.output.textContent = JSON.stringify(this.user, null, 2);
  }
}

const editor = new ProfileEditor();
const logger = {
  prefix: "[AUDIT]",
  log(message) {
    return `${this.prefix} ${message}`;
  }
};

function showAudit(message) {
  document.querySelector("#output").textContent =
    logger.log.call(logger, message);
}

// Demonstrates call() explicitly controlling `this`.
setTimeout(() => showAudit("Profile editor loaded"), 500);
