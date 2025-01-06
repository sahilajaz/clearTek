
import Layout  from "../../(main)/layout"
//@ts-expect-error
export default ({ children  }) => {
  return (
    <Layout showContactUs={true}>
      { children }
    </Layout>
  )
}