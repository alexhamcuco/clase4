


// const BookRef = () => {

//     // collection reference
//     const bookRef = collection(db, 'books')

//     //get collection data
//     getDocs(bookRef)
//         .then((snapshot) => {
//             let books = []
//             snapshot.docs.forEach((doc) => {
//                 books.push({ ...doc.data(), id: doc.id })
//             })
//             console.log(books)
//         })
//         .catch(err => {
//             console.log(err.message);
//         });


//     // adding nuevo libro
//     const addBookForm = document.querySelector('.add')
//     addBookForm.addEventListener('submit', (e) => {
//         e.preventDefault()

//         //add new book
//         addDoc(colRef, {
//             title: addBookForm.title.value,
//             author: addBookForm.author.value,
//         })
//             .then(() => {
//                 addBookForm.reset()
//             })

//     })

// }

// export default BookRef