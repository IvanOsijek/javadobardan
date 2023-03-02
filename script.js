let print = "";

for (let i=1; i<=10; i++) {
    for (let j=1; j<=10; j++) {
        print += j + " * " + i + " = " + (j*i) + "\n";
    }
    print +="______" + "\n"
}

console.log("Tablica množenja:" + "\n" + print)