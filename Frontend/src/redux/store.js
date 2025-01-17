import{configureStore} from "@reduxjs/toolkit"
import dashreducer from "./reducer"
export default configureStore
(
   {
     reducer:
     {
        email:dashreducer,
        userdata:dashreducer,
     }
   }
)
