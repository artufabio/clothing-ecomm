import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

import './collection.styles.scss';

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return (
        <div className="collection-page">
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {
                    items.map( item =>(
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({    //ownProps are the props of our component that we're wrapping with connect
    collection: selectCollection(ownProps.match.params.collectionId)(state)
    // ownProps.match.params.collectionId is a string that we pass to selectCollection, which return a function that receives state as parameter
    // now I can dynamically display the collection based on the url I'm in
});


export default connect(mapStateToProps)(CollectionPage);