import requests from "@/request/request"
import { ElNotification } from 'element-plus'
import axios from "axios"
function SendNotification(actor, verb, recipient, level = "info") {
    requests({
        method: "post",
        Headers: { "Content-Type": "multipart/form-data" },
        url: "/api/notice/",
        data: {
            actor: actor,
            verb: verb,
            recipient: recipient,
            level: level
        }
    }).then((res) => {
        var data = res.data
        if (data.code == 10022) {
            ElNotification({
                title: '警告',
                message: data.data,
                type: 'warning',
            })
        }
    })
}

function switchClass(id, c1, c2, callback = null) {
    // 用于替换dom内class
    let target = id == '' ? document : document.getElementById(id)
    if (!target) {
        return
    }
    let class_list = target.classList;
    if (class_list && class_list.contains(c2)) {
        class_list.replace(c2, c1);
    } else {
        class_list.add(c1);
    }

    if (callback) {
        callback()
    }
}

function stopPropagation(e) {
    e.stopPropagation();
}


async function GetProjectInformation(arr, url) {
    await axios.get(url).then((res) => {
        if (!res) {
            return []
        }
        res.forEach(element => {
            arr.push(element)
        });
    }).catch((err) => {
        console.log("Github访问限制");
        return []
    })
    return subscribers
}

const io = new IntersectionObserver((entries) => {
    for (let entry of entries) {
        if (entry.isIntersecting) {
            let dom = entry.target;
            dom.classList.add("animate__fadeInUp");
            io.unobserve(dom);
        }
    }
});

export {
    SendNotification,
    switchClass,
    stopPropagation,
    GetProjectInformation,
    io
}