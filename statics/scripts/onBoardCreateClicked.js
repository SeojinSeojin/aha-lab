const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

const onBoardCreateClicked = () => {
    Swal.fire({
        text: "Upload Board",
        html: '<input id="swal-input1" class="swal2-input" placeholder="URL을 입력해주세요">' +
            '<input id="swal-input2" class="swal2-input" placeholder="Comment를 입력해주세요">',
        preConfirm: () => {
            return [
                document.getElementById('swal-input1').value,
                document.getElementById('swal-input2').value
            ]
        }
    }).then(b => {
        console.log(b.value)
        $.ajax({
            method: "POST",
            url: "/board/create",
            data: {
                url: b.value[0],
                comment: b.value[1]
            },
            success: (data) => {
                console.log(data);
                console.log("요청 성공");
                Toast.fire({
                    icon: 'success',
                    title: 'Uploaded Successfully'
                })
            },
            error: (data) => {
                console.log(data);
                Toast.fire({
                    icon: "warning",
                    title: "게시글이 업로드되지 않았습니다.",
                })
            }
        }).done()
    })
}