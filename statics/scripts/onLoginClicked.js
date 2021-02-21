const onLoginClicked = () => {
    console.log("login clicked");
    Swal.fire({
        text: "Admin 접속을 위한 비밀번호를 입력해 주세요",
        input: "password"
    }).then(pw => {
        console.log(pw.value)
        $.ajax({
            method: "POST",
            url: "/login",
            data: {
                pw: pw.value
            },
            success: (data) => {
                console.log(data);
                console.log("요청 성공");
                if (data.code == 200) {
                    Swal.fire({
                        title: "로그인 성공",
                        icon: "success"
                    })
                } else {
                    Swal.fire({
                        title: "비밀번호가 잘못되었습니다",
                        icon: "warning"
                    })
                }
            },
            error: (data) => {
                console.log(data);
                console.log("로그인 실패");
                Swal.fire({
                    title: "비밀번호가 잘못되었습니다",
                    icon: "warning"
                })
            }
        }).done()
    })
}