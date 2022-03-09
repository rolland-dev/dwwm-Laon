export class Book {

    constructor(title, author, description, pages, currentPage, read) {
        this.title = title;
        this.author = author;
        this.description = description;
        this.pages = pages;
        this.currentPage = currentPage;
        this.read = read;
    }

    readBook(page) {
        if (page < 1 || page > this.pages) {
            return 0;
        } else if (page >= 1 && page <= this.pages) {
            this.currentPage = page;
        } else {
            this.currentPage = page;
            this.read = true;
            return 1;
        }

    }

}



let premierlivre = new Book("Moi seul", "didier", "petit test en js", 25, 2, false);
let secondlivre = new Book("Moi accompagné", "rolland", "petit test en js la suite", 30, 5, false);
let troisiemelivre = new Book("Moi seul et accompagné", "didier rolland", "petit test en js suite et fin", 52, 15, false);


export const books = [premierlivre, secondlivre, troisiemelivre];