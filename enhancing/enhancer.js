module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  const newItem = { ...item };
  if (item.enhancement < 20) {
    item.enhancement++;
  }
  return newItem;
}

function fail(item) {
  const newItem = { ...item };
  if (item.enhancement < 15) {
    item.durability -= 5;
  } else if (item.enhancement > -15) {
    item.durability -= 10;
  }
  if (item.enhancement > 16) {
    item.enhancement -= 1;
  }

  return newItem;
}

function repair(item) {
  const newItem = { ...item };
  item.durability = 100;
  return newItem;
}

// function get(item) {
//   const newItem = {...item}
//   if(item.enhancement > 0) {
//     item.name = `[+${item.enhancement}] ${item.name}`;
//   }
//   return { ...item };
// }
