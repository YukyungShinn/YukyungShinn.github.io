const openGraduate = () => {
    document.querySelector(".modal-graduate").classList.remove("hidden");
  }

  const closeGraduate = () => {
    document.querySelector(".modal-graduate").classList.add("hidden");
  }

  document.querySelector(".openBtnGraduate").addEventListener("click", openGraduate);
  document.querySelector(".closeBtnGraduate").addEventListener("click", closeGraduate);
  document.querySelector(".bgGraduate").addEventListener("click", closeGraduate);

  const openPoster = () => {
    document.querySelector(".modal-poster").classList.remove("hidden");
  }

  const closePoster = () => {
    document.querySelector(".modal-poster").classList.add("hidden");
  }

  document.querySelector(".openBtnPoster").addEventListener("click", openPoster);
  document.querySelector(".closeBtnPoster").addEventListener("click", closePoster);
  document.querySelector(".bgPoster").addEventListener("click", closePoster);

  const openForum = () => {
    document.querySelector(".modal-forum").classList.remove("hidden");
  }

  const closeForum = () => {
    document.querySelector(".modal-forum").classList.add("hidden");
  }

  document.querySelector(".openBtnForum").addEventListener("click", openForum);
  document.querySelector(".closeBtnForum").addEventListener("click", closeForum);
  document.querySelector(".bgForum").addEventListener("click", closeForum);