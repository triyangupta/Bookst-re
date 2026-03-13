import Book from "../model/book_model.js";

export const getBook=async(req,res)=>{
    try {
        const books= await Book.find();
        res.status(200).json(books)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error fetching books" })
    }
}