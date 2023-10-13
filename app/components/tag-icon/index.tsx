import React from "react";
import Image from "next/image";
import { TagIconContainer } from "./styles";

interface Props {
  imgUrl: string;
  bgColor: string;
  altDescription: string;
}

const TagIcon = ({ imgUrl, bgColor, altDescription }: Props) => {
  return (
    <TagIconContainer $bgColor={bgColor}>
      <Image src={imgUrl} alt={altDescription} width={12} height={12} />
    </TagIconContainer>
  );
};

export default TagIcon;
