// Code your solution here
function findMatching(drivers, searchString) {
  const lowercaseSearch = searchString.toLowerCase();
  return drivers.filter((driver) => driver.toLowerCase() === lowercaseSearch);
}


function fuzzyMatch(drivers, searchString) {
  return drivers.filter(driver => driver.startsWith(searchString));
}


function matchName(drivers, searchString) {
  return drivers.filter((driver) => driver.name === searchString);
}

