
import Layout  from "../../(main)/layout"
//@ts-ignore
export default ({ children  }) => {
  return (
    <Layout showContactUs={true}>
      { children }
    </Layout>
  )
}