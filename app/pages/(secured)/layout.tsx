
import Layout  from "../../(main)/layout"
//@ts-expect-error: This is intentional
 const Mycomponent = ({ children }) => {
  return (
    <Layout showContactUs={true}>
      { children }
    </Layout>   
  )
}

export default Mycomponent