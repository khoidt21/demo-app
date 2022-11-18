import Api from './Api';

const url = "/department";

const getAll = () => {
    return Api.get(url);
};

// export
const groupApi = { getAll }
export default groupApi;

