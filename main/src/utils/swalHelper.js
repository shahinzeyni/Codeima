import Swal from 'sweetalert2'
const showSwal = (title, text, icon,confirmButtonText) => {
  Swal.fire({ title, text, icon ,confirmButtonText});
};

export { showSwal };
