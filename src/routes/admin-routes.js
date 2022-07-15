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

const AgentDistProds = lazy(() => import("../pages/Orders/Agents"));
const AgentCart = lazy(() => import("../pages/Orders/Agents/Cart"));
const AgentSales = lazy(() => import("../pages/Orders/Agents/Sales"));
const AgentSalesReport = lazy(() => import("../pages/Reports/AgentSales"));
const CartSummary = lazy(() => import("../pages/Orders/Agents/CartSummary"));
const AgentProducts = lazy(() => import("../pages/Orders/Agents/AgentsProducts"));

const DistCart = lazy(() => import("../pages/Orders/Distributors/Cart"));
const DistributorOrders = lazy(() => import("../pages/Orders/Distributors"));

const OrderSummary = lazy(() => import("../pages/Orders/Distributors/OrderConfirm"));
const OrdersHistory = lazy(() => import("../pages/Orders/Distributors/History"));
const AgentsOrders = lazy(() => import("../pages/Orders/Agents/History"));
const AgentsOrdersReport = lazy(() => import("../pages/Reports/AgentOrders"));
const DistProducts = lazy(() => import("../pages/Orders/Distributors/DistProducts"));
const DistAgentSales = lazy(() => import("../pages/Orders/Distributors/Sales"));
const DistSalesWalkIn = lazy(() => import("../pages/Orders/Distributors/DistSales"));
const DistAgentOrders = lazy(() => import("../pages/Orders/Distributors/Orders"));

const DistReports = lazy(() => import("../pages/Reports/Dist"));
const DistSalesReport = lazy(() => import("../pages/Reports/Dist/DistSales"));
const DistStockReport = lazy(() => import("../pages/Reports/Dist/DistStock"));

const AgentsPurchases = lazy(() => import("../pages/Reports/AgentReports/Purchase"));

const AdminReportsDist = lazy(() => import("../pages/Reports/Admin/Dist"));
const AdminReportsDistStock = lazy(() => import("../pages/Reports/Admin/Dist/DistStock"));
const AdminReportsDistSales = lazy(() => import("../pages/Reports/Admin/Dist/DistSales"));

const AdminReportsAgent = lazy(() => import("../pages/Reports/Admin/Agent"));
const AdminReportsAgentStock = lazy(() => import("../pages/Reports/Admin/Agent/AgentStock"));
const AdminReportsAgentSales = lazy(() => import("../pages/Reports/Admin/Agent/AgentSales"));

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
        <Route exact path="/admin/reports/dist" component={AdminReportsDist} />
        <Route exact path="/admin/reports/dist/stock" component={AdminReportsDistStock} />
        <Route exact path="/admin/reports/dist/sales" component={AdminReportsDistSales} />

        <Route exact path="/admin/reports/agent" component={AdminReportsAgent} />
        <Route exact path="/admin/reports/agent/stock" component={AdminReportsAgentStock} />
        <Route exact path="/admin/reports/agent/sales" component={AdminReportsAgentSales} />
        
        <Route exact path="/agent/cart" component={AgentCart} />
        <Route exact path="/agent/orders" component={AgentsOrders} />
        <Route exact path="/agent/sales" component={AgentSales} />
        <Route exact path="/agent/reports" component={AgentsReports} />
        <Route exact path="/agent/products" component={AgentProducts} />
        <Route exact path="/agent/cart/summary" component={CartSummary} />
        <Route exact path="/agent/dist/products" component={AgentDistProds} />
        <Route exact path="/agent/reports/sales" component={AgentSalesReport} />
        
        {/* <Route exact path="/agents/reports" component={AgentsOrdersReport} /> */}

        <Route exact path="/dist/orders" component={OrdersHistory} />
        <Route exact path="/dist/order/cart" component={DistCart} />
        <Route exact path="/dist/sales" component={DistSalesWalkIn} />
        <Route exact path="/dist/reports" component={DistReports} />
        <Route exact path="/dist/products" component={DistProducts} />
        <Route exact path="/dist/order/confirm" component={OrderSummary} />
        <Route exact path="/dist/place/order" component={DistributorOrders} />
        <Route exact path="/dist/reports/sales" component={DistAgentSales} />
        <Route exact path="/dist/agent/orders" component={DistAgentOrders} />
        <Route exact path="/dist/reports/sale" component={DistSalesReport} />
        <Route exact path="/dist/reports/stock" component={DistStockReport} />

        <Route exact path="/agent/purchases" component={AgentsPurchases} />
      </Layout>
    </Switch>
  </Suspense>
);

export default AdminRoutes;
