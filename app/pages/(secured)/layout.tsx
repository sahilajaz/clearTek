
import Layout  from "../../(main)/layout"
//@ts-expect-error: This is intentional
export default ({ children }) => {
  return (
    <Layout showContactUs={true}>
      { children }
    </Layout> 
  )
}