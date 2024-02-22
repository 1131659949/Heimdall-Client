import requests from "@/request/request"
import { ElNotification } from 'element-plus'
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
export {
    SendNotification
}