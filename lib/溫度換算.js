//攝氏溫度c ，將其轉化為華氏溫度f ，轉換公式為：f=c*9/5+32
var M = module.exports = {}
M.convert = function CtoF(C) 
{
    F = C*9/5+32;
    return F;
}

console.log(CtoF(38));