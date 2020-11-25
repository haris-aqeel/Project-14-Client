import React from "react"
import Lolly from "../component/Lolly"
import { API } from "aws-amplify"

const query  = `
    query getLollyBySlug($path: String!) {
        getLollyBySlug(path: $path) {
            recipientName
            senderName
            message   
            topColor
            mediumColor
            bottomColor
            path
        }
    }
`

export default function NotFound(x) {
   
  const [data, setdata] = React.useState(undefined);

  var queryPath = x?.location.pathname.slice(7)
  
  React.useEffect(()=> {
    
    const response = API.graphql({
      query: query,
      variables: {path: queryPath}
    })

    response.then((res)=> {
      setdata(res.data)
      console.log(data)

    }).catch((err)=> {
      console.log(err)
    })

    console.log(data)

  }, [queryPath])
  
  return (
    <div>
        {data !== undefined ? 

        <div>
          <h5 className="sharableLinkContainer">Your sharable link: </h5>
          <span className="sharableLink">
            
            {/* {`https://localhost:8000/lolly/${data.getLollyBySlug.path}`} */}
          </span>
          <div className="recievedContentContainer">
            <Lolly
              fillLollyTop={data.getLollyBySlug.topColor}
              fillLollyMiddle={data.getLollyBySlug.mediumColor}
              fillLollyBottom={data.getLollyBySlug.bottomColor}
            />

            <div className="recievedTextContainer">
              <h3>HI {data.getLollyBySlug.recipientName.toUpperCase()}</h3>
              <p>{data.getLollyBySlug.message}</p>
              <h4>From: {data.getLollyBySlug.senderName}</h4>
            </div>
          </div>
        </div>: <h1>Loading....</h1>}
      </div>
  )
  
}
