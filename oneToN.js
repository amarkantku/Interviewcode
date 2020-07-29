// Question: Write a recursive function to print the sequence from 0 to N.

function oneToN(n) {
  if (n == 0) {
    console.log(n);
    return n;
  } else {
    oneToN(--n);
    console.log(n + 1);
  }
}
oneToN(5);
