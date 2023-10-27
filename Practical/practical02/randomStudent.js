let studentArr = [
    "AZRIEL FAZL HO JUN REN"
    ,"PANG JUN QUAN EDISON"
    ,"SEK MING FENG"
    ,"SAM LEE HOM"
    ,"WANG ZIXING"
    ,"AYE THIRI MON"
    ,"ISAAC KWOK"
    ,"CHOW KAI JUN EUGENE"
    ,"NUR SYALINAH BINTE RUDYWAN"
    ,"AUNG KHANT HEIN"
    ,"TEH YONG JUN DYLAN"
    ,"SU YEE PHYO"
    ,"SANKAR HARSHAN"
    ,"ONG YU SHEN BRADEN"
    ,"SU HNIN KHINE"
    ,"TOO HONG YEE JASPER"
    ,"THET THET PHOO SAN"
    ,"AUNG PYAE PHYO"
    ,"JAYDEN TAN GIAN TECK"
    ,"AYE THIDA TUN"
];

for (let i=1; i<=5000; i++) {
    const position1 = Math.floor(Math.random() * studentArr.length);
    const position2 = Math.floor(Math.random() * studentArr.length);

    let temp = studentArr[position1];
    studentArr[position1] = studentArr[position2];
    studentArr[position2] = temp;
}

// console.log(studentArr);
console.log(`\n\nThe choosen one ----> ${studentArr[0]}\n\n`);