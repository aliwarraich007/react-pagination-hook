import {useSearchParams} from 'react-router-dom';
import {useEffect} from 'react';

function usePagination(defaultPage = 1) {
	const [params, setParams] = useSearchParams();

	useEffect(() => {
		let queryParams = params.get('page');
		if (!queryParams || +queryParams < 1) setParams({page: defaultPage.toString()});
	}, [params, setParams, defaultPage]);

	const nextPage = () => {
		setParams({'page': (+params.get('page') + 1).toString()});
	};

	const prevPage = () => {
		setParams({'page': (+params.get('page') - 1).toString()});
	};

	const navigateToPage = (page) => {
		setParams({'page': page.toString()});
	};

	const currentPage = +params.get('page') || defaultPage;

	return {currentPage, nextPage, prevPage, navigateToPage};
}

export default usePagination;
