import React from "react"

export default function Messages() {
    const [messages, setMessages] = React.useState(["a"])
    return (
        <div>
            {
                messages.length > 0?  
                <h1>You have {messages.length} unread {messages.length>1?"messages":"message"}!</h1>:
                <h1>You are all caught up</h1>

            }
        </div>
    )
}