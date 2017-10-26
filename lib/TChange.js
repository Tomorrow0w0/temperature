//攝氏溫度c ，將其轉化為華氏溫度f ，轉換公式為：f=c*9/5+32
var M = module.exports = {}
M.convert = function CtoF(C) 
{
    F = C*9/5+32;
    return F;
}

//華氏溫度f ，將其轉化為攝氏溫度C ，轉換公式為： C =F- 32*5/9
M.convert = function FtoC(f){
    C =F- 32*5/9
    return c
}
