//華氏溫度f ，將其轉化為攝氏溫度C ，轉換公式為： C =F- 32*5/9
var N = module.exports = {}

N.FtoC=function (f) {
    c =(f- 32)*5/9;
    return c
};

N.CtoF=function (C) {
    F = C*9/5+32;
    return F
};



console.log(N.FtoC(38));
console.log(N.CtoF(48));