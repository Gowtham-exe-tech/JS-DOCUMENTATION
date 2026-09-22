const userMethods = {
  can(permission) {
    return this.permissions.includes(permission);
  },

  describe() {
    return `${this.name} (${this.role})`;
  }
};

const adminMethods = Object.create(userMethods);

adminMethods.can = function(permission) {
  return this.role === "admin" || userMethods.can.call(this, permission);
};

function createUser(name, role, permissions) {
  const user = Object.create(role === "admin" ? adminMethods : userMethods);
  user.name = name;
  user.role = role;
  user.permissions = permissions;
  return user;
}

const users = [
  createUser("Gowtham", "admin", ["reports.read", "users.manage"]),
  createUser("Arun", "manager", ["reports.read"]),
  createUser("Priya", "staff", [])
];

const permission = "users.manage";
const container = document.querySelector("#users");
const log = document.querySelector("#log");

users.forEach(user => {
  const card = document.createElement("div");
  card.className = "card";

  const inheritedMethod = user.can;
  const prototype = Object.getPrototypeOf(user);

  card.innerHTML = `
    <h3>${user.describe()}</h3>
    <p>Can manage users: <strong>${user.can(permission)}</strong></p>
    <p>Own property "can": <strong>${Object.hasOwn(user, "can")}</strong></p>
    <button>Inspect Prototype</button>
  `;

  card.querySelector("button").addEventListener("click", () => {
    log.innerHTML = `
      <strong>${user.name}</strong><br>
      Object's prototype contains can(): ${typeof prototype.can === "function"}<br>
      Same inherited function reference: ${inheritedMethod === prototype.can}
    `;
  });

  container.appendChild(card);
});
