import React from 'react';
import Header from '../components/Header';
import './styles.css';
import repertoireImg from '../assets/repertoire.jpg'; 
import './styles.css';

const Repertoire = () => {
  return (
    <div>
      <Header />
      <div className="page_container">
        <div className="page_list page_box">
          <h2>Our Past Works</h2>
          <p>The following list is just some of the works we have played in the past:</p>
          <ul>
            <li>Bach JS: Art of Fugue (last fugue)</li>
            <li>Bach JS: Double Violin Concerto</li>
            <li>Bach JS: Violin Concerto in A Minor, 1st movement</li>
            <li>Bach JC: Cello Concerto , 2nd movement</li>
            <li>Beethoven: Piano Concerto No. 3, 1st movement.</li>
            <li>Beethoven: Symphonies 1, 2, 6, 7 and 8</li>
            <li>Bizet: Symphony in C</li>
            <li>Borodin: In the Steppes of Central Asia</li>
            <li>Brahms: St Antony Variations</li>
            <li>Butterworth: Banks of Green Willow</li>
            <li>Botterill: Flying Trapezes</li>
            <li>Charpentier: Prelude from Te Deum</li>
            <li>Carwithen: Suffolk Suite</li>
            <li>Coates: Miniature Suite & By the Sleepy Lagoon</li>
            <li>Copland: Appalachian Spring Suite</li>
            <li>Dvorak: Legends I-V</li>
            <li>Dvorak: Slavonic Dances 1-4</li>
            <li>Dvorak: Slavonic Rhapsody No. 1</li>
            <li>Dvorak: Symphony 9 (New World)</li>
            <li>Delius: Summer night on the river</li>
            <li>Elgar: Nimrod from Enigma Variations</li>
            <li>Faure: Elegie for Cello and orchestra</li>
            <li>Faure: Pelleas & Melisande Suite</li>
            <li>Grainger: Molly on the Shore</li>
            <li>Grieg: Peer Gynt Suite No. 1</li>
            <li>Handel: Water Music and Royal Fireworks music</li>
            <li>Haydn: Symphonies 99, 101, 102, 103, 104</li>
            <li>Haydn: Cello Concerto in D, Adagio</li>
            <li>Holst: Songs of The West</li>
            <li>Krommer: Double Clarinet Concerto</li>
            <li>MacCunn: Land of the Mountain and the Flood</li>
            <li>Mendelssohn: The Hebrides (Fingal's Cave) Overture</li>
            <li>Mendelssohn: Midsummer Night's Dream</li>
            <li>Mendelssohn: Symphony No. 5</li>
            <li>Mozart: Piano concerti K488 and K491, Symphony 41</li>
            <li>Mozart: Piano Concerto 24 in C minor, 2 movements</li>
            <li>Mozart: Symphony 31</li>
            <li>Mozart: Symphony 35 "Haffner"</li>
            <li>Mozart: Symphony 41 "Jupiter"</li>
            <li>Mozart: Violin Concerto No. 3 (Allegro)</li>
            <li>Offenbach: Ah, que j'aime les Militaires</li>
            <li>Paderewski: Piano concerto in A minor</li>
            <li>Rachmaninov: Variations on a theme by Paganini</li>
            <li>Rachmaninov: Piano Concerto No. 2 (Adagio)</li>
            <li>Ravel: Piano Concerto (second movement)</li>
            <li>Ravel: Bolero</li>
            <li>Reineke: Flute Concerto</li>
            <li>Rodrigo: Guitar Concerto, 2nd movement</li>
            <li>Rodrigo: Fantasia for Guitar and Orchestra</li>
            <li>Rossini: Overture "Barber of Seville"</li>
            <li>Rossini: Overture "La Gazza Ladra"</li>
            <li>Rossini: Overture "Semiramide"</li>
            <li>Satie: Gymnopedie No. 1</li>
            <li>Schubert: Piano Sonata (arranged by Cat V)</li>
            <li>Schubert: Symphonies 1, 5, 6, 8</li>
            <li>Schubert: Rosamunde Overture</li>
            <li>Stamitz: Cello Concerto in G, 2nd movement</li>
            <li>Strauss: Emperor Waltz</li>
            <li>Richard Strauss: Oboe Concerto</li>
            <li>Richard Strauss: Horn Concerto</li>
            <li>Richard Strauss: Kunstler Quadrille</li>
            <li>Sullivan: Overture to The Gondoliers</li>
            <li>Tchaikovsky: Swan Lake</li>
            <li>Telemann: Viola Concerto (first movement)</li>
            <li>Vaughan Williams: In the Fen Country</li>
            <li>Vaughan Williams: 49th Parallel</li>
            <li>Vivaldi: Violin Concerto in A minor R356. 1st movement</li>
            <li>Weber: Clarinet Concerto</li>
            <li>Weber: Clarinet Concertino</li>
          </ul>
        </div>

        <div className="page_image">
          <img src={repertoireImg}/>
        </div>
      </div>
    </div>
  );
};

export default Repertoire;
