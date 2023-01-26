export default function EventListener()
{
    function handleClick()
  {
    console.log("I was clicked")
  }

    return (
        <button onClick={handleClick}>Click Me</button>
    )
}