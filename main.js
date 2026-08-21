console.setSize(500, 800);
console.show();
auto.waitFor();

var c = 0;
var sH = device.height;
var isB = false;
var lQ = null;
var rc = 0;

while (c < 1000) {
    if (isB) {
        sleep(20);
        continue;
    }

    var t = textMatches(/^\d{1,2}\?\d{1,2}$/).findOne(800);
    if (t) {
        var bd = t.bounds();
        if (!bd) {
            sleep(5);
            continue;
        }
        var v = t.text();
        if (!v) {
            sleep(5);
            continue;
        }
        var m = v.match(/^(\d{1,2})\?(\d{1,2})$/);
        if (!m) {
            sleep(5);
            continue;
        }

        var w = bd.right - bd.left;
        var h = bd.bottom - bd.top;
        if (w > 0 && h > 0 && bd.top <= sH * 0.68) {
            var n1 = Number(m[1]);
            var n2 = Number(m[2]);

            if (v === lQ) {
                rc++;
            } else {
                rc = 0;
                lQ = v;
            }
            var inv = rc >= 3;

            c++;
            isB = true;
            if (n1 > n2) {
                if (inv) {
                    xiaoyu();
                } else {
                    dayu();
                }
            } else {
                if (inv) {
                    dayu();
                } else {
                    xiaoyu();
                }
            }
            sleep(15);
            isB = false;
        }
    } else {
        sleep(20);
    }

    var pk = textMatches(/^\s*继续PK\s*$/).findOne(300);
    if (pk) {
        var b = pk.bounds();
        if (b) {
            var pw = b.right - b.left;
            var ph = b.bottom - b.top;
            if (pw > 0 && ph > 0 && b.top > 0) {
                click(b.centerX(), b.centerY());
                lQ = null;
                rc = 0;
                sleep(5000);
            }
        }
    }
}

function dayu() {
    gesture(95, [
        [426, 1714],
        [790, 1824],
        [428, 1900]
    ]);
}

function xiaoyu() {
    gesture(95, [
        [799, 1567],
        [381, 1774],
        [788, 1914]
    ]);
}