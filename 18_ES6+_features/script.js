const tasks = [
  { id: 1, title: "Fix login bug", status: "pending", tags: ["bug", "backend"] },
  { id: 2, title: "Update dashboard", status: "done", tags: ["frontend"] }
];
const output = document.querySelector("#output");
const input = document.querySelector("#taskInput");

const renderTask = ({ id, title, status, tags = [] }) =>
  `#${id} ${title} | ${status} | ${tags.join(", ")}`;

const addTask = (title, ...tags) => {
  const newTask = {
    id: tasks.length + 1,
    title,
    status: "pending",
    tags: [...tags]
  };
  tasks.push(newTask);
  output.textContent = `Added: ${renderTask(newTask)}`;
};

document.querySelector("#addBtn").addEventListener("click", () => {
  const title = input.value.trim();
  if (!title) return;
  const defaultTags = ["user-created"];
  addTask(title, ...defaultTags);
  input.value = "";
});

document.querySelector("#summaryBtn").addEventListener("click", () => {
  const [firstTask, ...remainingTasks] = tasks;
  const doneCount = tasks.filter(({ status }) => status === "done").length;
  output.textContent = `Task count: ${tasks.length}
                        Done: ${doneCount}
                        First task: ${firstTask.title}
                        Remaining tasks: ${remainingTasks.length}
                        ${tasks.map(renderTask).join("\n")}`;
});
