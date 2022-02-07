const employee = {
  name: "Trevor",
  streetAddress: "859 Vallejo St",
};

function updateEmployeeWithKeyAndValue(emp, key, value) {
  return {
    ...emp,
    [key]: value,
  };
}

function destructivelyUpdateEmployeeWithKeyAndValue(emp, key, value) {
  emp[key] = value;
  return emp;
}

function deleteFromEmployeeByKey(emp, key) {
  let newEmployee = {...emp};
  delete newEmployee[key];
  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(emp, key) {
  delete emp[key];
  return emp;
}