let bookinfo = {
    bookTitle: "JavaScript from Beginner to Professional",
    author: {
        firstName: "Laurence",
        lastName: "Lars Svekis"
    },

    getTitle: function () { return this.bookTitle },

    getAuthorName: function () { return this.author.firstName + ' ' + this.author.lastName },

};

console.clear();
console.log("Book Title : " + bookinfo.getTitle());
console.log("Author Name : " + bookinfo.getAuthorName()); 
