export const canAccessModule = (module, auth) => {
  const roles = fetchLabels(auth);
  const moduleRoles = fetchLabels(module);

  return moduleRoles.some((el) => roles.includes(el));
};

const fetchLabels = (entity) => {
  let enty = [];

  entity.roles.forEach((el) => {
    enty.push(el.label);
  });

  return enty;
};
