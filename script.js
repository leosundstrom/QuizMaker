let gold = 0;
let diggingPower = 1;
let inventory = [];

const userUpgrades = document.querySelector(".user-upgrades");
const goldLabel = document.querySelector(".gold-label");
const goldButton = document.querySelector(".gold-button");
const inventoryList = document.querySelector(".inventory-list");

const powerButtons = [
  {
    name: "Hoe (10)",
    cost: 10,
    power: 1
  },
  {
    name: "Crop growth chemicals (100)",
    cost: 100,
    power: 5
  },
  {
    name: "New land (1,000)",
    cost: 1000,
    power: 10
  },
  {
    name: "Industrial revolution (10,000)",
    cost: 100000,
    power: 100
  },
];

function buyItem(item, cost, powerIncrease, button) {
  if (gold >= cost) {
    gold -= cost;
    inventory.push(item);
    diggingPower += powerIncrease;
    updateInventory();
    goldLabel.innerHTML = gold;
    userUpgrades.removeChild(button);
  }
}

function addGold() {
  gold += diggingPower;
  goldLabel.innerHTML = gold;
}

function updateInventory() {
  inventoryList.innerHTML = "";
  for (const item of inventory) {
    const li = document.createElement("li");
    li.innerHTML = item;
    inventoryList.append(li);
  }
}

function initButtons() {
  for (const button of powerButtons) {
    const newButton = document.createElement("button");
    newButton.innerHTML = button.name;
    newButton.addEventListener("click", () => buyItem(button.name, button.cost, button.power, newButton));
    userUpgrades.append(newButton);
  }
}

goldButton.addEventListener("click", addGold);
initButtons();
updateInventory();
