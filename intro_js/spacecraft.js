function spaceCraft(place1, place2) {
  if (place1 === place2) {
    return 0;
  }

  return 1 + spaceCraft(ship1(place1), ship2(place2));
}

function ship1(place1) {
  if (place1 === "aurora") {
    return "ember";
  } else if (place1 === "ember") {
    return "nebula";
  } else if (place1 === "nebula") {
    return "rift";
  } else {
    return "aurora";
  }
}

function ship2(place2) {
  if (place2 === "ember") {
    return "nebula";
  } else if (place2 === "nebula") {
    return "rift";
  } else if (place2 === "rift") {
    return "obsidian";
  } else if (place2 === "obsidian") {
    return "eclipse";
  } else {
    return "ember";
  }
}

console.log(spaceCraft("aurora", "ember"));
