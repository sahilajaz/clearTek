
import Layout  from "../../(main)/layout"
//@ts-expect-error: This is intentional
// eslint-disable-next-line import/no-anonymous-default-export
export default ({ children }) => {
  return (
    <Layout showContactUs={true}>
      { children }
    </Layout> 
  )
}