import { Typography } from '@mui/material';

export function BookList({ books, loading, error }) {
  return (
    <div data-test="book-list">
      {
        books?.map(book => (
          <div className="book-item" key={book.name}>
            <Typography variant="h5" component="h5" data-test="heading">{book.name}</Typography>
          </div>
        ))
      }
    </div>
  )
}