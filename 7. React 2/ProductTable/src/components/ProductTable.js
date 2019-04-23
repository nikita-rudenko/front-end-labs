import React, { Component, Fragment } from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

class ProductTable extends Component {
	render() {
		const products = this.props.data;
		const categories = Array.from(
			new Set(products.map(product => product.category))
		);

		const _renderRows = data =>
			data.map((product, index) => (
				<ProductRow key={index} name={product.name} price={product.price} />
			));

		const rows = categories.map((category, idx) => {
			return (
				<Fragment key={idx}>
					<ProductCategoryRow key={idx} category={category} />
					{_renderRows(products)}
				</Fragment>
			);
		});

		console.log(categories);

		return <div>{rows ? rows : 'No data'}</div>;
	}
}

export default ProductTable;
