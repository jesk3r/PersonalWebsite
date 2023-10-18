// This is a static page mocking an "About Us" section for our fake user data
export default function AboutPage() {
  return (

    <header className="container">
      <h1 className="d-inline text-danger">DHEERAJ THIND</h1>
      <nav className="d-inline"> 
        <ul className="list-inline">
          <li className="d-inline m-2"><a href="/">About Me</a></li>
          <li className="d-inline m-2"><a href="/portfolio">Portfolio</a></li>
          <li className="d-inline m-2"><a href="/contact">Contact</a></li>
          <li className="d-inline m-2-"><a href="/resume">Resume</a></li>
        </ul>
      </nav>
    </header>

  );
    
}
