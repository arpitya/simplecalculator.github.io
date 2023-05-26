function Solve(val) {
         var v = document.getElementById('res');
         v.value += val;
      }
      function Result() {
         var num1 = document.getElementById('res').value;
         var num2 = evaluateExpression(num1);
         document.getElementById('res').value = num2;
      }
      function Clear() {
         var inp = document.getElementById('res');
         inp.value = '';
      }
      function Back() {
         var ev = document.getElementById('res');
         ev.value = ev.value.slice(0,-1);
      }
     function evaluateExpression(expression) {
        try {
           // Use a safer method to evaluate the expression
           return Function('return ' + expression)();
        } catch (error) {
           return 'Error';
        }
     }
     