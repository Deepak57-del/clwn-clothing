import React from 'react';

import '../privewcollection-component/preview.component.css';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title,items })=>(
    <div>
        <h1 className='title'>{title}</h1>
        <div className='preview'>
            {items.filter((item,idx)=> idx<4).map((item)=>(
                <CollectionItem key={item.id} name={item.name} price={item.price} imageUrl={item.imageUrl}/>
            ))
            }
        </div>
    </div>
)
export default CollectionPreview;