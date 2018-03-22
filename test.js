const googlehome = require("google-home-notifier");
const lang = "ja";

googlehome.device('GoogleHomer', lang);
googlehome.ip('XXX.XXX.XXX.XXX', lang);
googlehome.accent(lang);

let str = 'こんにちは。'

try {
    googlehome.notify(str, (res) => {
        console.log(res);
    });
} catch (err) {
    console.log(err);
}
