


function Header()
{
  return (
    <nav>
      <img src="./logo-og.png"></img>
    </nav>
  )
}

function Footer()
{
  return(
    <footer>
      <small>0 2021 Ziroll development.All rights reserved</small>
    </footer>
  )
}

function MainContent()
{
  return(
    <div>
     
      <h1>Reasons,why I'm excited to learn React</h1>
  
          <ol>
            <li>I wanted to be a React Developer</li>
            <li>Its interesting</li>
          </ol>
          
    </div>
   
  )

}

function Page()
{
  return(
    <div>
      <Header/>
      <MainContent/>
      <Footer/>
    </div>
  )
}

ReactDOM.render
(
<Page/>, document.getElementById("root")
)