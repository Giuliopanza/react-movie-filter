
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

      const [newElemento, setNewElementi] = useState('');

      const [search, setSearch] = useState('')

      const [filteredElementi, setFilteredElementi] = useState( Elementi )
    
      const addElemento = (e) => {
        e.preventDefault();
        const Elemento = newElemento.trim();
        setElementi([...Elementi, Elemento]);
        setNewElementi('');
      };

      useEffect(() => {
        setFilteredElementi(
          Elementi.filter( element => {
            return element.genre.toLowerCase().includes( search.toLowerCase() )
          })
        )
      }, [ search, Elementi ])
    
      return (
        <>    
          <div className="container mt-5 w-50">
            <h1>Elementi</h1>
            <label for="generi">Filtra per genere:</label>
            <select name="cars" id="cars">
            {Elementi.map((element1, i) => {                                 
                return (
                  <option key={i} value={element1.genre} onChange={ (e) => setSearch(e.target.value) }>{element1.genre}</option>
                );
              })}
            </select>
            <ul className="list-group">
              {Elementi.map((element, index) => {
                return (
                  <li key={index} className="list-group-item">
                    {element.title}, {element.genre}
                  </li>
                );   
              })}
            </ul>

            <form onSubmit={addElemento}>
              <input
                type="text"
                className="form-control"
                placeholder="Cosa devi fare?"
                value={newElemento}
                onChange={(e) => setNewElementi(e.target.value)}
              />
    
              <button className="btn btn-primary mt-3">Aggiungi</button>
            </form>
          </div>
        </>
      );
    }
    
    export default App;
