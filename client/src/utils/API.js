


export default {

    async searchBooks(title) {
        const url = `https://www.googleapis.com/books/v1/volumes?q=${title}`;
        const response = await fetch(url);
        return response.json();
    },

    async saveBook(book) {
        
        const response = await fetch('/api/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        })

        return response.json()
    },

    async deleteBook(book) {
        console.log({book});
        const response = await fetch('/api/books/' + book._id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
           
        })

        return response.json()
    },

    async getBooks() {

        const response = await fetch('/api/books', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
        })

    }
}