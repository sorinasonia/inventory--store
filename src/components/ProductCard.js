import React from "react"

class ProductCard extends React.component {
    constructor(props) {
        super(props);
        this.state = {
            category: props.product.category,
            name: props.product.name,
            imageURL: 'http://via.placeholder.com/200x200',
            checkURL: props.product.imageURL,
        }
        this.checkImage.bind(this);
        this.checkImage();
    }

    // componentWillReceiveProps(nextProps) {
    //     if(nextProps.product.category !=
    //         this.state.category) {
    //             this.setState({category:
    //             nextProps.product.category});
    //     }
    //     if(nextProps.product.name != this.state.name) {

    //         this.setState({name: nextProps.product.name});
    //     }
    //     if(nextProps.product.price != this.state.price) {

    //         this.setState({price: nextProps.product.price});
    //     }
    //     if(nextProps.product.imageURL != this.state.product.imageURL) {
            
    //         this.setState({checkURL: nextProps.product.imageURL}, ()=> this.checkImage());
    //     }
    // }

    checkImage(){
        let image = new Image();
        image.onerror = () => {
            this.setState({imageURL: 'http://via.placeholder.com/200x200'});
        }
        image.onload = () => {
            this.setState({imageURL: this.state.checkURL});
        }
        image.src = this.state.checkURL;
    }


    render() {
        return(
            <div className = "ProductCard">
                <p className = "category">
                    Products &#187;
                    {this.state.category}
                </p>
                <p className= "price">from 
                <span>${this.state.price}</span></p>
            </div>
        );
    }

}
export default ProductCard;