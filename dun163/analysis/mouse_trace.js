
/**
 * 自定义集合
 * */
function my_set() {
    let items = {}
    this.has = function (value) {
        return value in items
    }
    this.add = function (value) {
        if (!this.has(value)) {
            items[value] = value
            return true
        }
        return false
    }
    this.remove = function (value) {
        if (this.has(value)) {
            delete items[value]
            return true
        }
        return false
    }
    this.clear = function () {
        items = []
    }
    this.size = function () {
        return Object.keys(items).length
    }
    this.values = function () { // 提取items对象的所有属性，以数组形式返回
        return Object.keys(items)
    }
}

/**
 * 生成从 [minNum, maxNum] 的随机数
 * **/
function randomNum(minNum, maxNum, total){
    var res = new my_set();
    for (var i = 0; i < total;) {
        res.add(Math.ceil(Math.random()*(maxNum-minNum+1)+minNum));
        i = res.size();
    }
    return res;
}



function n(e, t) {
    function n(e, t) {
        return e.charCodeAt(Math.floor(t % e.length))
    }
    function i(e, t) {
        return t.split("").map(function(t, i) {
            return t.charCodeAt(0) ^ n(e, i)
        })
    }
    return t = i(e, t),
        _(t)
}
__toByte = function(e) {
    function t(t) {
        return e.apply(this, arguments)
    }
    return t.toString = function() {
        return e.toString()
    }
        ,
        t
}(function(e) {
    if (e < -128)
        return __toByte(128 - (-128 - e));
    if (e >= -128 && e <= 127)
        return e;
    if (e > 127)
        return __toByte(-129 + e - 127);
    throw new Error("1001")
});
var i = function(e, t) {
    return __toByte(e + t)
}
    , r = function(e, t) {
    if (null == e)
        return null;
    if (null == t)
        return e;
    for (var n = [], r = t.length, o = 0, a = e.length; o < a; o++)
        n[o] = i(e[o], t[o % r]);
    return n
}
    , o = function(e, t) {
    return e = __toByte(e),
        t = __toByte(t),
        __toByte(e ^ t)
}
    , a = function(e, t) {
    if (null == e || null == t || e.length != t.length)
        return e;
    for (var n = [], i = e.length, r = 0, a = i; r < a; r++)
        n[r] = o(e[r], t[r]);
    return n
}
    , s = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]
    , l = function(e) {
    var t = [];
    return t.push(s[e >>> 4 & 15]),
        t.push(s[15 & e]),
        t.join("")
}
    , u = function(e) {
    var t = e.length;
    if (null == e || t < 0)
        return new String("");
    for (var n = [], i = 0; i < t; i++)
        n.push(l(e[i]));
    return n.join("")
}
    , f = function(e) {
    if (null == e || 0 == e.length)
        return [];
    for (var t = new String(e), n = [], i = t.length / 2, r = 0, o = 0; o < i; o++) {
        var a = parseInt(t.charAt(r++), 16) << 4
            , s = parseInt(t.charAt(r++), 16);
        n[o] = __toByte(a + s)
    }
    return n
}
    , c = function(e) {
    if (null == e || void 0 == e)
        return e;
    for (var t = encodeURIComponent(e), n = [], i = t.length, r = 0; r < i; r++)
        if ("%" == t.charAt(r)) {
            if (!(r + 2 < i))
                throw new Error("1009");
            n.push(f(t.charAt(++r) + "" + t.charAt(++r))[0])
        } else
            n.push(t.charCodeAt(r));
    return n
}
    , j = function(e) {
    var t = [];
    return t[0] = e >>> 24 & 255,
        t[1] = e >>> 16 & 255,
        t[2] = e >>> 8 & 255,
        t[3] = 255 & e,
        t
}
    , d = function(e) {
    var t = j(e);
    return u(t)
}
    , h = function(e, t, n) {
    var i = [];
    // if (null == e || 0 == e.length)
    //     return i;
    if (e.length < n)
        throw new Error("1003");
    for (var r = 0; r < n; r++)
        i[r] = e[t + r];
    return i
}
    , p = function(e, t, n, i, r) {
    if (null == e || 0 == e.length)
        return n;
    if (null == n)
        throw new Error("1004");
    if (e.length < r)
        throw new Error("1003");
    for (var o = 0; o < r; o++)
        n[i + o] = e[t + o];
    return n
}
    , y = function(e) {
    for (var t = [], n = 0; n < e; n++)
        t[n] = 0;
    return t
}
    , v = function(e) {
    return null == e || void 0 == e || "" == e
}
    , g = function() {
    return ["i", "/", "x", "1", "X", "g", "U", "0", "z", "7", "k", "8", "N", "+", "l", "C", "p", "O", "n", "P", "r", "v", "6", "\\", "q", "u", "2", "G", "j", "9", "H", "R", "c", "w", "T", "Y", "Z", "4", "b", "f", "S", "J", "B", "h", "a", "W", "s", "t", "A", "e", "o", "M", "I", "E", "Q", "5", "m", "D", "d", "V", "F", "L", "K", "y"]
}
    , b = function() {
    return "3"
}
    , m = function(e, t, n) {
    var i, r, o, a = g(), s = b(), l = [];
    if (1 == n)
        i = e[t],
            r = 0,
            o = 0,
            l.push(a[i >>> 2 & 63]),
            l.push(a[(i << 4 & 48) + (r >>> 4 & 15)]),
            l.push(s),
            l.push(s);
    else if (2 == n)
        i = e[t],
            r = e[t + 1],
            o = 0,
            l.push(a[i >>> 2 & 63]),
            l.push(a[(i << 4 & 48) + (r >>> 4 & 15)]),
            l.push(a[(r << 2 & 60) + (o >>> 6 & 3)]),
            l.push(s);
    else {
        if (3 != n)
            throw new Error("1010");
        i = e[t],
            r = e[t + 1],
            o = e[t + 2],
            l.push(a[i >>> 2 & 63]),
            l.push(a[(i << 4 & 48) + (r >>> 4 & 15)]),
            l.push(a[(r << 2 & 60) + (o >>> 6 & 3)]),
            l.push(a[63 & o])
    }
    return l.join("")
}
    , _ = function(e) {
    if (null == e || void 0 == e)
        return null;
    if (0 == e.length)
        return "";
    var t = 3;
    try {
        for (var n = [], i = 0; i < e.length; ) {
            if (!(i + t <= e.length)) {
                n.push(m(e, i, e.length - i));
                break
            }
            n.push(m(e, i, t)),
                i += t
        }
        return n.join("")
    } catch (r) {
        throw new Error("1010")
    }
}
    , w = function(e) {
    return _(c(e))
}
    , T = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117]
    , S = function(e) {
    var t = 4294967295;
    if (null != e)
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            t = t >>> 8 ^ T[255 & (t ^ i)]
        }
    return d(4294967295 ^ t, 8)
}
    , E = function(e) {
    return S(null == e ? [] : c(e))
}
    , R = [120, 85, -95, -84, 122, 38, -16, -53, -11, 16, 55, 3, 125, -29, 32, -128, -94, 77, 15, 106, -88, -100, -34, 88, 78, 105, -104, -90, -70, 90, -119, -28, -19, -47, -111, 117, -105, -62, -35, 2, -14, -32, 114, 23, -21, 25, -7, -92, 96, -103, 126, 112, -113, -65, -109, -44, 47, 48, 86, 75, 62, -26, 72, -56, -27, 66, -42, 63, 14, 92, 59, -101, 19, -33, 12, -18, -126, -50, -67, 42, 7, -60, -81, -93, -86, 40, -69, -37, 98, -63, -59, 108, 46, -45, 93, 102, 65, -79, 73, -23, -46, 37, -114, -15, 44, -54, 99, -10, 60, -96, 76, 26, 61, -107, 18, -116, -55, -40, 57, -76, -82, 45, 0, -112, -77, 29, 43, -30, 109, -91, -83, 107, 101, 81, -52, -71, 84, 36, -41, 68, 39, -75, -122, -6, 11, -80, -17, -74, -73, 35, 49, -49, -127, 80, 103, 79, -25, 52, -43, 56, 41, -61, -24, 17, -118, 115, -38, 8, -78, 33, -85, -106, 58, -98, -108, 94, 116, -125, -51, -9, 71, 82, 87, -115, 9, 69, -123, 123, -117, 113, -22, -124, -87, 64, 13, 21, -89, -2, -99, -97, 1, -4, 34, 20, 83, 119, 30, -12, -110, -66, 118, -48, 6, -36, 104, -58, -102, 97, 5, -20, 31, -72, 70, -39, 67, -68, -57, 110, 89, 51, 10, -120, 28, 111, 127, 22, -3, 54, 53, -1, 100, 74, 50, 91, 27, -31, -5, -64, 124, -121, 24, -13, 95, 121, -8, 4]
    , k = 4
    , C = 4
    , O = 4
    , I = 4
    , $ = function(e) {
    var t = [];
    if (null == e || void 0 == e || 0 == e.length)
        return y(C);
    if (e.length >= C)
        return h(e, 0, C);
    for (var n = 0; n < C; n++)
        t[n] = e[n % e.length];
    return t
}
    , X = function(e) {
    if (null == e || void 0 == e || 0 == e.length)
        return y(k);
    var t = e.length
        , n = 0;
    n = t % k <= k - O ? k - t % k - O : 2 * k - t % k - O;
    var i = [];
    p(e, 0, i, 0, t);
    for (var r = 0; r < n; r++)
        i[t + r] = 0;
    var o = j(t);
    return p(o, 0, i, t + n, O),
        i
}
    , x = function(e) {
    if (null == e || e.length % k != 0)
        throw new Error("1005");
    for (var t = [], n = 0, i = e.length / k, r = 0; r < i; r++) {
        t[r] = [];
        for (var o = 0; o < k; o++)
            t[r][o] = e[n++]
    }
    return t
}
    , A = function(e) {
    var t = e >>> 4 & 15
        , n = 15 & e
        , i = 16 * t + n;
    return R[i]
}
    , P = function(e) {
    if (null == e)
        return null;
    for (var t = [], n = 0, i = e.length; n < i; n++)
        t[n] = A(e[n]);
    return t
}
    , N = function() {
    for (var e = [], t = 0; t < I; t++) {
        var n = 256 * Math.random();
        n = Math.floor(n),
            e[t] = __toByte(n)
    }
    return e
}
    , M = function(e, t) {
    if (null == e)
        return null;
    for (var n = __toByte(t), i = [], r = e.length, a = 0; a < r; a++)
        i.push(o(e[a], n));
    return i
}
    , D = function(e, t) {
    if (null == e)
        return null;
    for (var n = __toByte(t), r = [], o = e.length, a = 0; a < o; a++)
        r.push(i(e[a], n));
    return r
}
    , M = function(e, t) {
    if (null == e)
        return null;
    for (var n = __toByte(t), i = [], r = e.length, a = 0; a < r; a++)
        i.push(o(e[a], n));
    return i
}
    , L = function(e) {
    var t = M(e, 56)
        , n = D(t, -40)
        , i = M(n, 103);
    return i
}
    , V = function(e, t) {
    null == e && (e = []);
    var n = N();
    t = $(t),
        t = a(t, $(n)),
        t = $(t);
    var i = t
        , o = X(e)
        , s = x(o)
        , l = [];
    p(n, 0, l, 0, I);
    for (var u = s.length, f = 0; f < u; f++) {
        var c = L(s[f])
            , j = a(c, t)
            , d = r(j, i);
        j = a(d, i);
        var h = P(j);
        h = P(h),
            p(h, 0, l, f * k + I, k),
            i = h
    }
    return l
}
    , B = function(e) {
    var t = "14731382d816714fC59E47De5dA0C871D3F";
    if (null == t || void 0 == t)
        throw new Error("1008");
    null != e && void 0 != e || (e = "");
    var n = e + E(e)
        , i = c(n)
        , r = c(t)
        , o = V(i, r);
    return _(o)
};


var my_sample = function(e, t, token) {
    var array_length = e.length;
    if (array_length <= t)
        return e;
    for (var i = [], r = 0, o = 0; o < array_length; o++)
        o >= r * (array_length - 1) / (t - 1) && (i.push(n(token, e[o]+"")), r += 1);
    return i
}


function my_encrypt(traceDataArray, token, position_left) {
    var _n = my_sample(traceDataArray, 50, token);
    var value_parseInt = parseInt(position_left, 10) / 320 * 100;
    var value_p = n(token, value_parseInt + "");
    var r = B(value_p);
    var value_d = B(_n.join(":"));
    var value_ext = B(n(token, 1 + "," + traceDataArray.length));

    var data = {
        d: value_d,
        m: "",
        p: r,
        ext: value_ext
    }
    data = JSON.stringify(data);
    console.log("data:")
    console.log(data)
    return data;
}



// var token = "d31197478b1b4c95a6fb28c36174a945"
// var traceDataArray =  [[4,-1,81],[5,-2,89],[5,-3,97],[6,-4,105],[7,-5,113],[8,-6,122],[8,-8,137],[8,-9,145],[8,-10,159],[8,-11,167],[9,-13,183],[9,-13,191],[10,-14,203],[10,-15,211],[10,-16,219],[11,-17,227],[12,-17,235],[12,-17,243],[12,-18,255],[13,-18,285],[14,-18,293],[15,-18,313],[16,-18,322],[16,-18,329],[18,-18,337],[19,-18,345],[20,-18,354],[21,-18,361],[22,-18,370],[23,-18,377],[24,-17,386],[26,-17,391],[27,-15,400],[28,-14,410],[31,-13,415],[32,-12,427],[33,-10,431],[35,-9,441],[36,-8,447],[38,-7,456],[38,-6,466],[40,-5,472],[40,-5,479],[40,-4,488],[42,-3,495],[43,-2,504],[44,-2,511],[45,-1,518],[46,-1,525],[47,-1,534],[48,-1,542],[48,0,550],[49,0,573],[50,0,581],[50,1,597],[51,2,605],[52,2,613],[52,3,622],[53,3,629],[55,3,638],[56,4,643],[57,6,652],[59,7,659],[61,8,668],[64,9,675],[65,11,684],[67,11,691],[69,11,700],[71,12,708],[72,12,716],[73,12,724],[74,12,731],[76,12,740],[77,12,747],[78,12,755],[80,12,761],[80,12,770],[80,12,774],[82,12,777],[83,12,786],[84,12,793],[85,12,802],[87,11,809],[88,11,818],[89,10,825],[91,9,834],[92,8,842],[93,7,850],[95,7,858],[96,6,866],[97,5,872],[97,5,874],[99,3,879],[100,3,888],[101,2,895],[102,0,904],[102,-1,911],[103,-2,919],[104,-4,927],[105,-5,936],[106,-6,944],[107,-7,952],[107,-7,958],[108,-9,959],[110,-10,968],[110,-11,975],[111,-12,984],[112,-13,990],[112,-13,997],[112,-14,1006],[113,-15,1013],[114,-16,1029],[114,-17,1038],[115,-18,1045],[115,-19,1054],[116,-21,1062],[117,-21,1070],[118,-22,1085],[118,-23,1093],[119,-23,1101],[120,-24,1109],[120,-25,1116],[120,-25,1124],[121,-25,1135],[122,-25,1143],[122,-26,1152],[123,-26,1159],[124,-28,1168],[125,-29,1175],[126,-29,1184],[128,-29,1191],[128,-29,1200],[129,-30,1208],[130,-31,1216],[132,-31,1224],[132,-31,1231],[134,-31,1240],[136,-31,1245],[136,-32,1254],[138,-32,1261],[140,-32,1270],[140,-32,1277],[142,-32,1286],[143,-32,1293],[144,-32,1302],[146,-32,1309],[147,-32,1318],[148,-32,1325],[149,-32,1334],[151,-32,1341],[152,-32,1350],[153,-31,1356],[155,-30,1363],[156,-29,1372],[158,-27,1379],[159,-27,1388],[160,-26,1395],[162,-25,1404],[164,-23,1411],[164,-22,1420],[166,-21,1427],[168,-21,1436],[168,-19,1444],[169,-18,1452],[171,-17,1459],[172,-15,1468],[174,-14,1474],[175,-13,1481],[176,-12,1490],[178,-11,1497],[180,-9,1506],[181,-9,1521],[183,-8,1529],[184,-7,1538],[185,-6,1545],[187,-6,1554],[188,-5,1561],[189,-5,1570],[191,-4,1577],[192,-3,1586],[193,-2,1593],[194,-2,1600],[196,-1,1608],[196,-1,1616],[198,-1,1624],[200,-1,1631],[200,-1,1640],[202,-1,1647],[203,-1,1656],[204,-1,1663],[205,-1,1672],[206,-1,1679],[208,-1,1688],[208,-1,1695],[210,-1,1709],[212,-1,1718],[212,-1,1725],[214,-1,1734],[216,-1,1741],[216,-2,1750],[218,-3,1758],[220,-5,1765],[221,-6,1774],[222,-7,1781],[224,-9,1790],[225,-10,1797],[227,-12,1806],[228,-13,1813],[229,-14,1822],[231,-16,1829],[232,-17,1838],[234,-19,1843],[235,-20,1852],[236,-21,1859],[238,-22,1868],[240,-23,1875],[240,-24,1884],[240,-24,1891],[242,-25,1900],[242,-25,1908],[244,-26,1915],[244,-26,1924],[245,-27,1931],[247,-28,1940],[248,-29,1947],[248,-29,1954],[250,-29,1961],[251,-30,1977],[252,-30,1986],[252,-31,1997],[253,-31,2010],[254,-31,2018],[255,-31,2029],[256,-31,2061],[256,-31,2079],[257,-31,2095],[258,-31,2107],[259,-31,2131],[260,-31,2151],[260,-31,2159],[262,-31,2175],[263,-31,2192],[264,-30,2197],[264,-30,2209],[265,-29,2217],[266,-29,2225],[267,-29,2233],[267,-29,2241],[268,-29,2249],[269,-29,2265],[269,-28,2273],[270,-28,2289],[272,-28,2297],[272,-27,2309],[272,-27,2317],[272,-26,2323],[273,-26,2331],[273,-25,2343],[274,-25,2383],[275,-25,2391],[276,-24,2403],[276,-24,2449],[276,-23,2457],[277,-22,2469],[278,-21,2485],[278,-21,2493],[288,-4,2635],[288,-3,2643],[288,-2,2659]];
// var position_left = 78.5
// var data = my_encrypt(traceDataArray, token, position_left);
// console.log("data: ", data);


module.exports = {
    "encrypt_trace": my_encrypt,
}


/**
 *
 下面这个轨迹是在前端采集的，不能直接写死，需要根据滑块的缺口来自动生成，然后后面随机抽样50个点即可

 [[4,-1,81],[5,-2,89],[5,-3,97],[6,-4,105],[7,-5,113],[8,-6,122],[8,-8,137],[8,-9,145],[8,-10,159],[8,-11,167],[9,-13,183],[9,-13,191],[10,-14,203],[10,-15,211],[10,-16,219],[11,-17,227],[12,-17,235],[12,-17,243],[12,-18,255],[13,-18,285],[14,-18,293],[15,-18,313],[16,-18,322],[16,-18,329],[18,-18,337],[19,-18,345],[20,-18,354],[21,-18,361],[22,-18,370],[23,-18,377],[24,-17,386],[26,-17,391],[27,-15,400],[28,-14,410],[31,-13,415],[32,-12,427],[33,-10,431],[35,-9,441],[36,-8,447],[38,-7,456],[38,-6,466],[40,-5,472],[40,-5,479],[40,-4,488],[42,-3,495],[43,-2,504],[44,-2,511],[45,-1,518],[46,-1,525],[47,-1,534],[48,-1,542],[48,0,550],[49,0,573],[50,0,581],[50,1,597],[51,2,605],[52,2,613],[52,3,622],[53,3,629],[55,3,638],[56,4,643],[57,6,652],[59,7,659],[61,8,668],[64,9,675],[65,11,684],[67,11,691],[69,11,700],[71,12,708],[72,12,716],[73,12,724],[74,12,731],[76,12,740],[77,12,747],[78,12,755],[80,12,761],[80,12,770],[80,12,774],[82,12,777],[83,12,786],[84,12,793],[85,12,802],[87,11,809],[88,11,818],[89,10,825],[91,9,834],[92,8,842],[93,7,850],[95,7,858],[96,6,866],[97,5,872],[97,5,874],[99,3,879],[100,3,888],[101,2,895],[102,0,904],[102,-1,911],[103,-2,919],[104,-4,927],[105,-5,936],[106,-6,944],[107,-7,952],[107,-7,958],[108,-9,959],[110,-10,968],[110,-11,975],[111,-12,984],[112,-13,990],[112,-13,997],[112,-14,1006],[113,-15,1013],[114,-16,1029],[114,-17,1038],[115,-18,1045],[115,-19,1054],[116,-21,1062],[117,-21,1070],[118,-22,1085],[118,-23,1093],[119,-23,1101],[120,-24,1109],[120,-25,1116],[120,-25,1124],[121,-25,1135],[122,-25,1143],[122,-26,1152],[123,-26,1159],[124,-28,1168],[125,-29,1175],[126,-29,1184],[128,-29,1191],[128,-29,1200],[129,-30,1208],[130,-31,1216],[132,-31,1224],[132,-31,1231],[134,-31,1240],[136,-31,1245],[136,-32,1254],[138,-32,1261],[140,-32,1270],[140,-32,1277],[142,-32,1286],[143,-32,1293],[144,-32,1302],[146,-32,1309],[147,-32,1318],[148,-32,1325],[149,-32,1334],[151,-32,1341],[152,-32,1350],[153,-31,1356],[155,-30,1363],[156,-29,1372],[158,-27,1379],[159,-27,1388],[160,-26,1395],[162,-25,1404],[164,-23,1411],[164,-22,1420],[166,-21,1427],[168,-21,1436],[168,-19,1444],[169,-18,1452],[171,-17,1459],[172,-15,1468],[174,-14,1474],[175,-13,1481],[176,-12,1490],[178,-11,1497],[180,-9,1506],[181,-9,1521],[183,-8,1529],[184,-7,1538],[185,-6,1545],[187,-6,1554],[188,-5,1561],[189,-5,1570],[191,-4,1577],[192,-3,1586],[193,-2,1593],[194,-2,1600],[196,-1,1608],[196,-1,1616],[198,-1,1624],[200,-1,1631],[200,-1,1640],[202,-1,1647],[203,-1,1656],[204,-1,1663],[205,-1,1672],[206,-1,1679],[208,-1,1688],[208,-1,1695],[210,-1,1709],[212,-1,1718],[212,-1,1725],[214,-1,1734],[216,-1,1741],[216,-2,1750],[218,-3,1758],[220,-5,1765],[221,-6,1774],[222,-7,1781],[224,-9,1790],[225,-10,1797],[227,-12,1806],[228,-13,1813],[229,-14,1822],[231,-16,1829],[232,-17,1838],[234,-19,1843],[235,-20,1852],[236,-21,1859],[238,-22,1868],[240,-23,1875],[240,-24,1884],[240,-24,1891],[242,-25,1900],[242,-25,1908],[244,-26,1915],[244,-26,1924],[245,-27,1931],[247,-28,1940],[248,-29,1947],[248,-29,1954],[250,-29,1961],[251,-30,1977],[252,-30,1986],[252,-31,1997],[253,-31,2010],[254,-31,2018],[255,-31,2029],[256,-31,2061],[256,-31,2079],[257,-31,2095],[258,-31,2107],[259,-31,2131],[260,-31,2151],[260,-31,2159],[262,-31,2175],[263,-31,2192],[264,-30,2197],[264,-30,2209],[265,-29,2217],[266,-29,2225],[267,-29,2233],[267,-29,2241],[268,-29,2249],[269,-29,2265],[269,-28,2273],[270,-28,2289],[272,-28,2297],[272,-27,2309],[272,-27,2317],[272,-26,2323],[273,-26,2331],[273,-25,2343],[274,-25,2383],[275,-25,2391],[276,-24,2403],[276,-24,2449],[276,-23,2457],[277,-22,2469],[278,-21,2485],[278,-21,2493],[288,-4,2635],[288,-3,2643],[288,-2,2659]]

 轨迹详细描述：[Math.round(i.dragX < 0 ? 0 : i.dragX), Math.round(i.clientY - i.startY), a.now() - i.beginTime]
 里面的每个元素的含义是：[4,-1,81]分表对应 [x, y, t从开始到现在经过的时间]

 下面的描述都是对于第一个鼠标按下的点来作为原点：(屏幕从上往下的方向是y轴正方向，从屏幕左边往右边是x轴正方向)
 x表示：经过多次测试，推测含义是：表示这个当前滑块距离底图左边的距离，开始默认距离就是 4
 y表示：对于原点来说，y距离
 t表示：当前轨迹从第一个点到现在这个点所经过的时间


 *
 * */







