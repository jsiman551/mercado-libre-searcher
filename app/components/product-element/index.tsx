import React from "react";
import Link from "next/link";
import { setPriceFormat } from "@/tools/formatPrice";
import Image from "next/image";
import {
  Container,
  DetailsContainer,
  ImageContainer,
  ProductImage,
  Details,
  PriceText,
  ShippingIconContainer,
  TitleText,
  DuesText,
  LocationText,
} from "./styles";

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
    <Container>
      <DetailsContainer>
        <ImageContainer>
          <Link href={permalink} target="_blank">
            <ProductImage
              src={thumbnail}
              alt={title}
              width={160}
              height={160}
            />
          </Link>
        </ImageContainer>
        <Details>
          <PriceText>
            {`$ ${setPriceFormat(price)}`}
            {free_shipping ? (
              <ShippingIconContainer>
                <Image
                  src="/icons/truck-icon.svg"
                  alt={"free shipping"}
                  width={12}
                  height={12}
                />
              </ShippingIconContainer>
            ) : null}
          </PriceText>
          <TitleText>{`${title} (${condition})`}</TitleText>
          <DuesText>
            {/* No parece que esta informacion venga en la API */}
            En 3 cuotas de $15.333
          </DuesText>
        </Details>
      </DetailsContainer>
      <LocationText>
        {`${address?.city_name}, ${address?.state_name}`}
      </LocationText>
    </Container>
  );
};

export default ProductElement;
