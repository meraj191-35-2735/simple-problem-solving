function totalPages(firstBook, secondBook, thirdBook) {
    const pagesPerFirstBook = 100;
    const pagesPerSecondBook = 200;
    const pagesPerThirdBook = 300;

    const totalPagesForFirstBook = pagesPerFirstBook * firstBook;
    const totalPagesForSecondBook = pagesPerSecondBook * secondBook;
    const totalPagesForThirdBook = pagesPerThirdBook * thirdBook;
    const totalPages = totalPagesForFirstBook + totalPagesForSecondBook + totalPagesForThirdBook;
    return "Total Pages Need : " + totalPages;

}
let booksPage = totalPages(3, 4, 6);
console.log(booksPage);