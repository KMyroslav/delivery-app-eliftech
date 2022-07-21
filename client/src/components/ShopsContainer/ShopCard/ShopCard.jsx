export default function ShopCard(shopName, shopImg) {
  return (
    <>
      <img src={shopImg} alt={`${shopName} shop icon`} />
      <p>{shopName}</p>
    </>
  );
}
