const openTravel = () => {
    document.querySelector(".modal-travel").classList.remove("hidden");
  }

  const closeTravel = () => {
    document.querySelector(".modal-travel").classList.add("hidden");
  }

  document.querySelector(".openBtnTravel").addEventListener("click", openTravel);
  document.querySelector(".closeBtnTravel").addEventListener("click", closeTravel);
  document.querySelector(".bg").addEventListener("click", closeTravel);

  const openDessert = () => {
    document.querySelector(".modal-dessert").classList.remove("hidden");
  }

  const closeDessert = () => {
    document.querySelector(".modal-dessert").classList.add("hidden");
  }

  document.querySelector(".openBtnDessert").addEventListener("click", openDessert);
  document.querySelector(".closeBtnDessert").addEventListener("click", closeDessert);
  document.querySelector(".bgDessert").addEventListener("click", closeDessert);

  const openSisa = () => {
    document.querySelector(".modal-sisa").classList.remove("hidden");
  }

  const closeSisa = () => {
    document.querySelector(".modal-sisa").classList.add("hidden");
  }

  document.querySelector(".openBtnSisa").addEventListener("click", openSisa);
  document.querySelector(".closeBtnSisa").addEventListener("click", closeSisa);
  document.querySelector(".bgSisa").addEventListener("click", closeSisa);

  const openChoon = () => {
    document.querySelector(".modal-choon").classList.remove("hidden");
  }

  const closeChoon = () => {
    document.querySelector(".modal-choon").classList.add("hidden");
  }

  document.querySelector(".openBtnChoon").addEventListener("click", openChoon);
  document.querySelector(".closeBtnChoon").addEventListener("click", closeChoon);
  document.querySelector(".bgChoon").addEventListener("click", closeChoon);