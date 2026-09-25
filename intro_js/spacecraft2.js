function Spacecraft(place1, place2) {
  if (place1 === place2) {
    return 0;
  }

  if (place1 === "aurora") {
    place1 = "ember";
  } else if (place1 === "ember") {
    place1 = "nebula";
  } else if (place1 === "nebula") {
    place1 = "rift";
  } else if (place1 === "rift") {
    place1 = "aurora";
  }

  if (place2 === "ember") {
    place2 = "nebula";
  } else if (place2 === "nebula") {
    place2 = "rift";
  } else if (place2 === "rift") {
    place2 = "obsidian";
  } else if (place2 === "obsidian") {
    place2 = "eclipse";
  } else if (place2 === "eclipse") {
    place2 = "ember";
  }

  if (place1 === place2) {
    return 1;
  } else {
    return 1 + Spacecraft(place1, place2);
  }
}

console.log(Spacecraft("aurora", "eclipse"));
