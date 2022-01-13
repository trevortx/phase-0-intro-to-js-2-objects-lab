const employee = {
  name: "Trevor",
  streetAddress: "859 Vallejo St",
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
  return {
    ...obj,
    [key]: value,
  };
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

function deleteFromEmployeeByKey(obj, key, value) {
  const employee2 = {...obj};
  delete employee2[key];
  return employee2;
}

function destructivelyDeleteFromEmployeeByKey(obj, key, value) {
 delete employee[key];
 return employee;
}
