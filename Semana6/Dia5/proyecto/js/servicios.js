const BASE_URL = 'https://60c17d104f7e880017dbfacd.mockapi.io';
export const getCategorias = async () => {
	const response = await fetch(`${BASE_URL}/categorias`, {
		method: 'GET'
	});
	const rpta = await response.json();
	return rpta;
};

export const getVehiculos = async () => {
	const response = await fetch(`${BASE_URL}/vehiculos`, {
		method: 'GET'
	});
	const rpta = await response.json();
	return rpta;
};

export const postVehiculo = async (objVehiculo) => {
	const response = await fetch(`${BASE_URL}/vehiculos`, {
		method: 'POST',
		body: JSON.stringify(objVehiculo),
		headers: {
			'Content-type': 'application/json'
		}
	});
	const rpta = await response.json();
	if (rpta.id) {
		return true;
	} else {
		return false;
	}
};
