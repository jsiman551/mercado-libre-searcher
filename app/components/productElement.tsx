import React from "react";
import Link from 'next/link'
import {
    DetailsContainer,
    FreeShippingIconContainer,
    ProductDuesText,
    ProductElementContainer,
    ProductImage,
    ProductImageContainer,
    ProductLocationText,
    ProductPriceText,
    ProductTitleText,
    TextsDetailsContainer,
} from "@/constants/styles";
import { setPriceFormat } from "@/tools/formatPrice";
import Image from "next/image";

/* Se evidenciaron en la respuesta de la API, cambios que
no son compatibles con el contrato "Product" como se plantea para el desafio,
a continuacion modifico el contrato y describo los cambios para hacer notar 
las diferencias respecto al contrato sugerido en github */

interface ProductProps {
    // no se sugiere el uso del atributo "id" en el diseño
    //id: string;
    title: string;
    // el atributo "price" es enrealidad de tipo numerico
    price: number;
    // no se sugiere el uso de "installments" en el diseño
    /*installments: {
        quantity: number;
        amount: string;
    };*/
    address: {
        state_name: string;
        city_name: string;
    };
    //se usa "thumbnail" en lugar de "picture"
    thumbnail: string;
    condition: string;
    shipping: {
        // free_shipping esta dentro del objeto shipping
        free_shipping: boolean;
    };
    /* una milla extra, "permalink" lo estoy añadiendo nuevo para
    convertir las imagenes en enlaces al detalle del producto */
    permalink: string;
}

const ProductElement = ({
    title,
    price,
    address,
    thumbnail,
    shipping,
    condition,
    permalink,
}: ProductProps) => {
    const { free_shipping } = shipping;
    return (
        <ProductElementContainer>
            <DetailsContainer>
                <ProductImageContainer>
                    <Link
                        href={permalink}
                        target="_blank"
                    >
                        <ProductImage 
                            src={thumbnail} 
                            alt={title}
                            width={160}
                            height={160}
                        />
                    </Link>
                </ProductImageContainer>
                <TextsDetailsContainer>
                    <ProductPriceText>
                        {`$ ${setPriceFormat(price)}`}
                        {free_shipping ? 
                            <FreeShippingIconContainer>
                                <Image 
                                    src="/truck-icon.svg" 
                                    alt={"free shipping"} 
                                    width={12} 
                                    height={12}
                                />
                            </FreeShippingIconContainer> 
                        : null}
                    </ProductPriceText>
                    <ProductTitleText>
                        {`${title} (${condition})`}
                    </ProductTitleText>
                    <ProductDuesText>
                        {/* No parece que esta informacion venga en la API */}
                        En 3 cuotas de $15.333
                    </ProductDuesText>
                </TextsDetailsContainer>
            </DetailsContainer>
            <ProductLocationText>
                {`${address?.city_name}, ${address?.state_name}`}
            </ProductLocationText>
        </ProductElementContainer>
    )
}

export default ProductElement;
