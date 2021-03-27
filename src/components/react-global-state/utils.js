import axios from 'axios'

export const getUsers = (dispatch) => () => {
  dispatch({type:'set',data:{'loading':true, error:null}})
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => dispatch({type:'set',data:{'users':res.data}}))
    .catch(error=>dispatch({type:'set',data:{error}}))
    .finally(()=>dispatch({type:'set',data:{'loading':false}}))
}

