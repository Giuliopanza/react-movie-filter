
import { useState, useEffect } from 'react';

const Lista = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
];
    
function App() {

  const [Elementi, setElementi] = useState(Lista);

  const [search, setSearch] = useState('')

  const [filteredElementi, setFilteredElementi] = useState( Elementi )

  useEffect(() => {
    console.log("Eseguita!")

    setFilteredElementi(
      Elementi.filter( element => {
      return element.genre.includes( search )
      })
    )
  }, [ search ])
    
    return (
      <>    
      <div className="container mt-5 w-50">
        <h1>Elementi</h1>
        <label for="generi">Filtra per genere:</label>
          <select name="genere" id="genere"
            onChange={ (e) => setSearch(e.target.value)}
          >
            <option value=""></option>
            {Elementi.map((element1, i) => {                                 
              return (
                <option
                key={i}
                value={element1.genre}
                >
                  {element1.genre}
                </option>
              );
            })}
            </select>
            <ul className="list-group">
              {filteredElementi.map((element, index) => {
                return (
                  <li key={index} className="list-group-item">
                    {element.title}, {element.genre}
                  </li>
                );   
              })}
            </ul>
          </div>
        </>
    );
  }
    
export default App;
