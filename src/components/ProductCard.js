const ProductCard = ( {name, price, image}) => {
    return(
        <div className="product-card">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{price.toLocaleString()}원</p>
        </div>
    );
};

export default ProductCard;