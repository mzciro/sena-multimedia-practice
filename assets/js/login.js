const d = document;
export default function openModal(buttonModal, modal, closemodal) {
  // Obtener el botón para abrir el diálogo modal
  const openModalButton = d.getElementById(buttonModal);

  // Obtener el diálogo modal
  const loginModal = d.getElementById(modal);
  const closeModal = d.querySelector(closemodal);

  // Abrir el diálogo modal al hacer clic en el botón
  openModalButton.addEventListener("click", () => {
    loginModal.style.display = "flex";
  });

  d.addEventListener("click", (e) => {
    if (e.target == loginModal || e.target == closeModal) {
      loginModal.style.display = "none";
    }
  });
}
