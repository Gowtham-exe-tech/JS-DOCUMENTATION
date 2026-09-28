// ADAPTER: convert the external api format into the format our app uses
export function adaptExternalApplicant(apiUser) {
  return {
    name: apiUser.full_name,
    email: apiUser.email_address,
    age: apiUser.age_years,
    skills: (apiUser.skill_list || '').split(',').map(skill => skill.trim()).filter(Boolean),
    education: (apiUser.degrees || []).map(degree => ({ degree: degree.title, cgpa: degree.score })),
    internships: []
  };
}
