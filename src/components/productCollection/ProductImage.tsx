import React from "react";
import {Image, Typography} from 'antd'
import {Link} from 'react-router-dom'

interface ProductImageProps {
    id: string | number
    size: "small" | "large"
    title: string
    imageSrc: string
    price: number
}

export const ProductImage: React.FC<ProductImageProps> = ({id, size, title, imageSrc, price}) => {
    return (
        <Link to={`/detail/${id}`}>
            {size === 'large' ? <Image src={imageSrc} height={285} width={490}/> :
                <Image src={imageSrc} height={120} width={240}/>}
            <div>
                <Typography.Text type={'secondary'}>{title.slice(0, 25)}</Typography.Text>
                <Typography.Text type={'danger'} strong>from $ {price}</Typography.Text>
            </div>
        </Link>
    )
}
