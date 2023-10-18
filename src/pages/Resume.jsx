// This is a static page mocking an "About Us" section for our fake user data
export default function Resume() {
  return (
    <>
      <h2 className="text-warning">Resume</h2>
      <p className="text-warning">Download my:  
      <span className="text-light">  
      <a className="m-1" href="https://writing.colostate.edu/guides/documents/resume/functionalsample.pdf" download>  
         resume
      </a>
      </span>
      </p>

      <h2 className="text-danger">Front-end Skills</h2>
      <ul className="list-inline text-info">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>Responsive Design</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>
  
      <h2 className="text-danger">Back-end Skills</h2>
      <ul className="list-inline text-info" >
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Seuqulize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
        <li>GraphQl</li>
      </ul>
    </>
  );
}
