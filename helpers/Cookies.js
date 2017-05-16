class Cookie {
    static set(name,value,days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    }

    static get(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }

    static all() {
        var cookies = [];

        var keyValuePairs = document.cookie.split(';');

        for(var i = 0; i < keyValuePairs.length; i++) {
            var name = keyValuePairs[i].substring(0, keyValuePairs[i].indexOf('='));
            var value = keyValuePairs[i].substring(keyValuePairs[i].indexOf('=')+1);

            cookies.push({
                name: name,
                value: value
            });
        }

        return cookies;
    }

    static delete(name) {
        this.createCookie(name,"",-1);
    }
}

export default Cookie;

//
// export function createCookie(name,value,days) {
//     var expires = "";
//     if (days) {
//         var date = new Date();
//         date.setTime(date.getTime() + (days*24*60*60*1000));
//         expires = "; expires=" + date.toUTCString();
//     }
//     document.cookie = name + "=" + value + expires + "; path=/";
// }
//
// export function readCookie(name) {
//     var nameEQ = name + "=";
//     var ca = document.cookie.split(';');
//     for(var i=0;i < ca.length;i++) {
//         var c = ca[i];
//         while (c.charAt(0)==' ') c = c.substring(1,c.length);
//         if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
//     }
//     return null;
// }
//
// export function eraseCookie(name) {
//     createCookie(name,"",-1);
// }
