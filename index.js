function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
    function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
  }
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  
  const drivers = ["mark", "steve", "rose", "lion", "Alfred"];
  const driverObjects = [
    { name: "mark", hometown: "meru" },
    { name: "steve", hometown: "malindi" },
    { name: "rose", hometown: "timboni" }
  ];
  
  console.log(findMatching(drivers, "lion"));
  console.log(fuzzyMatch(drivers, "malindi")); 
console.log(matchName(driverObjects, "lion"));
  
// Code your solution here
