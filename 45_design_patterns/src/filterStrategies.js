// STRATEGY: each filter is its own function, same signature
const filterStrategies = {
  status: (applications, value) => applications.filter(item => item.status === value),
  skill: (applications, value) => applications.filter(item => item.skills.includes(value)),
  cgpa: (applications, value) => applications.filter(item => item.education.some(edu => edu.cgpa >= value)),
  experience: (applications, value) => applications.filter(item => item.internships.length >= value)
};
export function filterApplications(applications, strategy, value) {
  const filter = filterStrategies[strategy];
  if (!filter) throw new Error(`Unsupported filter strategy: ${strategy}`);
  return filter(applications, value);
}
