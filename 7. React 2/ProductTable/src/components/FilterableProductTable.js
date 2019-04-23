import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchQuery: '',
			data: [],
			filtered: []
		};

		this.filterTable = this.filterTable.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
	}

	handleSearch(e) {
		const searchQuery = e.target.value;

		this.setState(() => ({ searchQuery }), this.filterTable);
	}

	filterTable() {
		const { searchQuery, data } = this.state;
		const filtered = data.filter(item =>
			item['name'].toLowerCase().includes(searchQuery)
		);

		this.setState({
			filtered
		});
	}

	componentDidMount() {
		fetch(
			'https://gist.githubusercontent.com/severjason/f0a76c2ac8b3f15dac401b734b83dcf3/raw/a86f2d5b5c6578ae86c02d32d65bc0abaed4aeb9/products-mock-data.json'
		)
			.then(res => res.json())
			.then(data =>
				this.setState({
					data
				})
			);
	}

	render() {
		console.log(this.state.searchQuery);

		const data = this.state.searchQuery ? this.state.filtered : this.state.data;

		return (
			<div>
				<SearchBar handleSearch={this.handleSearch} />
				<ProductTable data={data} />
			</div>
		);
	}
}

export default FilterableProductTable;
