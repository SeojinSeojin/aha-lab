const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: false,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

document.addEventListener('DOMContentLoaded', (event) => {
    if (screen.width < 500) {
        Toast.fire({
            icon: 'info',
            title: 'Swipe to see tables'
        })
    }
})