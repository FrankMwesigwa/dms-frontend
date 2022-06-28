import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Spinner from "../components/Spinner";
import Layout from "../components/Layout";
import ProtectedRoute from '../components/Protected';

const Login = lazy(() => import("../pages/Auth/Login"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Products = lazy(() => import("../pages/Products"));
const Agents = lazy(() => import("../pages/Agents"));
const Distributor = lazy(() => import("../pages/Distributor"));
const AdminUser = lazy(() => import("../pages/Admin"));
const Cart = lazy(() => import("../pages/Orders/Distributors/Cart"));
const AddProducts = lazy(() => import("../pages/Products/AddProduct"));
const DistributorOrders = lazy(() => import("../pages/Orders/Distributors"));
const OrderSummary = lazy(() => import("../pages/Orders/Distributors/OrderSummary"));

const AdminRoutes = () => (
  <Suspense
    fallback={
      <div>
        <Spinner />
      </div>
    }
  >
    <Switch>
      <Route exact path="/login" component={Login} />
      <Layout>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/agents" component={Agents} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/addproduct" component={AddProducts} />
        <Route exact path="/distributors" component={Distributor} />
        <Route exact path="/orders/cart" component={Cart} />
        <Route exact path="/admin/users" component={AdminUser} />
        <Route exact path="/orders/summary" component={OrderSummary} />
        <Route exact path="/orders/distributors" component={DistributorOrders} />
      </Layout>
    </Switch>
  </Suspense>
);

export default AdminRoutes;
