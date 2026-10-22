new Vue({
    el: "#app",
    data: {
        newBook: "",
        notice: "Enter a book title.",
        filter: "all",
        books: []
    },
    methods: {
        addBook: function () {
            if (!this.newBook) return;
            this.books.push({ title: this.newBook, finished: false });
            this.newBook = "";
        },
        finishBook: function (book) {
            book.finished = true;
        }
    },
    computed: {
        visibleBooks: function () {
            if (this.filter === "all") return this.books;
            return this.books.filter(book => this.filter === "finished" ? book.finished : !book.finished);
        },
        finishedCount: function () {
            return this.books.filter(book => book.finished).length;
        }
    },
    watch: {
        newBook: function (title) {
            this.notice = title ? "Ready to add." : "Enter a book title.";
        }
    }
});
