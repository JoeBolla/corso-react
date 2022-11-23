import React, {useState, useEffect} from 'react'
import { bookData } from './constants/bookData'
import './App.css'

/*
REGOLE JSX:
  - ritornare un singolo elemento;
  - usare camelcase per gli attributi HTML;
  - usare className invece che class;
  - chiudere ogni elemento come in HTML standard, o con self closing tag
    o con tag apertura/chiusura.
*/

/*
const firstBook = {
    title: "Develhope - Corso Full Stack Web", 
    imgSrc: "https://d9hhrg4mnvzow.cloudfront.net/www.develhope.co/full-stack-web/9400879d-andreatheman_10dw0en000000000000028.png",
    author: "Develhope",
    price: "4500 €",
    //copies: "1"
  }
  */
  
//   const Book = ({ book, children }) => {
//     console.log("children", children);
//     const { title, urlImg, author, price, currency } = book;
//       // props.book.NOMEPROPRIETA` -> Quindi: props contiene book e ha una 
//       //   proprietà chiamata NOMEPROPRIETA`
//     return (
//       <article className="book">
//         <img src={urlImg} alt = "book" />
//         <h4>{title}</h4>
//         <h6>{author}</h6>
//         <p>{price} {currency}</p>
//         {children}
//       </article>
//     );
//   };
  
//   const BookList = () => {
//     return (
//     <>    
//     <section className='book-list'>
//     {bookData.map(el => (
//         <>
//         <Book book = {el} />
//         </>
//     ))}
//     </section>
//     </>
//     );
//   };

const Card = (props) => {
    console.log('props', props);
    const {image, name, status, species} = props.character;
return    (
    <div className='card'>
        <img src= {image} alt='img' />
        <h2>{name}</h2>
        <p>{status} - {species}</p>
    </div>
)
}    

const App = () => {
    const [data, setData] = useState ([]);

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character").then(res => res.json()).then(body => {
            setData(body.results)
        })
    }, [])
  return (
    <section className='card-section'>
        {
            data.map( el => (
                <Card character = {el}/>
            ))
        }
    </section>
  )
}

export default App