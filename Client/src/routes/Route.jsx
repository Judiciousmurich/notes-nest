import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            {/* USER ROUTES*/}
        </Route>
         {/* AUTH ROUTES */}
         <Route>
         <Route path="auth" element={<AuthLayout />}>
         <Route path="login" element={<Login />} />
         <Route path="signup" element={<Signup />} />
     </Route>
    )
);