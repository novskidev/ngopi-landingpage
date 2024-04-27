function ProductCard({ picture, title, rating, review, description, price }) {
  return (
    <section className="flex flex-wrap justify-center w-full max-w-[302px] h-auto">
      <div className="flex flex-col bg-white rounded-lg shadow-lg p-4">
        <img
          className="w-full h-auto rounded-t-lg"
          src={picture}
          alt={title}
          width={302}
          height={240}
        />
        <div className="p-4">
          <h1 className="text-lg font-semibold">{title}</h1>
          <div className="flex items-center">
            <span className="text-yellow-500">{rating} ⭐</span>
            <span className="text-gray-500 ml-2">({review} reviews)</span>
          </div>
          <p className="text-sm text-gray-700">{description}</p>
          <div className="flex items-center mt-2">
            <h4 className="text-lg font-semibold text-gray-800">{price}</h4>
            <button className="ml-auto bg-primary text-white rounded-full w-[80px] h-[32px] flex items-center justify-center">
              +
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductCard;
