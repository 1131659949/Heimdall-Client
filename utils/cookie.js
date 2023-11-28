import requests from "@/request/request"

function getUserInfo() {
    requests({
        method: "get",
        Headers: { "Content-Type": "multipart/form-data" },
        url: "/api/user/",
    }).then((res) => {
        if (res.data.code == 10001) {
            localStorage.setItem("userInfo", JSON.stringify(res.data.data));
        }
    });
}

export {
    getUserInfo
}