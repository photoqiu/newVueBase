import 'whatwg-fetch'
import 'fetch-jsonp'
import $ from 'jQuery'


export default {
    doJsonpDatas(url, cb, errorCb) {
        fetchJsonp(url, {
            credentials: 'include'
        }).then(function(response) {
            cb(response.json())
        }).then(function(data) {
            cb(data)
        }).catch(function(error) {
            errorCb(error)
        })
    },
    jQueryPostDatas(urls, datas, cb, errorCb) {
        $.ajax({
            url: urls,
            type: 'POST',
            data: datas,
            cache: false,
            processData: false,
            contentType: false
        }).done(function(msg) {
            cb(msg);
        }).fail(function() {
            errorCb("error");
        })
    },
    doFormPostRawDatas(url, datas, cb, errorCb) {
        fetch(url, {
            method: 'POST',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            credentials: 'same-origin',
            body: datas
        }).then(function(response) {
            cb(response)
        }).catch(function(error) {
            errorCb(error)
        })
    },
    doFormPostDatas(url, datas, cb, errorCb) {
        fetch(url, {
            method: 'POST',
            headers: {
                "Content-type": "multipart/form-data"
            },
            credentials: 'same-origin',
            body: datas
        }).then(function(response) {
            return response.json()
        }).then(function(json) {
            cb(json)
        }).catch(function(ex) {
            errorCb(ex)
        })
    },
    doFormDatas(url, datas, cb, errorCb) {
        fetch(url, {
            method: 'POST',
            credentials: 'same-origin',
            body: datas
        }).then(function(response) {
            cb(response)
        }).catch(function(error) {
            errorCb(error)
        })
    },
    doPostDatas(url, datas, cb, errorCb) {
        fetch(url, {
            credentials: 'same-origin',
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datas)
        }).then(function(response) {
            return response.json()
        }).then(function(json) {
            cb(json)
        }).catch(function(ex) {
            errorCb(ex)
        })
    },
    doPostRawDatas(url, datas, cb, errorCb) {
        fetch(url, {
            credentials: 'same-origin',
            mimeType: "multipart/form-data",
            headers: {
                "Cache-Control": "no-cache",
                "accept-encoding": "gzip, deflate",
                "Connection": "keep-alive",
                "cache-control": "no-cache",
                'Content-Type': 'multipart/form-data;charset=utf-8'
            },
            method: 'POST',
            body: datas
        }).then(function(response) {
            return response.json()
        }).then(function(json) {
            cb(json)
        }).catch(function(ex) {
            errorCb(ex)
        })
    },
    doPostJsonDatas(url, datas, cb, errorCb) {
        fetch(url, {
            credentials: 'same-origin',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(datas)
        }).then(function(response) {
            return response.json()
        }).then(function(json) {
            cb(json)
        }).catch(function(ex) {
            errorCb(ex)
        })
    },
    doGetDatas(url, cb, errorCb) {
        fetch(url, {
                credentials: 'same-origin',
                method: 'GET'
            }).then(checkStatus)
            .then(parseJSON)
            .then(function(data) {
                cb(data)
            }).catch(function(error) {
                errorCb(error)
            })
    }
}