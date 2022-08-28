import useProuduct from "../../hooks/useProuduct";
import Loading from "../../shere/Loading";
import Inventorytable from "./Inventorytable";
import { Link } from "react-router-dom";
const Manageitems = () => {
  const { products, hotReload } = useProuduct();

  return (
    <div className="bg-[#F8F7F6]">
      <h1 className="text-3xl font-serif text-center py-5">Manage Inventory</h1>
      <Link
        to="/add-item"
        className="border-2  broder-gray-600 h-14 w-64 block mx-auto text-xl text-center pt-3 font-semibold rounded shadow-sm"
      >
        Add New Item
      </Link>
      <div class="overflow-x-auto container py-10">
        <table class="table table-zebra w-full">
          <thead>
            <tr>
              <th className="text-[16px] font-serif">Name</th>
              <th className="text-[16px] font-serif"> Price</th>
              <th className="text-[16px] font-serif">Quantity</th>
              <th className="text-[16px] font-serif">Supplier</th>
              <th className="text-[16px] font-serif">Actiion</th>
            </tr>
          </thead>
          <tbody>
            {products ? (
              products.map((product) => (
                <Inventorytable
                  key={product._id}
                  product={product}
                  hotReload={hotReload}
                />
              ))
            ) : (
              <Loading />
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Manageitems;
