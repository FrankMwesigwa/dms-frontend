import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Spinner from "../components/Spinner";
import Layout from "../components/Layout";
import ProtectedRoute from '../components/Protected';

const Login = lazy(() => import("../pages/Auth/Login"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Products = lazy(() => import("../pages/Products"));
const Agents = lazy(() => import("../pages/Agents"));
const AgentsReports = lazy(() => import("../pages/Reports"));

const AdminDistSales = lazy(() => import("../pages/Sales/Admin"));
const AdminDistOrders = lazy(() => import("../pages/Admin/Orders"));
const Distributor = lazy(() => import("../pages/Distributor"));
const AdminUser = lazy(() => import("../pages/Admin"));

const AddProducts = lazy(() => import("../pages/Products/AddProduct"));
const AgentOrders = lazy(() => import("../pages/Orders/Agents"));
const AgentCart = lazy(() => import("../pages/Orders/Agents/Cart"));

const DistCart = lazy(() => import("../pages/Orders/Distributors/Cart"));
const DistributorOrders = lazy(() => import("../pages/Orders/Distributors"));


const AgentSummary = lazy(() => import("../pages/Orders/Agents/AgentSummary"));
const OrderSummary = lazy(() => import("../pages/Orders/Distributors/OrderConfirm"));
const OrdersHistory = lazy(() => import("../pages/Orders/Distributors/History"));
const AgentsHistory = lazy(() => import("../pages/Orders/Agents/History"));
const AgentsOrdersReport = lazy(() => import("../pages/Reports/AgentOrders"));
const DistProducts = lazy(() => import("../pages/Orders/Distributors/DistProducts"));

const AgentsPurchases = lazy(() => import("../pages/Reports/AgentReports/Purchase"));

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

        <Route exact path="/admin/users" component={AdminUser} />
        <Route exact path="/admin/dist/sales" component={AdminDistSales} />
        <Route exact path="/admin/dist/orders" component={AdminDistOrders} />
        
        <Route exact path="/orders/agent" component={AgentCart} />
        <Route exact path="/orders/agents" component={AgentOrders} />
        
        <Route exact path="/agent/orders" component={AgentSummary} />
        <Route exact path="/reports" component={AgentsReports} />
        <Route exact path="/agents/reports" component={AgentsOrdersReport} />
        <Route exact path="/agents/history" component={AgentsHistory} />

        <Route exact path="/dist/orders" component={OrdersHistory} />
        <Route exact path="/dist/order/cart" component={DistCart} />
        <Route exact path="/dist/products" component={DistProducts} />
        <Route exact path="/dist/order/confirm" component={OrderSummary} />
        <Route exact path="/dist/place/order" component={DistributorOrders} />

        <Route exact path="/agent/purchases" component={AgentsPurchases} />
      </Layout>
    </Switch>
  </Suspense>
);

export default AdminRoutes;
