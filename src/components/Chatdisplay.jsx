import React from 'react'

const Chatdisplay = ({chat}) => {
  const styleYourMessage = {
    color:'#202124',
    textAlign:'left',
    fontSize:'25px',
    backgroundColor:'lightcoral',
    width:'fit-content',
    padding:'5px 10px',
    borderRadius:'15px',
    marginLeft:'auto',
    marginRight:'15px',
    marginBottom:'10px',
    marginTop:'10px',
    maxWidth:'400px',
    wordwrap:'break-word',
  }
  const styleTheirMessage = {
    color:'#202124',
    textAlign:'left',
    fontSize:'25px',
    backgroundColor:'#D6D6D7',
    width:'fit-content',
    padding:'5px 10px',
    borderRadius:'15px',
    marginLeft:'15px',
    marginRight:'auto',
    marginBottom:'10px',
    marginTop:'10px',
    maxWidth:'400px',
    wordwrap:'break-word',
  }
  return (
    <div>
      {chat.messages.map((message,i)=>{
        let writer
        chat.authors[i]==chat.users[0]._id ? writer = chat.users[0].firstName : writer = 'You'
        return <div key={message+i}>
          <div style={writer=='You'? styleYourMessage : styleTheirMessage}>
            {writer+': '+message}
            </div>
        </div>
      })}
    </div>
  )
}

export default Chatdisplay