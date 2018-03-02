
// Integers and booleans
true
false
523
//-97

// Operations
7 + 12
89 - 12
9 * 21
16 / 2
5 < 2
9 <= 10
10 > 2
72 >= 92
4 == 5
9 != 12
true && false
true || false
!true

// Test of operators and precedence
3 + 4 * 10
(3 + 4) * 10
true || false && true
(true || !(false && false)) && true && (true || !false)
5 - 7 * 8 + 2 / 5 - 9
((5 - 7) * 8 + 2) / (5 - 9)
true || !false || 8 <= 7

// Identifier
foo
x

// Variable definition
var x = 7 + 10

// Assignment
i = i + 1

//While loop, test indentation
while(x < 7){
  var y = 5
  while(true){
    i = i + 1
    var x = 2
  }
}

//if statement, test indentation
if(z && true){
  if(x < 1){
    y = 1
    x = x + 1
  }
  else{
    if(true){
      z = 5
    }
  }
}
