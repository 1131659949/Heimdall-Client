function utf16toEntities(str) {
    const patt = /[\ud800-\udbff][\udc00-\udfff]/g; // 检测utf16字符正则
    str = str.replace(patt, (char) => {
        let H;
        let L;
        let code;
        let s;

        if (char.length === 2) {
            H = char.charCodeAt(0); // 取出高位
            L = char.charCodeAt(1); // 取出低位
            code = (H - 0xD800) * 0x400 + 0x10000 + L - 0xDC00; // 转换算法
            s = `&#${code};`;
        } else {
            s = char;
        }

        return s;
    });

    return str;
}
// 表情解码
function entitiestoUtf16(strObj) {
    const patt = /&#\d+;/g;
    const arr = strObj.match(patt) || [];

    let H;
    let L;
    let code;

    for (let i = 0; i < arr.length; i += 1) {
        code = arr[i];
        code = code.replace('&#', '').replace(';', '');
        // 高位
        H = Math.floor((code - 0x10000) / 0x400) + 0xD800;
        // 低位
        L = ((code - 0x10000) % 0x400) + 0xDC00;
        code = `&#${code};`;
        const s = String.fromCharCode(H, L);
        strObj = strObj.replace(code, s);
    }
    return strObj;
}

function friendlyFormatTime(stringTime) {
    let str = stringTime * 1000;
    //将字符串转换成时间格式
    let timePublish = new Date(str);
    let timeNow = new Date();
    let minute = 1000 * 60;
    let hour = minute * 60;
    let day = hour * 24;
    let month = day * 30;
    let year = month * 12;
    let diffValue = timeNow - timePublish;
    let diffMonth = diffValue / month;
    let diffWeek = diffValue / (7 * day);
    let diffDay = diffValue / day;
    let diffHour = diffValue / hour;
    let diffMinute = diffValue / minute;
    let diffYear = diffValue / year;
    let result = null
    if (diffValue < 0) {
        result = "刚刚";
    } else if (diffYear > 1) {
        result = parseInt(diffYear) + "年前";
    } else if (diffMonth > 1) {
        result = parseInt(diffMonth) + "月前";
    } else if (diffWeek > 1) {
        result = parseInt(diffWeek) + "周前";
    } else if (diffDay > 1) {
        result = parseInt(diffDay) + "天前";
    } else if (diffHour > 1) {
        result = parseInt(diffHour) + "小时前";
    } else if (diffMinute > 1) {
        result = parseInt(diffMinute) + "分钟前";
    } else {
        result = "刚刚";
    }
    return result;
}


export {
    utf16toEntities,
    entitiestoUtf16,
    friendlyFormatTime
}