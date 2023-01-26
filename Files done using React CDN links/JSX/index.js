

//Using Vanilla JS-------->imperative 
const h1=document.createElement("h1")
h1.textContent="Hello guys!"
h1.className="header"
document.getElementById("root").append(h1)



//using JSX
const h1element=<h2>This is a JSX Element</h2>
// ReactDOM.render(element,document.getElementById("root"))

console.log(h1);   
//output:-<h1 class="header">Hello guys!</h1>

console.log(h1element)
//output:-It creats a object out of JSX which describe DOM what we need to put on page

//{$$typeof: Symbol(react.element), type: 'h2', key: null, ref: null, props: {…}, …}
// $$typeof: Symbol(react.element)
// key: null
// props: {children: 'This is a JSX Element'}
// ref: null
// type: "h2"
// _owner: null
// _store: {validated: false}
// _self: null
// _source: null



//---------------------------------------------------------------------------------------------------------------------

function Navbar()
{
    return (
    <nav>
        <h1>Nature</h1>
        <ul>Pricing</ul>
        <ul>About</ul>
        <ul>Contact</ul>
    </nav>
    )
}

ReactDOM.render(
    <Navbar/>
,document.getElementById("root"))


document.getElementById('root').append(JSON.stringify(Navbar))