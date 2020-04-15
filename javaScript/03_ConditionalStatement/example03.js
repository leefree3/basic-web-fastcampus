//Falsy: 표현식이 거짓으로 평가될 때
//false, 0, null, undefined, NaN, 빈문자열

//Truethy: 표현식이 참으로 평가될때
//Falsy의 반대: true, 37, 'Mark',{},[]

if (false) console.log(false);
if (0) console.log(0);
if ("") console.log("");
if (null) console.log(null);
if (undefined) console.log(undefined);
if (NaN) console.log(NaN);

if (true) console.log(true);
if (37) console.log(37);
if (-37) console.log(-37);
if ("Mark") console.log("Mark");
if ({}) console.log({});
if ([]) console.log([]);
