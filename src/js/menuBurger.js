class Menu {
  selectors = {
    listMenu: "listMenu", // ID списку меню
    burgerMenu: "MenuButton", // ID кнопки
  };
  stateClasses = {
    isOpen: "visible-menu", // Клас для відкритого меню
    isClose: "hidden-menu", // Клас для прихованого меню
  };

  constructor() {
    this.menuList = document.getElementById(this.selectors.listMenu); // Список меню
    this.burgerButton = document.getElementById(this.selectors.burgerMenu); // Кнопка
    this.bindEvents(); // Додаємо виклик bindEvents()
  }

  onBurgerButtonClick = () => {
    if (this.menuList.classList.contains(this.stateClasses.isClose)) {
      // Якщо меню приховане, відкриваємо його
      this.menuList.classList.remove(this.stateClasses.isClose);
      this.menuList.classList.add(this.stateClasses.isOpen);
    } else {
      // Якщо меню відкрите, закриваємо його
      this.menuList.classList.add(this.stateClasses.isClose);
      this.menuList.classList.remove(this.stateClasses.isOpen);
    }
  };

  bindEvents() {
    if (this.burgerButton) {
      this.burgerButton.addEventListener("click", this.onBurgerButtonClick);
    } else {
      console.error("Кнопка меню не знайдена");
    }
  }
}

export default Menu;
