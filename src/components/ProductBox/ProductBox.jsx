import { getDiscountPrice } from "../../Helpers/General";
import "./ProductBox.scss";

const ProductBox = ({productData, className}) => {
    console.log(productData);
    return (
        <div className={className}>
            <section className="productBox">
                <div className="productImg">
                    <img src={productData.images[0]} alt={`${productData.brand}`}/>
                </div>
                <div className="productInfo">
                    <span className="productBrand">{productData.brand.toUpperCase()}</span>
                    <span className="productTitle">{productData.title}</span>
                    <div className="pricingDetails">
                        <span className="productPrice">{Math.floor(getDiscountPrice(productData.price, productData.discountPercentage))}</span>
                        <span className="productMrp">{productData.price}</span>
                        <span className="productDiscount">({Math.floor(productData.discountPercentage)})%</span>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProductBox;