const path = require(`path`)
const Amplify = require('aws-amplify')
Amplify.default.configure({
    aws_appsync_region: "us-east-1",
    aws_appsync_graphqlEndpoint: "https://d47rtyzdhjexnjjhf2od77irle.appsync-api.us-east-1.amazonaws.com/graphql", // AWS AppSync endpoint
    aws_appsync_authenticationType: "API_KEY",
    aws_appsync_apiKey: "da2-apb5dy4pn5fpvccjvz4y3cjhzq" 
  });

const API = Amplify.API;  



exports.createPages = async ({ actions}) => {
    const query = `
    query getAllLollies{

        getAllLollies{
            bottomColor
            mediumColor
            topColor
            message
            path
            recipientName
            senderName
        }
    }
`
    const data = await API.graphql({ query })
    console.log('Node JS data:', data)

  data.data.getAllLollies.map(async (indLolly) => {
    console.log(indLolly)
    await actions.createPage({
      path: `lolly/${indLolly.path}`,
      component: path.resolve(`./src/template/lollyPage.jsx`),
      context: {
        lolly: indLolly,
      },
    })
  })
}