import { setCompanies} from '@/redux/companySlice'
import { COMPANY_API_END_POINT } from '@/utils/constant'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch}from 'react-redux'

const useGetAllCompanies = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchSingleCompany = async () => {
            try {
                const res = await axios.get(`${COMPANY_API_END_POINT}/get`,{withCredentials:true});
                if(res.data.success){
                    dispatch(setCompanies(res.data.company));
                }
            } catch (error) {
                console.log(error);
            }
        }
      fetchSingleCompany();
    },[companyId, dispatch])
}

export default useGetAllCompanies