import laptop from './img/laptop.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div>
          <div className='header'>
            <h1 className='w-header'>GTComputers</h1>
            <img src={laptop}/>
          </div>
          {/* <img src={tablet}/>
          <img src={laptop}/> */}
          <p>
            Professional Software Engineer and Hardware Enthusiast with years of experience building and maintaining PCs.
          </p>
        </div>
      </header>
      <body>
        <section className='lists'>
          <div className='list-box'>
            <h3 className='list-header'>Software</h3>
            <ul className='App-list'>
              <li>Windows 7/8/10</li>
              <li>MacOS (MacBook)</li>
              <li>iOS (iPhone, iPad)</li>
              <li>Android</li>
            </ul>
          </div>
          <div className='list-box'>
            <h3 className='list-header'>Hardware</h3>
            <ul className='App-list'>
              <li>Build Custom PCs</li>
              <li>Raspberry Pi Emulators</li>
              <li>Hardware Upgrades</li>
              <li>Troubleshooting</li>
            </ul>
          </div>
        </section>
        <p>
          GTComputers can help - If there is something related to computers or home tech and you don't see it listed, please ask! Rates will vary depending on the service(s). Currently serving the Arlington, VA area.
        </p>
      </body>
      <footer>
        <h3 className='list-header'>Contact:</h3>
        <div className='lists'>
          <div className='contact-item'>
            <p className='contact-label'>Email:</p>
            <a
              className="App-link"
              href="mailto: gcaras0@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              GCaras0@gmail.com
            </a>
          </div>
          <div className='contact-item'>
            <p className='contact-label'>Phone:</p>
            <a
            className="App-link"
            href="tel:7039752084"
            rel="noopener noreferrer"
          >
            (703) 975-2084
          </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
