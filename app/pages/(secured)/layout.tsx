
import Layout  from "../../(main)/layout"
import { Toaster } from "@/components/ui/toaster"

//@ts-expect-error: This is intentional
 const Mycomponent = ({ children }) => {
  return (
    <Layout showContactUs={true}>
         <>
        {children}
        <Toaster />
        </>
    </Layout>   
  )
}

export default Mycomponent