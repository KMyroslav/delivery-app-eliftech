export default function ShopsContainer({ shops, setShop }) {
  return (
    <div>
      <ul>
        {shops.map((shop) => (
          <li key={shop._id} onClick={() => setShop(shop)}>
            {/* <img src={shopImg} alt={shop.name} /> */}
            <p>{shop.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
